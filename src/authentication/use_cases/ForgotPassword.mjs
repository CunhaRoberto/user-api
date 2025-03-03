import nodemailer from 'nodemailer';
import crypto from 'crypto';
import DataNotFoundException from '../../core/exceptions/DataNotFoundException.mjs'
import InvalidParameterException from '../../core/exceptions/InvalidParameterException.mjs'
import Application from '../../support/Application.mjs'
import UUIDGenerator from '../../support/UUIDGenerator.mjs'


class CreateUsers {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(param) {

    let {    
      USER_EMAIL, // Email do remetente
      PASS_EMAIL, // Senha de aplicativo do Gmail (não use sua senha normal)
      ENVIRONMENT 
    } = process.env

    // Verificar se o usuário existe
    const user = await this.repository.getUserByEmail(param.email);

    if (user.length < 1) {
      throw new DataNotFoundException('User not found.');
    }

    const token = crypto.randomBytes(4).toString('hex');
    const now = new Date();
    now.setMinutes(now.getMinutes() + 30);

    const params = {
      pass : PASS_EMAIL,      // Senha de aplicativo
      user: USER_EMAIL        // Email do remetente
    }

    // Modo de desenvolvimento: se não estiver em produção, usaremos um e-mail fixo para teste
    if(!Application.isInProductionMode()) param.email = 'rcunha.live@gmail.com'

    const transport = nodemailer.createTransport({
      service: 'gmail',  // Usando o serviço Gmail
      auth: {
        user: USER_EMAIL,
        pass: PASS_EMAIL  // Usando a senha de aplicativo
      },
      tls: {
        rejectUnauthorized: false  // Evitar problemas de certificado, se necessário
      },
      connectionTimeout: 100000,
    });

    // Verificação de conexão SMTP
    transport.verify(function(error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log('Conexão SMTP pronta');
      }
    });

    // Mensagem a ser enviada
    const message = {
      from: `${USER_EMAIL}`,  // O remetente
      to: param.email,        // Destinatário
      subject: 'Código para cadastrar nova senha',
      html: `<p> Olá ${user[0].name}, utilize o código <strong>${token}</strong> para cadastrar a nova senha.</p>`
    };

    const dataCode = {
      _id: UUIDGenerator.generate(),
      idUser: user[0]._id,
      code: token,
      codeExpires: now,
      message,
      created_at: new Date()
    }

    await this.repository.saveCode(dataCode);  // Salva o código no banco de dados

    // Envio do e-mail
    try {
      const response = await transport.sendMail(message);
      console.log('E-mail enviado:', response);
    } catch (error) {
      console.error('Erro ao enviar o e-mail:', error);
      throw new InvalidParameterException(JSON.stringify({ "message": "Failed to send email, try later", error }));
    }
  }
}

export default CreateUsers;
