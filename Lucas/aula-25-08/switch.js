let cnh = "B"

switch (cnh) {
    case "A" || "a":
        console.log("Pode dirigir moto")
        break;
    case "B" || "b" :
        console.log("Pode dirigir carro")
        break;
    case "C" || "c" :
        console.log("Pode dirigir caminhão")
        break;
    case "D" || "d" :
        console.log("Pode dirigir onibus")
        break;
    case "E" || "e" :
        console.log("Pode dirigir careto")
        break;
    default:
        console.log("Invalido")
        break;
}

let fruit = "mexereca"

switch (fruit) {
    case "uva":
    case "Uva":
        console.log(17)
        break;
    case "maça" :
    case "Maça" :
        console.log(12)
        break;
    case "laranja" :
    case "Laranja" :
        console.log(5)
        break;
    case "mexereca" :
    case "Mexereca" :
        console.log(6.99)
        break;
    case "morango" :
    case "Morango" :
        console.log(14)
        break;
    default:
        console.log("Invalido")
        break;
}

let animal = "dinossauro"

switch (animal) {
    case "vaca":
    case "cachorro":
    case "grilo":
    case "galinha":
        console.log("VAI PRA ARCA")
        break;
    case "dinossauro" :
        console.log("NÃO VAI PRA ARCA")
        break;
    default:
        console.log("Invalido")
        break;
}