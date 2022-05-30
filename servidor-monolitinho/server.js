const ghibliJson = require("./data/ghibli.json")

const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())


app.get("/", (request, response)=>{
    response.status(200).json([
        {
            "mensagem":"API de filmes Ghibli"
        }
    ])
})


app.get("/ghibli/filmes", (request, response)=>{
    response.status(200).send(ghibliJson)
})



app.get("/ghibli/buscar/:id", (request, response)=>{
    let idRequest = request.params.id
    let filmeEncontrado = ghibliJson.find(filme => filme.id == idRequest)

    response.status(200).send(filmeEncontrado)

})

app.get("/ghibli/filtro", (request, response)=>{
    let tituloRequest = request.query.titulo.toLowerCase()

    let filmeEncontrado = ghibliJson.filter(
        filme => filme.title.toLowerCase().includes(tituloRequest))

    response.status(200).send(filmeEncontrado)
})


app.post("/ghibli/cadastrar", (request,response)=>{
    let bodyRequest = request.body

    let novoFilme = {
        id: (ghibliJson.length)+1, 
        title: bodyRequest.title, 
        description: bodyRequest.description 
    }
    ghibliJson.push(novoFilme)
    
    response.status(201).send({
        "mensagem": "filmes cadastrado com sucesso",
        novoFilme
    })
})

app.delete("/ghibli/deletar/:id", (request, response) => { //o :id esta sendo utilizado porque, antes de deletar o item que quero, preciso encontra-lo
// primeiro vou achar o filme, vai ser igual o get por id
const idRequest = request.params.id // o idRequest e o que vai ser digitado no meu path params 
const filmeEncontrado = ghibliJson.find(filme => filme.id == idRequest) //na variavel filmeEncontrado, vou percorrer meu 
//ghiblijson, fazendo o find , prcurando item por item, onde o (filme ou item, cujo => id dele (filme.id) seja == ao id enviado
//na request (postman) - vou procurar o filme que quero

// para localizar o item que quero remover vou usar o indexOf >
const indice = ghibliJson.indexOf(filmeEncontrado) // na variavel indice, vou achar o indice que foi localizado e armaznado
//na variavel filmeEcontrado que esta no ghiblijson
console.log(indice)
//estrutura do splice: array.splice(indice que vou querer que comece a acao, numero de itens que quero deletar, (opcinnal) o que quero adicionar)
ghibliJson.splice(indice, 1)

response.status(200).json([{
    "mensagem": "filme deletado com sucesso",
    "filme deletado": filmeEncontrado,
    ghibliJson
}])

}) 
//METODO PUT
app.put("/ghibli/substituir/:id", (request, response) => {
    const idRequest = request.params.id
    const bodyRequest = request.body //pego o que está sendo enviado no body

    const filmeEncontrado = ghibliJson.find(filme => filme.id == idRequest)

    const indice = ghibliJson.indexOf(filmeEncontrado)

    bodyRequest.id = idRequest

    ghibliJson.splice(indice, 1, bodyRequest)

    response.status(200).json([{
        "mensagem":"filme atualizado com sucesso",
        "filme substituido": filmeEncontrado,
        "Nova lista de filmes": ghibliJson
    }])

})

//METODO PATCH
app.patch("/ghibli/modificar/:id", (request, response) => {
    const idRequest = request.params.id
    const novoTitulo = request.body.title

    const filmeEncontrado = ghibliJson.find(filme => filme.id == idRequest)

    filmeEncontrado.title = novoTitulo

    response.status(200).json([{
        "mensagem":"Titulo atualizado com sucesso",
        "Filme atualizado": filmeEncontrado,
        "Nova lista de filmes": ghibliJson
    }])

})

app.listen(3333, ()=>{
    console.log("alô, pepe moreno? to na porta 3333")
})