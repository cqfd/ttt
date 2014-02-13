
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

var theBoard = [
  0, 0, 0,
  0, 0, 0,
  0, 0, 0
];

app.post('/', function (req, res) {
  var theMove = req.body.move;
  theBoard[theMove] = 1;

  // The AI...
  for (var i = 0; i < 9; i++) {
    if (theBoard[i] === 0) {
      theBoard[i] = -1;
      break;
    }
  }

  res.json({board: theBoard});
  res.end();
});

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
