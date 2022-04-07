const car = require("../Server/services");
const CarController = require('../Controller/CarController');
const formatacao = require("../validators/formatacao");
const {validacaoBody, validacaoParam} = require("../validators/validacao");
const validacaoMessage = require("../validators/validacaoMessage");

const c = new CarController();

/******Rotas******/

car.get("/", async (req, res) => {
    const response = await c.list();
    res.status(response.status).send(response.data);
});

car.get("/:id",validacaoParam, validacaoMessage, async (req, res) => {
    req = formatacao(req)
    const response = await c.select(req.id);
    res.status(response.status).send(response.data);
});

car.post("/",validacaoBody,validacaoMessage, async (req, res) => {
    const response = await c.add(formatacao(req));
    res.status(response.status).send(response.data);
});

car.put("/:id",validacaoParam,validacaoBody, validacaoMessage, async (req, res) => {
    req = formatacao(req)
    const response = await c.update(req, req.id);
    res.status(response.status).send(response.data);
});

car.delete("/:id",validacaoParam, validacaoMessage, async (req, res) => {
    req = formatacao(req)
    const response = await c.delete(req.id);
    res.status(response.status).send(response.data);
});

module.exports = car;

