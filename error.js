
var express = require('express');
var app = express();

app.get('/', function(req, res){
  throw Error('Oh smap!');
});

app.listen(3000);