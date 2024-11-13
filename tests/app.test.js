import * as chai from "chai";
import chaiHttp from "chai-http";
import request from "supertest";
import { app } from "../src/index.js";

chai.use(chaiHttp);

describe('rutas del servidor', () => {
    it("pagina principal", (done) => {
        request(app)
        .get("/")
        .end((err, res) => {
            chai.expect(err).to.be.null
            chai.expect(res).to.have.status(200)
            done()
        })
    })
    it("consultas de usuarios", (done) => {
        request(app)
        .get("/users")
        .end( (err,res) => {
            chai.expect(err).to.be.null;
            chai.expect(res).to.have.status(200);
            chai.expect(res.type).to.equal("application/json");
            done()
        })
    })
    it("crear cuenta de usuario",  (done) => {
        request(app, {
            username: "testuser",
            email: "test@user.com",
            password: "12345"
        })
        .post("/users")
        .end( (err,res) => {
            chai.expect(err).to.be.null
            chai.expect(res).to.have.status(201)
            chai.expect(res.type).to.equal("application/json")
            done()
        })
    })
    it("eliminar cuenta de usuario", (done) => {
        request(app)
        .delete("/users/testuser")
        .end( (err,res) => {
            chai.expect(err).to.be.null
            chai.expect(res).to.have.status(200)
            chai.expect(res.type).to.equal("application/json")
            done()
        })
    })
})