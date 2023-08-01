export default class ContextStrategy {
  constructor(dbSrategy) {
    this.dbSrategy = dbSrategy
  }

  async connect() {
    return this.dbSrategy.connect()
  }

  async create(item) {
    return this.dbSrategy.create(item)
  }

  async read(item) {
    return this.dbSrategy.read(item)
  }

}