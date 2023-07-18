'use strict';

const express = require('express');

const { directorCollection, movieCollection } = require('../models/index');

const router = express.Router();

router.get('/director', getDirector);
router.get('/director/:id', getOneDirector);
router.post('/director', createDirector);
router.put('/director/:id', updateDirector);
router.delete('/director/:id', deleteDirector);

async function getDirector(req, res) {
    let allDirectors = await directorCollection.read(null, {
        include: { model: movieCollection.model },
    });
    res.status(200).json(allDirectors);
}

async function getOneDirector(req, res) {
    let id = parseInt(req.params.id);
    let theDirector = await directorCollection.read(id, {
        include: { model: movieCollection.model },
    });
    const movie = await theDirector.getMovie();
    console.log(movie);
    res.status(200).json(theDirector);
}

async function createDirector(req, res) {
    let obj = req.body;
    let newDirector = await directorCollection.create(obj);
    res.status(200).json(newDirector);
}

async function updateDirector(req, res) {
    let obj = req.body;
    let id = parseInt(req.params.id);
    let updatedDirector = await directorCollection.update(id, obj);
    res.status(200).json(updatedDirector);
}

async function deleteDirector(req, res) {
    let id = parseInt(req.param.id);
    let deletedDirector = await directorCollection.delete(id);
    res.status(204).json(deletedDirector);
}

module.exports = router;