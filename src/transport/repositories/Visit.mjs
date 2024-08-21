class Travel {
  constructor(repositoryImpl) {
    this.collection = 'travel'
    this.repository = repositoryImpl
  }

  async save(travel) {
    return this
      .repository
      .save(this.collection, travel)
  }

  async update(id) {
    return this
      .repository
      .update(this.collection, id)
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

  async getById(id, collection) {
    const data = await this.repository.get(collection, id)
    return data
  }
 
}

export default Travel
