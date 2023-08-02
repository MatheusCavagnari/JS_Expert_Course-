import { NotImplementedException } from "../../util/exceptions.js";

export default class BaseBusiness {

  _validateRequiredFields(data) {
    throw new NotImplementedException(
      this._validateRequiredFields.name
    )
  }

  _create(data) {
    throw new NotImplementedException(this._create.name)
  }
  /**
   * Padão do Martin Fowler
   * a proposta do padro é garantir um fluxo de métodos, definidos uma sequencia a ser 
   * executada
   * @param {*} data 
   * esse create é a implementação efetiva do Templete Method
   */
  create(data) {
    const isVaid = this._validateRequiredFields(data)
    if (!isVaid) throw new Error(`invalid fata!`)

    return this._create(data)
  }
}