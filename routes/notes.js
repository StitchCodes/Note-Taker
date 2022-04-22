// REQUIRE & CREATE ROUTER
const notes = require('express').Router();
// REQUIRE HELPERS
const { readAppend, readFromFile} = require('../helpers/fsHelpers');
const { v4: uuidv4 } = require('uuid');


// GET route for retreiving all
notes.get('/', (req, res) => {
    readFromFile('./db/notesDB.json').then((data) => res.json(JSON.parse(data)));
});


// POST route for new notes
notes.post('/', (req, res) => {
    const { title, text } = req.body;

    if ( title && text) {
        const newNote = {
            title,
            text,
            tip_id: uuidv4(),
        };

        readAppend(newNote, './db/notesDB.json');

        res.json(`Note added successfully 🚀`);
    } else {
        res.error('Error in adding note');
    }
});

module.exports = notes;