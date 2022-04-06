const car = require("../Server/services");
const CarController = require('../Controller/CarController');
//const bodyParser = require("body-parser");
const formatacao = require("../validators/formatacao");
const {validacaoBody, validacaoParam} = require("../validators/validacao");
const validacaoMessage = require("../validators/validacaoMessage");

car = new CarController;

/******Rotas******/

car.get("/", async (req, res) => {
    const response = await car.list();
    res.status(response.status).send(response.data);
});

car.get("/:id",validacaoParam, validacaoMessage, async (req, res) => {
    req = formatacao(req)
    const response = await car.select(req.id);
    res.status(response.status).send(response.data);
});

car.post("/",validacaoBody,validacaoMessage, async (req, res) => {
    const response = await car.add(formatacao(req));
    res.status(response.status).send(response.data);
});

car.put("/:id",validacaoParam,validacaoBody, validacaoMessage, async (req, res) => {
    req = formatacao(req)
    const response = await car.update(req, req.id);
    res.status(response.status).send(response.data);
});

car.delete("/:id",validacaoParam, validacaoMessage, async (req, res) => {
    req = formatacao(req)
    const response = await car.delete(req.id);
    res.status(response.status).send(response.data);
});

module.exports = car;

