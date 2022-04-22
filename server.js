const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

// Create PORT
const PORT = process.env.PORT || 3001;

// Create app
const app = express();

// Middleware for parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use('/api', api);

app.use(express.static('public'));

// Notes Route
app.get('/notes', (req, res) => 
res.sendFile(path.join(__dirname, '/public/notes.html')));

// Wildcard route redirects to index.html
app.get('*', (req,res) => 
res.sendFile(path.join(__dirname, '/public/index.html')));

// App Listen PORT
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);