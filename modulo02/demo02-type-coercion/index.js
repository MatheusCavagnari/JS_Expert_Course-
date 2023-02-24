console.assert(String(123) === '123', "explicit convertion to string")
console.assert(123 + '' === '123', "implicit convertion to string")

console.assert(('hello' || 123) === 'hello', "|| return the first element! in os two elentes for true")
console.assert(('hello' && 123) === 123, "&& return the first element! in os two elentes for true")

///-----------------------

const item = {
    name: 'Matheus',
    age: 25,
    //string: 1 primeiro, cham valueOf
    toString() {
        return `Name: ${this.name}, Age: ${this.age}`
    },
    valueOf() {
        return {hey: 'dude'}
    },
    //ele tem prioridade na parada

    [Symbol.toPrimitive](coercuinType) {
        //console.log('trying to convert to ', coercuinType)
        const types = {
            string: JSON.stringify(this),
            number: '0007'
        }
        return types[coercuinType] || types.string
    }
}

//console.log(`toString: `,String(item))
//console.log(`valueOf: `,Number(item))

//console.log('String', String(item))
//console.log('String', Number(item))
//console.log('Date', new Date(item))

console.assert(item + 0 === '{"name":"Matheus","age":25}0')
console.assert(!!item)
console.assert('Ae'.concat(item)=== 'Ae{"name":"Matheus","age":25}')
console.assert(item == String(item))

const item2 = { ...item, name: "Xexin", age: 20 }
console.assert(item2.name === 'Xexin' && item2.age === 20)