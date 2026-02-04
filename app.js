/************************************************************************************************************************************************** 
* Objetivo: Projeto para realizar calculo de médias escolares!
* Autor: Matheus Henry
* Data: 29/01/2026
* Versão: 1.0
***************************************************************************************************************************************************/

/*
    Tipos de criação de variáveis
    
    var -> Permite criar um espaço em memória do tipo variável.
           Essa forma de criação hoje é considerada mais antiga,
           é provavel que seja encontrada apenas em projetos 
           mais antigos.
           Dica: Caso você precise utilizar o var, recomenda-se 
           que seja utilizado apenas em escopo global.

    let -> Permite criar um espaço em memória do tipo variável.
           Essa forma de criação é realizada somente no escopo 
           local, ou seja, dentro de blocos de programação {}.
           esse tipo de variavel deixa de existir ao termino do
           bloco.

    const -> Permite criar um espaço em memória do tipo constante,
             ou seja, esse conteúdo não podera sofrer mudanças durante o 
             o projeto.
             Dica: Se possível você pode criar essa const escrita em
            MAIUSCULO para facilitar sua utilização. Pode ser criada de
            forma local ou global.

    Operadores de comparação
    
    ==  -> Permite a comparação de dois conteúdos;
    !=  -> Permite comprarar a diferença de dois conteúdos;
    <   -> Permite validar o valor menor;
    >   -> Permite validar o valor maior;
    <=  -> Permite validar se o valor é menor ou igual;
    >=  -> Permite validar se o valor é maior ou igual;
    === -> Permite comparar a igualdade dos conteúdos e a
           igualdade da tipagem de dados;
    !== -> Permite comparar a diferença de conteúdos e a 
           igualdade de tipagem de dados;
    ==! -> Permite comparar a igualdade de conteúdos e a
           diferença de tipagem de dados.

    Tipos de operadores lógicos
        E -> AND -> && → tudo precisa ser verdadeiro
        OU -> OR -> || → basta um ser verdadeiro
        NAO -> NOT -> ! → inverte o resultado

    Formas de conversão de tipos de dados 
        parseInt() -> Permite converte o conteúdo em número do tipo INTEIRO
        parseFloat() -> Permite converter um conteúdo em número do tipo DECIMAL 
        Number() -> Permite converter um conteúdo para NÚMERO, podendo ser
                    inteiro ou decimal
        String() -> permite converter um conteúdo em STRING
        Boolean() -> Permite converter um conteúdo para BOOLEANO (true ou false)

    typeof() -> retorna o tipo de dados de uma variavel
                (String, Number, Boolean ou Object)
*/

//Import da biblioteca de entrada de dados
const readline = require("readline")

//Criação d objeto para capturar a entrada de dados 
const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

//Entrada de dados do nome
entradaDeDados.question("Digite o nome do aluno: ", function (nome) {
    //Recebe o nome do aluno 
    let nomeAluno = nome

    //Entrada de dados da nota1
    entradaDeDados.question("Digite a nota 1: ", function (valor1) {
        let nota1 = valor1

        //Entrada de dados da nota2
        entradaDeDados.question("Digite a nota 2: ", function (valor2) {
            let nota2 = valor2

            //Entrada de dados da nota3
            entradaDeDados.question("Digite a nota 3: ", function (valor3) {
                let nota3 = valor3

                //Entrada de dados da nota4
                entradaDeDados.question("Digite a nota 4: ", function (valor4) {
                    let nota4 = valor4

                    //Validação de entrada vazia
                    if (nomeAluno == "" || nota1 == "" || nota2 == "" || nota3 == "" || nota4 == "") {
                        console.log("ERRO: Existem campos obrigatorios que não foram preenchidos !!!")
                        //Validação de entrada somente de números
                        //isNaN() -> Permite a validação de numeros ou letras
                    } else if (
                        nota1 < 0 || nota1 > 100 ||
                        nota2 < 0 || nota2 > 100 ||
                        nota3 < 0 || nota3 > 100 ||
                        nota4 < 0 || nota4 > 100
                    ) {
                        console.log("ERRO: Notas não estão no parametro para o calculo ser feito que são valores entre 0 e 100")
                    } else if (
                        isNaN(nota1) || isNaN(nota2) ||
                        isNaN(nota3) || isNaN(nota4)) {
                        console.log("Erro: Somente numeros são permitidos na entrada das notas")
                    } else {
                        let media = (Number(nota1) + Number(nota2) + Number(nota3) + Number(nota4)) / 4
                        let statusAluno

                        if (media >= 70) {
                            statusAluno = "Aprovado"
                        } else if (media <= 69.9 && media >= 50) {
                            statusAluno = "Recuperação"
                        } else {
                            statusAluno = "Reprovado"
                        }

                        //toFixed() é um método que permite fixar a qtde de casas decimais
                        console.log(`Aluno(a): ${nomeAluno} \nMédia final: ${media} \nStatus é: ${statusAluno}!`)
                    }
                })
            })
        })
    })
})
