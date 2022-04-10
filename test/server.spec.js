const chai = require('chai');
const chaiAsPromised = require("chai-as-promised");
const supertest = require("supertest");

chai.use(chaiAsPromised);

const request = supertest('http://localhost:8081')
const expect = chai.expect;

describe('request', () => {
    it('deveria ser ouvido na porta 8081', () => {
        return request.get('/').then(res=>expect(res.status).equal(200));
    }); 
});

