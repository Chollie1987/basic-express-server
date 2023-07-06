'use strict';

const express = require('express');
const server = express();
const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');
const handler500 = require('./errorHandlers/500.js');
const handler404 = require('./errorHandlers/404.js');

function start(port) {
    server.listen(port, () => console.log(`Working on port ${port}`));
}

server.use(logger);

server.use(express.json());

server.get('/', (req, res) => res.send('You\'re here!'));

server.get('/welcome', (req, res) => {
    if (!req.query.name) {
        throw new Error('Need valid entry');
    }
    res.send(`Welcome, ${req.query.name}`);
});

server.post('/welcome', (req, res) => {
    res.send(`Welcome, ${req.body.name}`);
});

server.get('/welcome/:person', (req, res) => {
    res.send(`Welcome, ${req.params.person}`);
});

server.use(handler404);
server.use(handler500);

module.exports = { server, start };