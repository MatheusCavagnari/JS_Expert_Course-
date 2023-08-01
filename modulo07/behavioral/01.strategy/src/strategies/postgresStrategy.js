import knex from 'knex'

export default class PostgresStrategy {
  #intance
  constructor(connectionString) {
    this.connectionString = connectionString
    this.table = "warriors"
  }

  async connect() {
    this.#intance = knex({
      client: 'pg',
      connection: this.connectionString
    })

    return this.#intance.raw('select 1+1 as result')
  }

  async create(item) {
    return this.#intance.insert(item).into(this.table)
  }

  async read(item) {
    return this.#intance.select().from(this.table)
  }

}