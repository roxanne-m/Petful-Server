const express = require('express')
const json = require('body-parser').json()

const catsService = require('./cats.service');

const catsRouter = express.Router()

catsRouter
.route('/')
.get((req, res) => {
  // Return all pets currently up for adoption.
  const catsForAdoption = catsService.getAllCats();
  res.status(200).json(catsForAdoption);
})

.delete((req, res) => {
  // Remove a pet from adoption.
  const catAdopted = catsService.dequeueCat();
  res.status(200).json(catAdopted);
})

module.exports = catsRouter;