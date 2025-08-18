let nota = Number(prompt("Sua nota: "))

if (nota >= 7) {
    alert("Aprovado")
} else if (nota >=5) {
    alert("Recuperação")
} else {
    alert("Reprovado")
}

let idade = Number(prompt("Qual sua idade: "))

if (idade < 12) {
    alert("R$10")
} else if (idade < 17) {
    alert("R$15")
} else if (idade < 59) {
    alert("R$30")
} else {
    alert("R$20")
}