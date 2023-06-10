import mocha from 'mocha'
const { describe, it } = mocha
import chai from 'chai'
const { expect } = chai
import Person from '../src/person.js'

describe('Person', () => {
  it('should return a person instance from a string', () => {
    const person = Person.generateInstanceFromString(
      '2 Bike,Aviao,Navio 200000 2000-01-01 2000-02-01'
    )
    const expected = {
      from: '2000-01-01',
      to: '2000-02-01',
      vehicles: ['Bike', 'Aviao', 'Navio'],
      kmTraveled: "200000",
      id: '2',
    }
    expect(person).to.be.deep.equal(expected)

  })
  it('shold format values', () => {
    const person = new Person({
      from: '2000-01-01',
      to: '2000-02-01',
      vehicles: ['Bike', 'Aviao', 'Navio'],
      kmTraveled: "200000",
      id: '2',
    })
    const result = person.fromatted("pt-BR")

    const expected = {
      id: 2,
      vehicles: 'Bike, Aviao e Navio',
      kmTraveled: '200.000 km',
      from: '01 de janeiro de 2000',
      to: '01 de fevereiro de 2000'
    }
    expect(result).to.be.deep.equal(expected)
  })
})