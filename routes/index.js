// Require Express
const express = require('express');

// Modular Routes Import
const notesRouter = require('./notes');

const app = express();

app.use('/notes', notesRouter);

module.exports = app;