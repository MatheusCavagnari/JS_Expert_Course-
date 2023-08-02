import { expect, describe, test, jest, beforeEach } from '@jest/globals';
import BaseBusiness from '../src/business/base/baseBusiness';
import { NotImplementedException } from '../src/util/exceptions.js';

describe('#BaseBusiness', () => {
  beforeEach(() => {
    jest.restoreAllMocks()
  })

  test('should throw an error when child class doesnt implement _validateRequiredFields function', () => {
    class ConcreteClass extends BaseBusiness { }
    const concreateClass = new ConcreteClass()
    const validationError = new NotImplementedException(
      concreateClass._validateRequiredFields.name
    )
    expect(() => concreateClass.create({})).toThrow(validationError)
  })

  test('should throw an error _validateRequiredFields returns false', () => {
    const VALIDATION_DOENST_SUCCEDED = false

    class ConcreteClass extends BaseBusiness {
      _validateRequiredFields = jest.fn().mockReturnValue(VALIDATION_DOENST_SUCCEDED)
    }
    const concreateClass = new ConcreteClass()
    const validationError = Error(`invalid fata!`)

    expect(() => concreateClass.create({})).toThrow(validationError)
  })

  test('should throw an error when child class doesnt implement _create function', () => {
    const VALIDATION_SUCCEDED = true

    class ConcreteClass extends BaseBusiness {
      _validateRequiredFields = jest.fn().mockReturnValue(VALIDATION_SUCCEDED)
    }
    const concreateClass = new ConcreteClass()
    const validationError = new NotImplementedException(
      concreateClass._create.name
    )

    expect(() => concreateClass.create({})).toThrow(validationError)
  })
  test('should call _create and _validateRequiredFields on create', () => {
    const VALIDATION_SUCCEDED = true
    const CREATE_SUCCEDED = true

    class ConcreteClass extends BaseBusiness {
      _validateRequiredFields = jest.fn().mockReturnValue(VALIDATION_SUCCEDED)
      _create = jest.fn().mockReturnValue(CREATE_SUCCEDED)
    }
    const concreateClass = new ConcreteClass()
    const createFromBaseClassFn = jest.spyOn(
      BaseBusiness.prototype,
      BaseBusiness.prototype.create.name,
    )
    const result = concreateClass.create({})

    expect(result).toBeTruthy()
    expect(createFromBaseClassFn).toHaveBeenCalled()
    expect(concreateClass._create).toHaveBeenCalled()
    expect(concreateClass._validateRequiredFields).toHaveBeenCalled()
  })

})