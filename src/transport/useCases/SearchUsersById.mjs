/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

import DataNotFoundException from '../../core/exceptions/DataNotFoundException.mjs'
import UUIDGenerator from '../../support/UUIDGenerator.mjs'

class SearchEmbarkation {
  constructor(repository) {
    this.repository = repository
  }

  async execute() {
      const resultUser = await this.repository.getById()
    if (!resultUser) {
      throw new DataNotFoundException('User not found.')
    }
    return resultUser
  }
}

export default SearchEmbarkation
