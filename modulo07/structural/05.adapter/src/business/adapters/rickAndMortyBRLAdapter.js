import RickAndMortyBRL from '../integrations/rickAndMortyBRL.js'

export default class RickAndMortyBRLAdapter {
  static async getCharaters() {
    return RickAndMortyBRL.getCharactersFromJSON()
  }
}