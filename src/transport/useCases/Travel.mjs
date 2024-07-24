/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

import DataNotFoundException from '../../core/exceptions/DataNotFoundException.mjs'
import UUIDGenerator from '../../support/UUIDGenerator.mjs'

class Travel {
  constructor(repository) {
    this.repository = repository
  }

  async search() {
      const result = await this.repository.getAll()
    if (!result) {
      throw new DataNotFoundException('Not found.')
    }
    return result
  }

  async create(dto) {
    
    dto.idBus = UUIDGenerator.from(dto.idBus)
    dto.idRoute = UUIDGenerator.from(dto.idRoute)
    
    const resultBus = await this. repository.getById(dto.idBus, 'bus')
    if (!resultBus) {
      throw new DataNotFoundException('Not found.');
    }else{
    dto.prefix = resultBus.prefixo
    dto.plaque = resultBus.placa
    dto.characterized = resultBus.caracterizado
    dto.numberSeats = resultBus.quantidadePoltronas
    }


    const resultRoute = await this. repository.getById(dto.idRoute, 'routes')
    if (!resultRoute) {
      throw new DataNotFoundException('Not found.');
    }else{
    dto.nameRoute = resultRoute.name  
    }

    const id = UUIDGenerator.generate()
    dto._id = id
    dto.created_at = new Date();   
    dto.isActive = true;
    const result = await this.repository.save(dto);
    if (!result) {
      throw new DataNotFoundException('Not found.');
    }
    dto._id = id
    return dto;
  }


  async update(dto) {

    const cpfUser = await this.repository.getUserByCpf(userDto.cpf)
    if (cpfUser.length > 0) {
      throw new AlreadyExistsException('CPF already exists.');
    }

    if(userDto.email){
      userDto.email = userDto.email.toLowerCase();
      const emailUser = await this.repository.getUserByEmail(userDto.email)
      if (emailUser.length > 0) {
        throw new AlreadyExistsException('Email already exists.');
      } 
    }
   
    
    userDto._id = UUIDGenerator.from(userDto.id)
    delete userDto.id
    userDto.updated_at = new Date();    
    const result = await this.repository.update(userDto);

    if (result.modifiedCount === 0) {
      throw new DataNotFoundException('User not found.')
    }

    return userDto;
  }

  async remove(travelId) {
    const id = UUIDGenerator.from(travelId.id)

    const resultId = await this.repository.remove(id);
    if (resultId.deletedCount === 1) {
      return { message: 'Removed Success' }
    }
    throw new DataNotFoundException('Id not found.');
  }

}

export default Travel
