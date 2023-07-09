'use strict';

const express = require('express');
const { Movie } = require('../models');


const router = express.Router();

router.get('/movie', getMovie);

async function getMovie(req, res) {
    let allMovies = await Movie.findAll();
    res.status(200).json(allMovies);
}