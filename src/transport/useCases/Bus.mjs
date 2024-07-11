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
      
    const id = UUIDGenerator.generate()
    embarkationDto._id = id
    embarkationDto.created_at = new Date();
    embarkationDto.isActive = true;
    const result = await this.repository.save(embarkationDto);
    if (!result) {
      throw new DataNotFoundException('Not found.');
    }
    embarkationDto._id = id
    return embarkationDto;
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

  async remove(userId) {
    const id = UUIDGenerator.from(userId.id)

    const resultId = await this.repository.remove(id);
    if (resultId.deletedCount === 1) {
      return { message: 'Removed Success' }
    }
    throw new DataNotFoundException('Id not found.');
  }

}

export default Travel
