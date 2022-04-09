// REQUIRE & CREATE ROUTER
const notes = require('express').Router();
// REQUIRE HELPERS
const { readAppend, readFromFile} = require('../helpers/fsHelpers');


// GET ROUTE RESPONSE
notes.get('/', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});

notes.post('/', (req, res) => {
    const { username, topic, tip } = req.body;

    if (req.body) {
        const newNote = {
            title,
            text,
            tip_id: uuidv4(),
        };

        readAndAppend(newNote, './db/db.json');
        res.json(`Note added successfully 🚀`);
    } else {
        res.error('Error in adding tip');
    }
});


module.exports = notes;