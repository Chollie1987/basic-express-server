'use strict';

const logger = require('../middleware/logger.js');

describe('testing logger', () => {
    let consoleSpy;
    let req = { path: '/test'};
    let res = {};
    let next = jest.fn();

    beforeEach(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });

    afterEach(() => {
        consoleSpy.mockRestore();
    });
});

test('logging output', () => {
    logger(req, res, next);
    expect(consoleSpy).toHaveBeenCalledWith(
        `Welcome: you belong here ${req.path}`
    );
});

test('next function called', () => {
    logger(req, res, next);
    expect(next).toHaveBeenCalledWith();
}
);
