const { param, body } = require('express-validator');

const validacaoBody = [
    body('descricao', 'campo invalido').notEmpty(),
    body('tipoConta', 'campo invalido').notEmpty(),
    body('data', 'campo invalido').isDate(),
    body('saldo', 'campo invalido').isNumeric(),
    body('conta', 'campo invalido').notEmpty(),
    body('agencia', 'campo invalido').notEmpty(),
    body('cpf', 'cpf com minimo de 11 caracteres e cnpj com 14 caracteres').isLength({min: 11, max: 14}),
];

const validacaoParam = [
    param('id', 'id invalido').notEmpty().isNumeric()
];

module.exports = { validacaoBody, validacaoParam }