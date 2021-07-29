const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');


const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const hostname = 'localhost',
      port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/dishes', dishRouter);
app.use('/promos', promoRouter);
app.use('/leaders', leaderRouter);

app.use(express.static(__dirname + '/public'));

// app.all('/dishes', (req,res,next)=>{
//   res.statusCode = 200;
//   res.setHeader('Content-Type','text/plain');
//   next();
// });

// app.get('/dishes',(req,res,next)=>{
//     res.end('Will send all the dishes to you!');
// });

// app.get('/dishes/:dishId', (req,res,next) => {
//   res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
// });



app.use((req, res, next) => {
  //console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});