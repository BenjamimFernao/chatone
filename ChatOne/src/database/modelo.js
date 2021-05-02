const mongoose = require("./conexao");
const {Schema} = require("mongoose");

const esquema = new Schema({

    nome:{
        type:String,
        required:true,
        trim:true,
    }
    , sobrenome:{
        type:String,
        required:true,
        trim:true,
    }
    , dataDeNascimento:{
        type:String,
        required:true,
        trim:true,
    }, 
    numero:{
        type:String,
        required:true,
        trim:true,

    }, email:{
        type:String,
        required:true,
        trim:true,

    }, regiao:{
        type:String,
        required:true,
        trim:true,

    }, senha:{
        required:true,
    }
});

const User = mongoose.model("Usuarios",esquema);

module.exports = User;
