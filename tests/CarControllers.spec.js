const chai = require('chai');
var chaiAsPromised = require("chai-as-promised");
const CarController = require('../Controller/CarController');

chai.use(chaiAsPromised);

const expect = chai.expect;
const c = new CarController();

const req = {
    placa: 'placa',
    chassi: 'chassi',
    renavam: 'renavam',
    modelo: 'modelo',
    marca: 'marca',
    ano: 'ano'
}

describe('CarsControllers', () => {
    describe('list()', () => {
        it('deveria ser um object', () => {
            return c.list().then(value=>{
                expect(value).to.be.a('object');
            }); 
        });
    });

    describe('add()', () => {
        it('deveria ser um object', () => {
            return c.add(req).then(value=>{
                expect(value).to.be.a('object');
            }); 
        });
    });
    
    describe('select()', () => {
        it('deveria ser um object', () => {
            return c.select().then(value=>{
                expect(value).to.be.a('object');
            }); 
        });
    });
    
    describe('update()', () => {
        it('deveria ser um object', () => {
            return c.update(req).then(value=>{
                expect(value).to.be.a('object');
            }); 
        });
    });
    
    describe('delete()', () => {
        it('deveria ser um object', () => {
            return c.delete().then(value=>{
                expect(value).to.be.a('object');
            }); 
        });
    });
});

