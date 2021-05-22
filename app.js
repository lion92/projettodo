var express = require('express');
var bodyParser = require('body-parser');
var envoi = require('../projettodo/app/models/todo');

var connection = require('./app/config/connection');
var routes = require('./app/controllers/routes');
const todo = require('../projettodo/app/models/todo');
const cookieParser=require("cookie-parser");
var app = express();
var http=require('http').Server(app);
var io=require('socket.io')(http);
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.get('/cookie', function(req, resp) {
  console.log(req.cookies['bataillenavale']);
  resp.send({ status: 0, message: "ok" + req.cookies['bataillenavale'] });
})
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))
io.on('connection', (socket) => {
  socket.on('chat message', msg => {
    
    io.emit('chat message', msg);
    console.log(msg);
  });
});
// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

app.get('', (req, res) => {
  res.render('todo')
})




connection.init();
routes.configure(app);
//app.listen();
var server = app.listen(8000, function(){
  console.log('Server listening on port ' + server.address().port);
});
