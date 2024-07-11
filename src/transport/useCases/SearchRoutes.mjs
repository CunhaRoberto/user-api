/* eslint-disable max-len */
/* eslint-disable no-param-reassign */

import DataNotFoundException from '../../core/exceptions/DataNotFoundException.mjs'
import UUIDGenerator from '../../support/UUIDGenerator.mjs'

class SearchRoutes {
  constructor(repository) {
    this.repository = repository
  }

  async execute() {
      const result = await this.repository.getAll()
    if (!result) {
      throw new DataNotFoundException('Not found.')
    }
    return result
  }
}

export default SearchRoutes
