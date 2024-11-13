import { expect } from "chai"
import { sum } from "../src/sum.js"
// Descripcion General
describe('Suma de los valores "10" y 5', () => {
    const result = sum("10",5)
    // Caso Particular
    it("Debe ser igual a 15", () =>
    // Resultado Esperado
        expect(result).to.equal(15, "debe ser 15"))
    it("El resultado debe ser un numero positivo", () => 
        expect(result).to.be.above(0, "debe ser positivo"))
    it("El tipo de dato debe ser numerico", () => 
        expect(result).to.be.a("number", "debe ser un numero"))
})
// Manejo de errores
describe('Sumar los valores "A" y 5', () => {
    const result = sum("A",5)
    it("Debe devolver un Objeto de error", () => 
        expect(result).to.be.an("object"))
    it("Se espera un codigo de error", () => 
        expect(result).to.has.property("code", 403))
})