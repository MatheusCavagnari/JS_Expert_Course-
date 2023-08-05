import { expect, describe, test, jest, beforeEach } from "@jest/globals"
import RickAndMortyUSA from "../../src/business/integrations/rickAndMortyUSA.js"
import RickAndMortyUSAAdapter from "../../src/business/adapters/rickAndMortyUSAAdapter.js"

describe('#RickAndMortyUSAAdapter', () => {
  beforeEach(() => jest.clearAllMocks())
  test('#getCharaters should be an adapter for RickAndMortyUSA.getCharatersXML', async () => {
    const usaIntegration = jest.spyOn(
      RickAndMortyUSA,
      RickAndMortyUSA.getCharactersFromXML.name
    ).mockResolvedValue([])
    const result = await RickAndMortyUSAAdapter.getCharaters()

    expect(result).toEqual([])
    expect(usaIntegration).toHaveBeenCalled()
  })
})