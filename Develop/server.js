const express = require('express');
const path = require('path');
const fs = require('fs')
const notesData = require("./db/db.json")
const { v4: uuidv4 } = require('uuid');
uuidv4();

const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));

app.get('/api/notes', (req, res) => res.json(notesData));

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    newNote.id = uuidv4();
    notesData.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notesData), (err) => {
        if (err) return console.log(err);
    res.json(notesData);
    })
});

// app.delete('/api/notes/:id', (req, res) => {
    
//     console.log(req.params.id)
//     // notesData.delete(removedNote);
//     // // console.log(notesData);
//     // fs.writeFileSync('./db/db.json', JSON.stringify(notesData), (err) => {
//     //     if (err) return console.log(err);
//     // res.json(notesData);
// })
// })

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));