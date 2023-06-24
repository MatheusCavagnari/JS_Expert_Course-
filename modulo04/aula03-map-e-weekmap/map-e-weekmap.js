const assert = require('assert')

const myMap = new Map();

// podem ter qualquer coisa como chave

myMap
  .set(1, 'one')
  .set('Erick', { text: 'two' })
  .set(true, () => 'hello')

const myMapWithConstructor = new Map([
  ['1', 'str1'],
  [1, 'num1'],
  [true, 'bool1']
])

// console.log(myMap)
// console.log(myMap.get(1))

assert.deepStrictEqual(myMap.get(1), 'one')
assert.deepStrictEqual(myMap.get('Erick'), { text: 'two' })
assert.deepStrictEqual(myMap.get(true)(), 'hello')

// Em Objetos a chave só pode ser string ou symbol (number é coergido a string)
const onlyRefenceWorks = { id: 1 }
myMap.set(onlyRefenceWorks, { name: 'ErickWendel' })

assert.deepStrictEqual(myMap.get({ id: 1 }), undefined)
assert.deepStrictEqual(myMap.get(onlyRefenceWorks), { name: 'ErickWendel' })

// utilitarios
// - No Object seria Object.keys({a: 1}).length
assert.deepStrictEqual(myMap.size, 4)

// para verificar se um item existe no objeto 
// item.key = se não existe = undefined 
// if () = coerção implicita para boolean e retorna false
// 0 jeito cert em Object é ({ name: 'Erick'}).hasOwnProperty('name') 

assert.ok(myMap.has(onlyRefenceWorks))

// para remover um item do objeto
// deleta item.id
// imperformatico para o Javascript

assert.ok(myMap.delete(onlyRefenceWorks))

// Não dá para iterar em Objects diretamente
// tem que transformar com o Object.entries(item)
assert.deepStrictEqual(JSON.stringify([...myMap]), JSON.stringify([[1, "one"], ["Erick", { "text": "two" }], [true, () => { }]]))

// for (const [key, value] of myMap) {
//   console.log({ key, value })
// }


//Object é inseguro, pois dependendo do nome da chave, pode substituir algum comportamento padrão
// ({ }.toString() === '[object Object]'
// ({toString: () => 'Hey'}).toString() === 'Hey'

// qualquer chave pode colidir, com as propriedades herdadas do objecto, como 
// constructor, toString, valueOf e etc.

const actor = {
  name: 'Xuxa da Silva',
  toString: 'Queen: Xuxa da Silva'
}

// nao tem restricao de nome de chave
myMap.set(actor)

assert.ok(myMap.has(actor))
assert.throws(() => myMap.get(actor).toString, TypeError)

//Nao da para limpar um Obj sem reassina-lo
myMap.clear()
assert.deepStrictEqual([...myMap.keys()], [])

// === WeakMap

// Pode ser coletado após perder as referencias 
// usado em casos beeem específicos

// tem a maioria dos beneficios do Map
// Mas: não é iterável
// Só chave de referencia e que você já conheça
// mais leve e preve leak de memoria, pq depois que as instancias saem da memoria, tudo é limpo 

const WeakMap = new WeakMap()
const hero = { name: 'Flash' }

// WeakMap.set(hero)
// WeakMap.get(hero)
// WeakMap.delete(hero)
// WeakMap.has(hero)
