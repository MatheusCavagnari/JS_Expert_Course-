import RickAndMortyUSA from '../integrations/rickAndMortyUSA.js'

export default class RickAndMortyUSAAdapter {
  static async getCharaters() {
    return RickAndMortyUSA.getCharactersFromXML()
  }
}