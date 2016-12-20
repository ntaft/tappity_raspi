const app = require ('express')();
const logger = require 'morgan';
const http = require ('http').Server(app);
var io = require('socket.io')(http);

// allows the detection of keypresses in node environment
// from http://stackoverflow.com/questions/5006821/nodejs-how-to-read-keystrokes-from-stdin/37093823#37093823
const readline = require('readline');

readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

process.stdin.on('keypress', (str, key) => {
  console.log(str)
  console.log(key)
  sendKeypress(str, key)
})

function sendKeypress(str, key) {
  io.on('emit', (socket) => /* emit the keypress here*/ );
}

io.on('connection', (socket) => console.log('user connected'));

io.on('connection', (socket) => console.log('user connected'));

port = process.env.PORT || 3000;

app.use(logger('dev'));

app.listen(port, () => console.log('listening on port ', port);

