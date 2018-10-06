'use strict';

const express = require('express');
const router = express.Router();

const routes = (rm) => {

  router.get('/', (req, res) => {
    res.redirect('/');
  });

  router.get('/new', (req, res) => {
    const timerId = rm.createTimer();
    res.redirect(`/timer/${timerId}`);
  });

  router.get('/:id', (req, res) => {
    if (rm.timerExists(req.params.id)) {
      res.render('timer', { timerId: req.params.id });
    } else {
      res.render('timer404');
    }
  });


  return router;
}

module.exports = routes;