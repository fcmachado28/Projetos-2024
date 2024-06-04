function soma(numero1, numero2){
    const resultado = numero1 + numero2

    return resultado // palavra-chave necessária para o retorno da função não ser "Undefined" e causando erro nos resultados.
}



const resultado1 = soma(2, 3) // Aqui o nome de uma nova variável é declarada, porque eu estou puxando o resultado da variável que está dentro da função
const resultado2 = soma(1, 6)

console.log(resultado1)
console.log(resultado2)

console.log(soma(2, 3) + soma(1, 6)) // Este é um exemplo de uma segunda forma que poderia ser feita diretamente no console.log, sem declarar variáveis de resultado1 e resultado2. Ressaltando que é só a forma, no final das contas o resultado é o mesmo.
console.log(resultado1 + resultado2)