const User = require("./modelo")

function criarConta(dados){
    const user = new User(dados);

    user.save().then(()=> console.log("Mais um usuario cadastrado")).catch((e)=> console.log(`Erro ao criar usuario, detalhes : ${e}`))
}

