'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UsuarioSchema = Schema({
    primer_nombre: String,
    correo: String,
    telefonos: {
        celular: Number,
        casa: Number
    },
    password: String,
    contactos: []
})

module.exports = mongoose.model('Usuario', UsuarioSchema);