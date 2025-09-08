function calcularPrecoFinal(nome, valor) {
    console.log(`O preço inicial é ${valor}`)
    if (valor < 0) {
        console.log(`Invalido para o cliente ${nome}`)
    } else if(valor <= 500) {
        valor = valor * 0.95
        console.log(" 5% aplicado")
    } else if (valor <= 1000) {
        valor = valor * 0.90
        console.log(" 10% aplicado")
    } else {
        valor = valor * 0.85
        console.log(" 15% aplicado")
    }

    console.log(`Cliente ${nome}, Preço final ${valor} `)
}

calcularPrecoFinal("Maria", -100)