// for(inicio; condicaos; passo) {

// }

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }

// for (let i = 1; i <=5; i++ ) {
//     console.log(i)
// }

for (let i = 1; i<=10; i++) {
    console.log(i)
}

for (let i = 0; i<=20; i++) {
    if(i % 2 == 0) {
        console.log(i)
    }
}

for (let i = 10; i>=1; i--) {
    console.log(i)
}

//Tabuada
for (let i = 1; i<=10; i++) {
    console.log(`5x${i} = ${i*5}`)
}

let total = 0

for (let i = 1; i<=100; i++) {
    console.log(`Soma ${total} + ${i} = ${i+total}`)
    total += i
}