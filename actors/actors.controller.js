const express = require('express');
const router = express.Router();
const actorsService = require('./actors.service');

// routes
router.post('/', getMoviesByActorsName);

module.exports = router;

function getMoviesByActorsName(req, res, next) {
  actorsService
    .getMoviesByActorsName(req.body.actorsName)
    .then((data) => res.send(data))
    .catch((err) => next(err));
}
