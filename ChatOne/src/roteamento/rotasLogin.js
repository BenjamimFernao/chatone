const express = require("express");
const app = express.Router();

const {ObterDados_CriarConta, ObterDados_Login} = require("./funcoes.js/obterDados")
const {verificacao_criarConta, verificacao_Login} = require("./funcoes.js/verificacaoDosDados")

app.post("/logar", (req, res)=>{

        const dados = ObterDados_Login(req);
        const saoValidos = verificacao_Login(dados);

    res.send("ok");
})

app.post("/Criar Conta", (req, res)=>{

        const dados = ObterDados_CriarConta(req);
        const saoValidos = verificacao_criarConta(dados);

    res.send("ok");
})

module.exports = app;