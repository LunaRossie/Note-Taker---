const express = require('express');
const fs = require ("fs");
const path = require('path');
const { clog } = require('./middleware/clog');
const api = require('./routes/index.js');

const PORT = process.env.PORT || 3001;

const app = express();

// Import custom middleware, "cLog"
app.use(clog);

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));

// GET Route for homepage
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

// GET Route for feedback page
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);

app.route("/api/notes")
.get(function (req, res) {
  res.json(database);
})

app.route("/api/notes")
.post(function (req, res) {
  let jsonFilePath = path.join(__dirname, "/db/db.json");
  let newNote = req.body;
  let highestId = 99;
  for (let i = 0; i < database.length; i++) {
    let individualNote = database[i];
    if (individualNote.id > highestId) {
      highestId = individualNote.id;
    }
}
newNote.id = highestId + 1;
database.push(newNote)
fs.writeFile(jsonFilePath, JSON.stringify(database), function (err) {

  if (err) {
      return console.log(err);
  }
  console.log("Your note was saved!");
});
res.json(newNote);
    });
    app.delete("/api/notes/:id", function (req, res) {
      let jsonFilePath = path.join(__dirname, "/db/db.json");
      for (let i = 0; i < database.length; i++) {
        if (database[i].id == req.params.id) {    
          database.splice(i, 1);
            break;
        }
    }
    fs.writeFileSync(jsonFilePath, JSON.stringify(database), function (err) {

      if (err) {
          return console.log(err);
      } else {
          console.log("Your note was deleted!");
      }
  });
  res.json(database);
});

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
