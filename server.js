import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';

const app = express();
const server = http.Server(app);

// Setup App:

app.use(express.static('./public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

server.listen(3000, () => {
  console.log('Booting server on http://localhost:3000');
});