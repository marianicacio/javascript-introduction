let valor = Number(prompt("Qual é o valor do produto: "))
let desc = Number(prompt("Qual é o valor do desconto: ")) / 100

alert(`O valor total: ${valor - valor * desc}`)
alert(`O valor descontado: ${valor*desc}`)