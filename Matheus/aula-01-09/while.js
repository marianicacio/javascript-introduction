// while(condicao) {

// }

// let i = 1
// while(i<=5) {
//     console.log(`Contando ${i}`)
//     i++
// }

// let senha ="1234"
// let tentativa = prompt("Informe sua senha: ")

// while(tentativa != senha) {
//     alert("Senha incorreta, Tente novamente")
//     tentativa = prompt("Informe sua senha: ")
// }

// alert("Acesso liberado")

let num = 2

while(num<=20) {
    console.log("Numero: " + num)
    num+=2
}

let senha = "admin"
let tentativa = prompt("Informe a senha: ")

while(tentativa != senha) {
    alert("Senha incorreta ")
    tentativa = prompt("Informe sua senha: ")
}