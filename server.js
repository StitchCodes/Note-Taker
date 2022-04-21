const express = require('express');
const path = require('path');
const indexRouter = require('./routes/index.js');
const apiRouter = require('./routes/index.js');
const notesRouter = require('./routes/notes.js');

// Create PORT
const PORT = process.env.PORT || 3001;

// Create app
const app = express();


// Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// app.use('/api', apiRouter);
// app.use('/index', indexRouter);
// app.use('/notes', notesRouter);

app.use(express.static('public'));

// ROUTES
// Notes Route
app.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname, '/public/notes.html')));

// Index/Wildcard route
app.get('*', (req,res) => 
res.sendFile(path.join(__dirname, '/public/index.html')));



// App Listen PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);