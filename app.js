const express = require('express');
const app = express();
const db = require('./db/connection');

const PORT = 3000;

const bodyParser = require('body-parser');

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get('/test', (req, res) => {
  res.send('Rota principal de teste!');
});

app.get('/', (req, res) => {
  res.send('Rota padrão funcionando agora com nodemon!');
});

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/jobs', require('./routes/jobs'));