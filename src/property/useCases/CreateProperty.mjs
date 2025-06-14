/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

import AlreadyExistsException from '../../core/exceptions/AlreadyExistsException.mjs'
import DataNotFoundException from '../../core/exceptions/DataNotFoundException.mjs'
import UUIDGenerator from '../../support/UUIDGenerator.mjs'
// import bcrypt from 'bcrypt';

class CreateProperty {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(propertyDto) {
  
     const resultOwnerUser = await this.repository.getById(UUIDGenerator.from(propertyDto.idOwner), 'user')
    if (!resultOwnerUser) {
      throw new DataNotFoundException('Owner not found.')
    }
    
    // const owner = await this.repository.getById(id)

    //  if (owner.length > 0) throw new DataNotFoundException('Owner not found.');   
     
    const id = UUIDGenerator.generate()
    propertyDto._id = id
    propertyDto.created_at = new Date();
    const resultUser = await this.repository.save(propertyDto);
    if (!resultUser) {
      throw new DataNotFoundException('User not found.');
    }
    propertyDto._id = id
    return propertyDto;
  }
}

export default CreateProperty
