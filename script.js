const num_estudantes = Number(prompt("Digite o número total de estudantes na turma:"))
let soma_notas = 0
let maior_nota = 0
let menor_nota = 100

for(let i = 1; i <= num_estudantes; i++){
    const nota = Number(prompt(`Digite a nota do aluno ${i}`))
    soma_notas += nota

    if(nota > maior_nota){
        maior_nota = nota
    }
    if(nota < menor_nota){
        menor_nota = nota
    }
}
const media = soma_notas / num_estudantes
document.write(`Média da turma: ${media.toFixed(2)}`)
document.write(`Maior nota: ${maior_nota}`)
document.write(`Menor nota: ${menor_nota}`)