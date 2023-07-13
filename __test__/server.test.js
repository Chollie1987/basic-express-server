'use strict';

const supertest = require('supertest');
const {server} = require('../server.js');
const { dbConnection } = require('../models/index.js');
const mockRequest = supertest(server);
// this is a good start to the tests, they are tough to get but the structure is there!
describe('server routes', () => {
    beforeAll(async () => {
        await dbConnection.sync();
    });
    afterAll(async () => {
        await dbConnection.drop();
    });

    it('can create a record', async () => {
        const movie = {
            
        }
    })

    // test('the / route sends response You are here', async() => {
    //     const response = await mockRequest.get('/')
    //     expect(response.text).toBe('You are here');
    // });
});