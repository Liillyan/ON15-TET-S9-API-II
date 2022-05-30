//Cria a rota raiz de todo muundo
//serve para centralizar o conteudo da aplicacao e configura as rotas raizes, que nesse caso vai ser filmes e tera o series
// cors e outras configurações ficam no app.js 

const express = require("express")

const app = express()

//chamo o filme routes
const filmesRoutes = require("./routes/filmesRoutes")

//mnha rota raiz sera /filmes
app.use("/filmes", filmesRoutes)

//exportando para usar no server.js
module.exports = app
