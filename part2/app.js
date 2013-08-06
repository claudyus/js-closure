
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

global.todoArray = [{desc: 'esempio', num: 2}];

var myapi = require('./routes/api');

app.get('/todo', myapi.todoGet);
app.get('/todo/:id', myapi.todoGet2);

app.post('/todo', myapi.todoAdd);
app.delete('/todo/:id', myapi.todoDel);
//app.put

app.get('/testme', function (req, res) {
	res.send(200, 'test');
});

app.get('/pokeme', function (req, res) {
	var util = require('util');
	console.log(
		util.inspect(req, { color:true })
	);
});



http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
