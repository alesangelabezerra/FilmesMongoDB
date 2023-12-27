const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

mongoose.connect('mongodb://localhost:27017/catalogoFilmes', { useNewUrlParser: true, useUnifiedTopology: true });

// acessar as imagens pela api
const path = require("path")
app.use('/files', express.static(path.resolve(__dirname, "./uploads")))

app.use(bodyParser.json());
app.use(cors())

const filmesRoutes = require('./routes/filmes');
app.use(express.json());
app.use('/filmes', filmesRoutes);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
