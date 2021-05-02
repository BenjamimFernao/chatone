const express = require("express");
const app = express();

const roteamentoLogin = require("./roteamento/rotasLogin")


app.use(roteamentoLogin);

app.all("*", (req, res)=>{
    res.send("Solicitação o errada").status(501);
})


const porta = process.env.PORT || 3000;
app.listen(porta, ()=> console.log("Servidor ligado"));