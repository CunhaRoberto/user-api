/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

import AlreadyExistsException from '../../core/exceptions/AlreadyExistsException.mjs';
import DataNotFoundException from '../../core/exceptions/DataNotFoundException.mjs';
import UUIDGenerator from '../../support/UUIDGenerator.mjs';
import sulla from 'sulla'; // Importe a biblioteca sulla aqui

class CreateUsers {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(userDto) {
    userDto.email = userDto.email.toLowerCase();
    const cpfUserPromise = this.repository.getUserByCpf(userDto.cpf);
    const emailUserPromise = this.repository.getUserByEmail(userDto.email);
    const [cpfUser, emailUser] = await Promise.all([cpfUserPromise, emailUserPromise]);

    //if (cpfUser.length > 0) throw new AlreadyExistsException('CPF already exists.');
    //if (emailUser.length > 0) throw new AlreadyExistsException('Email already exists.');

    const id = UUIDGenerator.generate();
    userDto._id = id;
    userDto.created_at = new Date();
    const resultUser = await this.repository.save(userDto);
    if (!resultUser) {
      throw new DataNotFoundException('User not found.');
    }
    userDto._id = id;

    // Função para enviar mensagem via WhatsApp
    async function sendMessage() {
      try {
        // Inicia a sessão do WhatsApp Web
        const client = await sulla.create();

        // Número de telefone do contato para enviar mensagem
        const contactNumber = '5511994704244';
        
        // Mensagem a ser enviada
        const message = 'Olá! Esta é uma mensagem enviada pelo Node.js via WhatsApp.';

        // Envia a mensagem para o contato especificado
        await client.sendText(contactNumber, message);

        console.log('Mensagem enviada com sucesso!');
        
        // Fecha a sessão do WhatsApp Web
        await client.close();
      } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
      }
    }

    // Chama a função para enviar mensagem
    sendMessage();

    return userDto;
  }
}

export default CreateUsers;
