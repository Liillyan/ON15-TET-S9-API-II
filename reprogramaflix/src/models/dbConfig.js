//esse arquivo irá simular um banco de dados atraves de uma promise
// preciso fazer um require do filmesjson e de seriesjson

function bancodedados(dado){ // a funcao banco de dados que vai receber um (dado)
// e essa funcao vai retornar uma promisse:
//essa promise vai ter uma arrow function, essa arrow function vai ter resolve e reject, resolve e o "caminho feliz" e reject
// é o caminho quando "dar algo errado"
    return new Promise((resolve, reject)=>{
// pra que esse banco de dados tenha uma "demorinha" vou criar um setTimeout 
    setTimeout(()=>{
        if(dado == "series"){ // se o dado for igual a series
            // no bloco de execução, vou pedir para ele me retornar, vou colocar o resolve que quer dizer que deu certo
            // e vou mandar o require, onde se pedir series vai mandar o ./series.json
            return resolve (require("./series.json"))

        }// nesse 1º caso e quando digita que quer ver dados de series

         else if(dado == "filmes"){
             return resolve (require("./filmes.json")) 
         }// nesse 2º caso e quando digita que quer ver dados de filmes

         else{
             return reject("dado não encontrado")
         }

    }, 2000);
    }
    
    )
  
}
// esta função com promise esta sendo feito pq ainda nao ha um banco de dados, por isso essa funcao esta simulando um
//banco de dados    
// vou precisar exportar essa funcao para ela ser usada em todo meu codigo, a forma de exportar uma funcao:

module.exports = {
    bancodedados
}
// agora consigo usar essa funcao em outro arquivo (como por exemplo em filmesController.js)    
