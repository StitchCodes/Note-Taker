// REQUIRE & CREATE ROUTER
const api = require('express').Router();
// REQUIRE HELPERS
const { v4: uuidv4 } = require('uuid');
const { readAppend, readFromFile} = require('../helpers/fsHelpers');
// REQUIRE DB
const db = require('../db/notesDB.json');
const notes = require('./notes');


// GET ROUTE RESPONSE
api.get('/api/notes', (req, res) => {
    res.json(db);
});

// POST API ROUTE
api.post('/api/notes', (req, res) => {

    const {note, tip} = req.body;

    if (req.body) {
        
    const newNote = {
        note,
        tip,
        tip_id: uuidv4()
    };

    readAppend(newNote, '../db/notesDB.json');
    res.json('Note added successfully');
    } else {
        res.error('Error adding note.')
    };
});


module.export = api;