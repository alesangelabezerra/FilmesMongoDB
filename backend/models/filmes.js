const mongoose = require('mongoose');

const filmeSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    atoresPrincipais: [String],
    genero: String,
    sinopse: String,
    imagem: { type: String, require: true }
});

module.exports = mongoose.model('Filme', filmeSchema);
