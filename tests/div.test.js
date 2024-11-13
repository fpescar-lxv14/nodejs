import { expect } from "chai"
import { div } from "../src/div.js"
// Descripcion General
describe("division de 10 entre 5", () => {
    const result = div(10,5);
    it("el resultado debe ser 2", () => 
        expect(result).to.equal(2,"error: 10/5 = 2")
    )
    it("el resultado debe ser un numero", () => 
        expect(result).to.be.a("number", "solo se admite el tipo Number")
    )
})
describe("division de 3 entre false", () => {
    const result = div(3,false);
    it("debe dar un mensaje de error", () => 
        expect(result).to.be.an('object')
    )
    it("debe devolver un codigo de error", () => 
        expect(result).to.have.property('code', 0)
    )
    it("debe identificar el problema", () => 
        expect(result).to.have.property("message", "operacion no permitida")
    )
})
describe("division de 0 entre '25'", () => {
    const result = div(0,"25")
    it("debe dar como resultado 0", () => 
        expect(result).to.equal(0)
    )
    it("debe ser de tipo numerico", () => 
        expect(result).to.be.a('number')
    )
})
describe("division de [] entre {} ", () => {
    const result = div([],{})
    it("deber mostrar el codigo 405", () => {
        expect(result).to.have.property("code",405)
    })
})