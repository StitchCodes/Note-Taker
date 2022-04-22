// REQUIRE & CREATE ROUTER
const notes = require('express').Router();
// REQUIRE HELPERS
const { readAppend, readFromFile, writeToFile} = require('../helpers/fsHelpers');
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
            note_id: uuidv4(),
        };

        readAppend(newNote, './db/notesDB.json');

        res.json(`Note added successfully 🚀`);
    } else {
        res.error('Error in adding note');
    }
});

// DELETE Route for notes
notes.delete('/:note_id', (req, res) => {
    const noteId = req.params.note_id;
    readFromFile('./db/notesDB.json')
    .then((data) => JSON.parse(data))
    .then((json) => {
        const newNoteArray = json.filter((note) => note.note_id !== noteId);
        // Create new file
        writeToFile('./db/notesDB.json', newNoteArray);

        // Delete message success
        res.json(`Note ${noteId} has been deleted 🗑️`);
    })
})

module.exports = notes;