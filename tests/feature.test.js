import { expect } from "chai"
import { feature } from "../src/feature.js"

let result;
// Descripcion General
describe('evaluacion general', () => {
    result = "valor esperado";
    // Caso Particular
    it("caso particular", () =>
    // Resultado Esperado
        expect(result).to.equal('valor esperado')
    )
})