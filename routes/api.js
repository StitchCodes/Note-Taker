// REQUIRE & CREATE ROUTER
const api = require('express').Router();
// REQUIRE HELPERS
const { v4: uuidv4 } = require('uuid');
const { readAppend, readFromFile} = require('../helpers/fsHelpers');
// REQUIRE DB
const db = require('../db/notesDB.json');


module.export = api;