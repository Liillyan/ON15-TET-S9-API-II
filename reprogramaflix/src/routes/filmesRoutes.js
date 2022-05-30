// Rotas 

// 1ª coisa a se fazer é chamar o controller

const controller = require("../controllers/filmesController")

const express = require("express") //aqui sera usado o express pq sera usado um metodo de dentro do express que é um metodo 
// chamado "router" pra criar as multiplas rotas de umaa rota só

const router = express.Router()
router.get("/catalogo", controller.getAll)// estou dizendo que vai ter uma rota "catalogo" que vai usar o metodo get, e vai 
//usar a funcao getAll la do meu controller 

//vou expoortar pra usar no meu app 

module.exports = router
