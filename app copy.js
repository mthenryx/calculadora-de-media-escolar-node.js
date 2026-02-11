const readline = require("readline")
const calculos = require("./modelo/calculos.js")

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question("Digite o nome do aluno: ", function (nome) {
    let nomeAluno = nome

    entradaDeDados.question("Digite a nota 1: ", function (valor1) {
        let nota1 = valor1

        entradaDeDados.question("Digite a nota 2: ", function (valor2) {
            let nota2 = valor2

            entradaDeDados.question("Digite a nota 3: ", function (valor3) {
                let nota3 = valor3

                entradaDeDados.question("Digite a nota 4: ", function (valor4) {
                    let nota4 = valor4

                    let media = calculos.calcularMedia(nota1, nota2, nota3, nota4, nomeAluno)

                    let status = calculos.statusDoAluno(media)

                    if(media){
                        console.log("A média final é: " + media)
                        console.log("O status do aluno é: " + status)
                    }else{
                        console.log("ERRO: Não possível processar o calculo.")
                    }
                })
            })
        })
    })
})

