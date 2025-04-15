const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

let notes = [
  { id: 1, title: "Sample Note", body: "This is a note." }
];

// Get all notes
app.get('/notes', (req, res) => {
  res.json(notes);
});

// Add a note
app.post('/notes', (req, res) => {
  const { title, body } = req.body;
  const newNote = { id: notes.length + 1, title, body };
  notes.push(newNote);
  res.status(201).json(newNote);
});

// Delete a note
app.delete('/notes/:id', (req, res) => {
  const id = parseInt(req.params.id);
  notes = notes.filter(note => note.id !== id);
  res.status(204).send();
});

app.listen(port, () => {
  console.log(`Notes microservice running on port ${port}`);
});
