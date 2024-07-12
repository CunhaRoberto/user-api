class Embarkation {
  constructor(repositoryImpl) {
    this.collection = 'embarkation'
    this.repository = repositoryImpl
  }

  async save(embarkation) {
    return this
      .repository
      .save(this.collection, embarkation)
  }

  async update(embarkation) {
    return this
      .repository
      .update(this.collection, embarkation)
    }
    
    async getAll() {
      const data = await this.repository.getAll(this.collection)
      return data
    }

  async remove(id) {
    const data = await this
      .repository
      .remove(this.collection, id)
    return data
  }
 
}

export default Embarkation
