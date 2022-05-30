const app = require("./src/app") //TO CHAMANDO O ARQUIVO APP QUE TEM CENTRALIZADO TODAS AS ROTAS NELE

const PORTA = 3916 //A PORTA

//Inicio do servidor
app.listen(PORTA, () => {
    console.log(`Olá humana, estou falando diretamente da porta ${PORTA}`)
})
