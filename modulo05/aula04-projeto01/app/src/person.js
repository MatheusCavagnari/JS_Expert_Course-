const { evaluateRegex } = require('./util')

class Person {
  // (\w+):\s.*
  // $1,
  constructor([
    nome,
    nacionalidade,
    estadoCivil,
    documento,
    rua,
    numero,
    bairro,
    estado,
  ]) {
    // ^ => começo da string 
    // + => um ou mais ocorrencias
    // (\w{1}) =>  pegar só a primeira letra e deixar em um grupo
    // (a-zA-Z) encontrar letra maiusculas ou minusculas, adicionando o + pra ele pegar todas até o caracter especial
    // g => todas as ocorrencias que encontrar

    const firstLetterExp = evaluateRegex(/^(\w{1})([a-zA-Z]+$)/g)
    const formatFirstLetter = (prop) => {
      return prop.replace(firstLetterExp, (fullMatch, group1, group2, index) => {
        return `${group1.toUpperCase()}${group2.toLowerCase()}`
      })
    }

    // (\w+),
    // this.$1 = $1
    this.nome = nome
    this.nacionalidade = formatFirstLetter(nacionalidade)
    this.estadoCivil = formatFirstLetter(estadoCivil)
    // tudo que nao for digitado vira vazio
    // /g serve para remover todas as ocorencias que encontrar
    this.documento = documento.replace(evaluateRegex(/\D/g), "")
    // começa a procurar depois do " a "  e pega tudo que tem a frente
    // (?<= faz com que ignore tudo que tiver antes desse match)
    // conhecido como positive lookBehind
    this.rua = rua.match(evaluateRegex(/(?<=\sa\s).*$/)).join()
    this.numero = numero
    // começa a buscar depois do espaço, pega qualquer letra ou digito atpe o fim da linha (poderia ser o .* tbm)
    this.bairro = bairro.match(evaluateRegex(/(?<=\s).*$/)).join()
    // remover o ponto literal (. ) fo fim da frase
    this.estado = estado.replace(evaluateRegex(/\.$/), "")
  }
}

module.exports = Person 