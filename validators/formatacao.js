
module.exports = (req) => { 
    const {id} = req.params;
    const {placa, chassi, renavam, modelo, marca, ano} = req.body;
    return {id, placa, chassi, renavam, modelo, marca, ano };
}