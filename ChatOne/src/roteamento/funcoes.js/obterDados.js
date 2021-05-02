function ObterDados_CriarConta(req){

    const {nome, sobrenome, dataDeNascimento, numero, email, regiao, senha} = req.body;

    return  {nome, sobrenome, dataDeNascimento, numero, email, regiao, senha};
}

function ObterDados_Login(req){

    const {usuario, senha} = req.body;
    return  {usuario, senha};
}

module.exports = {ObterDados_CriarConta, ObterDados_Login}