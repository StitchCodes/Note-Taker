// REQUIRE & CREATE ROUTER
const api = require('express').Router();
// REQUIRE HELPERS
const { readAppend, readFromFile} = require('../helpers/fsHelpers');
// REQUIRE DB
const db = require('../db/db.json');


// GET ROUTE RESPONSE
api.get('/api', (req, res) => {
    res.json(db);
});

// POST API ROUTE
api.post('/api', (req, res) => {

})