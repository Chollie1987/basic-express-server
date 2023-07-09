'use strict';

const supertest = require('supertest');
const {server} = require('../server.js');
const mockRequest = supertest(server);

describe('server routes', () => {
    test('the / route sends response You are here', async() => {
        const response = await mockRequest.get('/')
        expect(response.text).toBe('You are here');
    });
});