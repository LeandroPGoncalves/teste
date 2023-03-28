require("dotenv").config()
const axios = require("axios")
const CharacterService = require("../../../src/services/char-service")

describe("Character Service", () => {
        it("Deve retornar uma lista de personagens", async () => {
            const page = 1
            const res = await CharacterService.get(page)

            expect(res).toBe({})
        })
})