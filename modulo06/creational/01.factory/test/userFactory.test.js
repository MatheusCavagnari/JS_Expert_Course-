const rewiremock = require('rewiremock/node')
const { deepStrictEqual } = require('assert')

// <poderia esta em outro aquivo >
const dbData = [{ name: 'Mariazinha' }, { name: 'Joazin' }]
class MockDatabase {
  connect = () => this
  find = async (query) => dbData
}

// </poderia estar em outro arquivo>

rewiremock(() => require('./../src/util/database')).with(MockDatabase)

  ; (async () => {
    {
      const expected = [{ name: 'MARIAZINHA' }, { name: 'JOAZIN' }]
      rewiremock.enable()
      const UserFactory = require('../src/factory/userFactory')

      const userFactory = await UserFactory.createInstance()
      const result = await userFactory.find()
      deepStrictEqual(result, expected)

      rewiremock.disable()

    }
    {
      const expected = [{ name: 'MATHEUSCAVAGNARI' }]

      const UserFactory = require('../src/factory/userFactory')

      const userFactory = await UserFactory.createInstance()
      const result = await userFactory.find()
      deepStrictEqual(result, expected)

    }
  })()