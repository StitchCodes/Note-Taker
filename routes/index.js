// REQUIRE & CREATE ROUTER
const index = require('express').Router();
const notes = require('./notes.js');
const api = require('./api.js');

// REQUIRE HELPERS
const { readAppend, readFromFile} = require('../helpers/fsHelpers');


// GET ROUTE RESPONSE
index.get('/', (req, res) => {
    res.sendFIle('../public/index.html');
});

module.exports = index;