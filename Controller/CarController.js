const CarModel = require('../Model/Car');

class CarController {

    async list() {
        let status = 200;
        let res;
        const response = await CarModel.findAll({order: ['id']}).catch(error => { status = 422; res = error });
        if (response)
            res = response;
   
        return { "status": status, data: res };
    }

    async add(req) {
        let status = 201;
        let res;
        console.log(req)
        const response = await CarModel.create({
            placa: req.placa,
            chassi: req.chassi,
            renavam: req.renavam,
            modelo: req.modelo,
            marca: req.marca,
            ano: req.ano
        }).catch(error => { status = 422; res = error });

        if (response)
            res = response;

        return { "status": status, data: res };
    }

    async select(id) {
        let status = 200;
        let res;

        const response = await CarModel.findByPk(id).catch(error => { status = 422; res = error });

        if (response)
            res = response;

        return { "status": status, data: res };
    }

    async update(req, id) {
        let status = 201;
        let res;

        const response = await CarModel.update({
            placa: req.placa,
            chassi: req.chassi,
            renavam: req.renavam,
            modelo: req.modelo,
            marca: req.marca,
            ano: req.ano
        },
            {
                where: { id: id }
            }
        ).catch(error => { status = 422; res = error });

        if (response)
            res = await CarModel.findByPk(id).catch(error => { status = 422; res = error });

        return { "status": status, data: res };
    }

    async delete(id) {
        let status = 204;
        let res;
        await CarModel.destroy({
            where: { id: id }
        }).catch(error => { status = 422; res = error });

        return { "status": status, data: res };
    }
}

module.exports = CarController;