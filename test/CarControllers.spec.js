const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const CarController = require('../Controller/CarController');

chai.use(chaiAsPromised);

const expect = chai.expect;
const c = new CarController();

const req = {
    "placa": "ffdfds",
    "chassi": "sdf",
    "renavam": "fdsa",
    "modelo": "fdsa44444",
    "marca": "Unicorn",
    "ano": "03"
}

describe('CarsControllers', () => {
    describe('list()', () => {
        it('deveria conter um objeto contendo um number e um array', () => {
            return c.list().then(value=>{
                expect(value).to.be.a('object');
                expect(value.status).to.be.a('number');
                expect(value.data).to.be.a('array');
            }); 
        });
    });

    describe('add()', () => {
        it('deveria conter um objeto contendo um number e um object', () => {
            return c.add(req).then(value=>{
                expect(value).to.be.a('object');
                expect(value.status).to.be.a('number');
                expect(value.data.dataValues).have.keys('id', 'placa', 'chassi', 'renavam', 'modelo', 'marca', 'ano', 'createdAt', 'updatedAt');
            }); 
        });
    });
    
    describe('select()', () => {
        it('deveria conter um objeto contendo um number e um object', () => {
            return c.select(1).then(value=>{
                expect(value).to.be.a('object');
                expect(value.status).to.be.a('number');
                expect(value.data.dataValues).have.keys('id', 'placa', 'chassi', 'renavam', 'modelo', 'marca', 'ano', 'createdAt', 'updatedAt');
            }); 
        });
    });
    
    describe('update()', () => {
        it('deveria conter um objeto contendo um number e um object', () => {
            return c.update(req, 1).then(value=>{
                expect(value).to.be.a('object');
                expect(value.status).to.be.a('number');
                expect(value.data.dataValues).have.keys('id', 'placa', 'chassi', 'renavam', 'modelo', 'marca', 'ano', 'createdAt', 'updatedAt');
            }); 
        });
    });
    
    describe('delete()', () => {
        it('deveria ser um object e um number', () => {
            return c.delete(35).then(value=>{
                expect(value).to.be.a('object');
                expect(value.status).to.be.a('number');
            }); 
        });
    });
});

