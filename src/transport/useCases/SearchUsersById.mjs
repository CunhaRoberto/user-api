/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

import DataNotFoundException from '../../core/exceptions/DataNotFoundException.mjs'
import UUIDGenerator from '../../support/UUIDGenerator.mjs'

class SearchEmbarkation {
  constructor(repository) {
    this.repository = repository
  }

  async execute() {
      const result = await this.repository.get()
    if (!result) {
      throw new DataNotFoundException('Not found.')
    }
    return result
  }
}

export default SearchEmbarkation
