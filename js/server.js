const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'notes.html')));

app.get('/api/notes', (req, res) => res.json(characters));

app.post('/api/notes', (req, res) => {
    const newNote = req.body
});

app.delete('/api/notes', (req, res) => {});

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
