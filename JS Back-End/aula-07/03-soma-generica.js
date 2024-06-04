function soma(...numeros){ //colocar os três pontinhos em frente ao meu parâmetro indica que todos os números que forem declaros nos argumentos se tornarão arrays automaticamente, isso foi feito para o nosso for-of (que é exclusive de arrays) funcionar.
    let resultado = 0

    for (const numero of numeros) {
        resultado += numero
    }

    return resultado
}

const resultado1 = soma(2, 3, 1)
const resultado2 = soma(1, 6)

console.log(resultado1)
console.log(resultado2)

console.log(soma(2, 3, 1) + soma(1, 6))
console.log(resultado1 + resultado2)


// Toda esta estrutura de cima também pode ser feita com argumentos (Professor não indicar fazer direto por arguments e declarar a posição do array exemplo arguments[0], enquanto não for um cenário realmente necessário.)
// Exemplo de como construir a mesma estrutura de cima com ARGUMENTS:

// function soma() { 
//     let resultado = 0

//     for (const numero of arguments) {
//         resultado += numero
//     }

//     return resultado
// }

// const resultado1 = soma(2, 3, 1)
// const resultado2 = soma(1, 6)

// console.log(resultado1)
// console.log(resultado2)

// console.log(soma(2, 3, 1) + soma(1, 6))
// console.log(resultado1 + resultado2)