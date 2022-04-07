const { param, body } = require('express-validator');

const validacaoBody = [
    body('placa', 'campo invalido').notEmpty(),
    body('chassi', 'campo invalido').notEmpty(),
    body('renavam', 'campo invalido').isDate(),
    body('modelo', 'campo invalido').isNumeric(),
    body('marca', 'campo invalido').notEmpty(),
    body('ano', 'campo invalido').notEmpty()
];

const validacaoParam = [
    param('id', 'id invalido').notEmpty().isNumeric()
];

module.exports = { validacaoBody, validacaoParam }