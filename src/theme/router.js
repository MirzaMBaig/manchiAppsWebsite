const express = require('express');
const docsRouter = express.Router();

//--- Documentation pages
docsRouter.get('/', (req,res) => res.render('index'));
docsRouter.get('/services', (req,res) => res.render('services'));
docsRouter.get('/pages', (req,res) => res.render('pages'));
docsRouter.get('/components', (req,res) => res.render('components'));
docsRouter.get('/elements', (req,res) => res.render('elements'));
docsRouter.get('/utilities', (req,res) => res.render('utilities'));
docsRouter.get('/additional', (req,res) => res.render('additional'));

module.exports = docsRouter;