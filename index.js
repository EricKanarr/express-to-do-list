const express = require('express');
const path = require('path');
const mustacheExpress = require('mustache-express');
const app = express();
var bodyParser = require('body-parser');
const list = [];


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//Listening on root
app.get('/', function (req, res) {
  // TODO write your code here
  var html = '<form action="/" method="post">' +
              '<h1>Add to List<h1>' +
              // '<p>Enter todo item</p>' +
              '<input type="text" name="chore" placeholder="chore item" />' +
              '<button type="submit">Submit</button>'
              '</form>';

  res.send(html);
})

app.post('/', function(req, res){
  let chore = req.body.chore;
  var html = '<p>chore: ' + chore '</p>';
  res.send(html);
})

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
