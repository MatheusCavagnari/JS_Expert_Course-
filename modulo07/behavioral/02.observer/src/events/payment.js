export default class Payment {
  constructor(paymentSubject) {
    this.paymentSubject = paymentSubject
  }
  creditCard(paymentData) {
    console.log(`\na paymente ocurred from ${paymentData.userName}`)
    this.paymentSubject.notify(paymentData)
  }
}