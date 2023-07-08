class Database {
  constructor({ connectionString }) {
    this.connectionString = connectionString
  }

  async sleep(ms) {
    return new Promise(resolver => {
      setTimeout(resolver, ms)
    })
  }

  async connect() {
    await this.sleep(100)
    return this
  }

  async find(query) {
    await this.sleep(100)
    return [{ name: 'MatheusCavagnari' }]
  }
}

module.exports = Database