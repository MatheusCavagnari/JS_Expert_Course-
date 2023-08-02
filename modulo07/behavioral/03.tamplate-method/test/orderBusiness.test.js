import { expect, describe, test, jest, beforeEach } from '@jest/globals';
import Order from '../src/entities/order.js';
import OrderBusiness from '../src/business/orderBusiness.js';

describe('Test suit for Template Method desing pattern', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })
  describe('#OrderBusiness', () => {
    test('execution Order Business without Tamplate Method', () => {
      const order = new Order({
        customerId: 1,
        amount: 100.000,
        products: [{ description: 'ferrari' }]
      })
      const orderBusiness = new OrderBusiness
      //todos os devs devem obrigatoriamento lembrar de seguir a risca esse fluxo de execução
      // se algum esquecer de chamar a função de validação, pode quebrar todo o sistema
      const isValid = orderBusiness._validateRequiredFields(order)

      expect(isValid).toBeTruthy()
      const result = orderBusiness._create(order)
      expect(result).toBeTruthy()
    })
    test('execution Order Business with Tamplate Method', () => {
      const order = new Order({
        customerId: 1,
        amount: 100.000,
        products: [{ description: 'ferrari' }]
      })
      const orderBusiness = new OrderBusiness
      const calledValidationFn = jest.spyOn(
        orderBusiness,
        orderBusiness._validateRequiredFields.name,
      )
      const calledCreateFn = jest.spyOn(
        orderBusiness,
        orderBusiness._create.name,
      )
      // com template method, a sequencia de passa é sempre executada
      // evitar a replicacao de lógica
      const result = orderBusiness.create(order)
      expect(result).toBeTruthy()
      expect(calledValidationFn).toHaveBeenCalled()
      expect(calledCreateFn).toHaveBeenCalled()
    })
  })


})