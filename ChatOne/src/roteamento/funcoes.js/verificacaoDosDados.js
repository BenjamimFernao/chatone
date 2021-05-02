function verificacao_criarConta(usuario){
    // MUDAR APENAS COM A AUTORIZACAO
    const todosDados = [usuario.nome, usuario.sobrenome, usuario.dataDeNascimento, usuario.numero, usuario.email, usuario.regiao, usuario.senha]

    const nenhumNullo = todosDados.every(dados=>{
        return dados != null || dados != undefined;
    });

    const resultado = nenhumNullo && true;

    return resultado;
}

function verificacao_Login(usuario){
    // MUDAR APENAS COM A AUTORIZACAO
    const todosDados = [usuario.nome, usuario.senha]

    const nenhumNullo = todosDados.every(dados=>{
        return dados != null || dados != undefined;
    });

    const resultado = nenhumNullo && true;

    return resultado;
}

module.exports= {verificacao_Login, verificacao_criarConta};