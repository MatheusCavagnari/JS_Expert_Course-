const assert = require("assert");

function  Employee() {}
Employee.prototype.salary = () => "salary**"

function Supervisor() {}

Supervisor.prototype = Object.create(Employee.prototype)
Supervisor.prototype.profitShare = () => "profitShare**"

console.log(Supervisor.prototype.salary())


function Manager(){}
Manager.prototype = Object.create(Supervisor.prototype)
Manager.prototype.monthyBonuses = () => 'monthlyBonuses**'

console.log(Manager.prototype.salary())

const manager = new Manager()

assert.deepStrictEqual(manager.__proto__, Manager.prototype)
assert.deepStrictEqual(manager.__proto__.__proto__, Supervisor.prototype)
assert.deepStrictEqual(manager.__proto__.__proto__.__proto__, Employee.prototype)
assert.deepStrictEqual(manager.__proto__.__proto__.__proto__.__proto__, Object.prototype)
assert.deepStrictEqual(manager.__proto__.__proto__.__proto__.__proto__.__proto__, null)

class T1 {
    ping() { return 'ping'}
}

class T2 extends T1 {
    pong() {  return 'pong'}
}

class T3 extends T2 {
    shoot() { return 'shoot'}
}

const t3 = new T3()

assert.deepStrictEqual(t3.__proto__.__proto__.__proto__.__proto__.__proto__, null)