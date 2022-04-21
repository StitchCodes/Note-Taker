// REQUIRE & CREATE ROUTER
const notes = require('express').Router();
// REQUIRE HELPERS
const { readAppend, readFromFile} = require('../helpers/fsHelpers');


// GET ROUTE RESPONSE
notes.get('/', (req, res) => {
    readFromFile('../db/notesDB.json').then((data) => res.json(JSON.parse(data)));
});


// POST ROUTE NEW NOTES
notes.post('/', (req, res) => {
    const {  title, text } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            tip_id: uuidv4(),
        };

        readAppend(newNote, '../db/notesDB.json');

        res.json(`Note added successfully 🚀`);
    } else {
        res.error('Error in adding note');
    }
});

module.exports = notes;