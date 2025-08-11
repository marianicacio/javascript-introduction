//Se preço for mais de 100 se aplica o desconto de 10%, caso contrario mantem o preço

let price = 100
let desconto = 0.1

result = price > 100 && price * (1 - desconto) || price 

console.log(result)

// console.log(price*desconto)
// console.log(1 - desconto)
// console.log(price * 0.9)

console.log( price > 100 && price - price * desconto || price)


//Status = média >= 7 -> "Aprovado"; 5-6.9 -> "Recuperação"; < 5 -> "Reprovado"
const n1 = 5, n2 = 5, n3 = 5
const media = (n1 + n2 + n3) / 3
let status = (media >= 7 && "Aprovado") || (media >= 5 && "Recuperação") || (media <= 5 && "Reprovado")
console.log(status)