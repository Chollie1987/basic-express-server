'use strict';

const express = require('express');
const { Movie } = require('../models');


const router = express.Router();

router.get('/movie', getMovie);
router.get('/movie/:id', pickMovie);
router.post('/movie', createMovie);
router.put('/movie/:id', updateMovie);
router.delete('/movie/:id', deleteMovie);

async function getMovie(req, res) {
    let allMovies = await Movie.findAll();
    console.log(allMovies);
    res.status(200).json(allMovies);
}

async function pickMovie(req, res) {
    const id = parseInt(req.params.id);
    let chosenMovie = await Movie.findOne({where: { id: id } });
    res.status(200).json(chosenMovie);
}

async function updateMovie(req, res) {
    const id = parseInt(req.params.id);
    const updatedMovieObj = req.body;
     let chosenMovie = await Movie.findOne({where: { id: id } });
     let updatedMovie = await chosenMovie.update(updatedMovieObj);
     res.status(200).json(updatedMovie);
}

async function createMovie(req, res) {
    let newMovie = req.body;
    let addedMovie = await Movie.create(newMovie);
    res.status(200).json(addedMovie);
}

async function deleteMovie(req, res) {
    const id = parseInt(req.params.id);
    let deleteMovie = await Movie.destroy({where: { id: id } });
    res.status(204).json(deleteMovie);
}

module.exports = router;