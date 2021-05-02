require("dotenv").config()

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGODB_URL, 
{useCreateIndex:true, useUnifiedTopology:true, useNewUrlParser:true})
                    .then(()=>console.log("Conectado ao banco de dados"))
                    .catch(e=>{
                        console.log(`Erro ao conectar com o banco de dados, detalhes : ${e}`)
                    })

module.exports = mongoose;