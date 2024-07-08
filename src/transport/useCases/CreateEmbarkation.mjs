/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

import AlreadyExistsException from '../../core/exceptions/AlreadyExistsException.mjs'
import DataNotFoundException from '../../core/exceptions/DataNotFoundException.mjs'
import UUIDGenerator from '../../support/UUIDGenerator.mjs'
// import bcrypt from 'bcrypt';

class CreateEmbarkation {
  constructor(repository) {
    this.repository = repository;
  }

  async execute(embarkationDto) {
      
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
}

export default CreateEmbarkation
