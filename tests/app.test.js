import chai, { expect } from "chai";
import chaiHttp from "chai-http";
import app from "../src/index.js";

chai.use(chaiHttp);

describe('rutas del servidor', () => {
    it("pagina principal", (done) => {
        chai.request.execute(app)
        .get("/")
        .end((err, res) => {
            expect(err).to.be.null
            expect(res).to.have.status(200)
            done()
        })
    })
    it("consultas de usuarios", (done) => {
        chai.request.execute(app)
        .get("/users")
        .end( (err,res) => {
            expect(err).to.be.null
            expect(res).to.be.an("array")
            expect(res).to.have.status(200)
        })
    })
    it("crear cuenta de usuario",  (done) => {
        chai.request.execute(app)
        .post("/users")
        .send({
            username: "testuser",
            email: "test@user.com",
            password: "12345"
        })
        .end( (err,res) => {
            expect(err).to.be.null
            expect(res).to.be.an("object")
            expect(res).to.have.status(201)
            expect(res).to.be.html
            done()
        })
    })
})