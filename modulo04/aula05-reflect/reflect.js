'use strict'

const assert = require('assert')

// garantir semantica e segurança em objetos

// ---- apply
const myObj = {
  add(myValue) {
    return this.arg1 + this.arg2 + myValue
  }
}
// Function.prototype.apply = () => { throw new TypeError('Eita!') }

assert.deepStrictEqual(myObj.add.apply({ arg1: 10, arg2: 20 }, [100]), 130)

// um problema que pode acontecer (raro)
// Function.prototype.apply = () => { throw new TypeError('Eita!') }

// essa qui pode acontecer!
myObj.add.apply = function () { throw new TypeError('Vixxx') }

assert.throws(() => myObj.add.apply({}, []), { name: "TypeError", message: "Vixxx" })

// usando reflect:
const result = Reflect.apply(myObj.add, { arg1: 40, arg2: 20 }, [200])
assert.deepStrictEqual(result, 260)
// --- apply

// ---- defineProperty

// questoes semanticas
function MyDate() { }

// feio pra Kct, tudo é Object, mas Object adicionando prop uma funtion?
Object.defineProperty(MyDate, 'withObject', { value: () => 'Hey there' })

// Agora faz mas sentido 
Reflect.defineProperty(MyDate, 'withReflection', { value: () => 'Hey dude' })

assert.deepStrictEqual(MyDate.withObject(), 'Hey there')
assert.deepStrictEqual(MyDate.withReflection(), 'Hey dude')
// --- defineProperty

// --- deleteProperty
const withDelete = { user: 'ErickWendel' }
// imperformático, evitar ao máximo
delete withDelete.user

assert.deepStrictEqual(withDelete.hasOwnProperty('user'), false)

const withReflection = { user: 'XuxaDaSilva' }
Reflect.deleteProperty(withReflection, "user")
assert.deepStrictEqual(withReflection.hasOwnProperty("user"), false)

// --- deleteProperty

// ---- get

// Deveriamos fazer um get somente em instancias de referencias
assert.deepStrictEqual(1['userName'], undefined)
// com reflection, uma excacao e lancada!
assert.throws(() => Reflect.get(1, "userName"), TypeError)
// ---- get

// --- has
assert.ok('superman' in { superman: '' })
assert.ok(Reflect.has({ batman: '' }, "batman"))
// --- has

// --- ownkeys
const user = Symbol('user')
const databaseUser = {
  id: 1,
  [Symbol.for('password')]: 123,
  [user]: 'erickwendel'
}

//Com os metodos de object, temos que fazer 2 requisicoes
const objectKeys = [...Object.getOwnPropertyNames(databaseUser), ...Object.getOwnPropertySymbols(databaseUser)]
assert.deepStrictEqual(objectKeys, ['id', Symbol.for('password'), user])

// com reflection, só e um método
assert.deepStrictEqual(Reflect.ownKeys(databaseUser), ['id', Symbol.for('password'), user])
