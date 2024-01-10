var express = require('express');
var http = require('http');
var multer  = require('multer');
var fs = require('fs');
var path = require('path');
var app = express();

// Setzen Sie den Speicherort für hochgeladene Dateien
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './files')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html')); // Pfad zu Ihrer HTML-Datei
});

app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(__dirname));

app.post('/upload', upload.single('file'), function (req, res, next) {
  // req.file ist die 'file'-Datei
  // req.body enthält den Textkörper
  res.send(`
    <p>Datei wurde hochgeladen!</p>
    <meta http-equiv="refresh" content="3;url=index.html" />
  `);
})

app.post('/submitForm', function (req, res) {
  var username = req.body.name;
  var filename = "Nachricht_von_" + username + ".txt";
  var inputs = Object.values(req.body);
  var labels = Object.keys(req.body);
  var text = '';
  for (var i = 0; i < inputs.length; i++) {
    text += labels[i] + ': ' + inputs[i] + '\n';
  }
  fs.writeFile(path.join(__dirname, 'tickets', filename), text, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("Die Datei wurde gespeichert!");
  });   
  res.send(`
    <p>Formular wurde eingereicht</p>
    <meta http-equiv="refresh" content="3;url=index.html" />
  `);
});


app.listen(3000, function () {
  console.log('App läuft auf Port 3000');
});
