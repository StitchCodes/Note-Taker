// REQUIRE & CREATE ROUTER
const notes = require('express').Router();
// REQUIRE HELPERS
const { readAppend, readFromFile} = require('../helpers/fsHelpers');


// GET ROUTE RESPONSE
notes.get('/notes', (req, res) => {
    res.sendFile('../public/notes.html')
});