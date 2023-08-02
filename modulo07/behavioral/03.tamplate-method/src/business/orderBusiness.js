import BaseBusiness from "./base/baseBusiness.js";

export default class OrderBusiness extends BaseBusiness {
  #order = new Set()
  _validateRequiredFields(data) {
    return !!data.amount && !!data.products.length
  }

  _create(date) {
    this.#order.add(date)
    return true
  }
}