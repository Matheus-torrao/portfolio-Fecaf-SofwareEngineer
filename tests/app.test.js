const request = require("supertest");
const app = require("../app.cjs");

let server;

beforeAll(() => {
  server = app.listen(4000); // abre em porta alternativa só para teste
});

afterAll((done) => {
  server.close(done); // encerra o servidor ao fim dos testes
});

describe("Testando servidor", () => {
  it("Deve responder na rota raiz / com status 200", async () => {
    const res = await request(server).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message", "Passou aqui!");
  });
});
