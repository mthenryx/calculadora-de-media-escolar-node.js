function calcularMedia(n1, n2, n3, n4, aluno) {
    let nota1 = Number(n1)
    let nota2 = Number(n2)
    let nota3 = Number(n3)
    let nota4 = Number(n4)
    let nomeAluno = aluno

    if (nomeAluno == "" || nota1 == "" || nota2 == "" || nota3 == "" || nota4 == "") {
        return false
    }else if (
        isNaN(nota1) || isNaN(nota2) ||
        isNaN(nota3) || isNaN(nota4)) {
        return false
    }else if(nota1 <= 0 || nota2 <= 0 || nota3 <= 0 || nota4 <= 0){
        return false
    } else {

        let media = (nota1 + nota2 + nota3 + nota4) / 4

        return Number(media.toFixed(2))
    }
}

function statusDoAluno(media) {
    let statusAluno
    let mediaEscolar = media

    if (mediaEscolar >= 70) {
        statusAluno = "Aprovado"
    } else if (mediaEscolar <= 69.9 && mediaEscolar >= 50) {
        statusAluno = "Recuperação"
    } else {
        statusAluno = "Reprovado"
    }

    return statusAluno
}

module.exports = {
    calcularMedia,
    statusDoAluno
}