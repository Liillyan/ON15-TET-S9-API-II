//Aqui tera logica da API, tera as funcoes.

//A responsabilidade do filmesController e ter todas as regras que construiu, pra serem chamadas pelas rotas 

//1º vou importar meu banco de dados para dentro daqui
const dbConfig = require("../models/dbConfig")

//Funcao assincrona
// vou criar aqui minha conexao com o banco de dados
// no dbConfig criei a possibilidade de conectar, aqui que vou conectar
async function dbConnect(){
    return await dbConfig.bancodedados("filmes") //esse dbConfig é o arquivo js, e o bancodedados é a funcao sendo importada, que vai receber filmes
}
//esta sendo usado o await porque na funcao no meu arquivo dbConfig ira demorar 2 seg. se nao usar o await, ele nao vai
//conseguir se conectar ao banco de dados, pq vai retornar rapido e o await vai fazer tipo: voce so sai dessa funcao 
//dbConnect, so executa essa funcao depois que terminar isso. espere essa funcao me retornar alguma coisa, pra depois continuar

//diferente de como foi feito no serve.js do monolitinho que era composto por: o metodo que esta sendo feito > a rota > e a logica
//aqui, no controller só usarei a logica, para isso vou criar a funcao de getAll: pega todos os filmes, será assincrona,
//ou seja, estou dizendo que talvez ela seja assincrona, essa funcao recebra um req. e uma resp. 

const getAll = async(req, resp) =>{
    let filmesjson = await dbConnect() //estou dizendo que a variavel filmesjson sera uma conexao com o banco, ela ta me trazendo
    // a informacao la do meu banco de dados que vai vim com os dados dos filmes 
    response.status(200).send(filmesjson)
}

module.exports = {
    getAll
}
// com isso eu estou mandando pra fora do meu arquivo filmesControllers.js para ser usada em outro lugar 