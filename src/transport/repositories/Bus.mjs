class Bus {
  constructor(repositoryImpl) {
    this.collection = 'bus'
    this.repository = repositoryImpl
  }

  async save(bus) {
    return this
      .repository
      .save(this.collection, route)
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
 
}

export default Bus
