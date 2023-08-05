import { expect, describe, test, jest, beforeEach } from "@jest/globals"
import RickAndMortyBRL from "../../src/business/integrations/rickAndMortyBRL.js"
import RickAndMortyBRLAdapter from "../../src/business/adapters/rickAndMortyBRLAdapter.js"

describe('#RickAndMortyBRLAdapter', () => {
  beforeEach(() => jest.clearAllMocks())
  test('#getCharaters should be an adapter for RickAndMortyBRL.getCharatersJSON', async () => {
    const brlIntegration = jest.spyOn(
      RickAndMortyBRL,
      RickAndMortyBRL.getCharactersFromJSON.name
    ).mockResolvedValue([])
    const result = await RickAndMortyBRLAdapter.getCharaters()

    expect(result).toEqual([])
    expect(brlIntegration).toHaveBeenCalled()
  })
})