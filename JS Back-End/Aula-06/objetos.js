const animal = {
    especie: 'Canis Lupus',
    habitatComum: 'Fores dos EUA',
    expectativaDeVida: 20,
    'eh Terrestre': true
}

// Seria equivalente à:
// const especieDoAnial1 = 'Canis Lupus'
// const habitatComumDoAnimal1 = 20
// const ehTerrestreDoAnimal1 = true

console.log(animal['eh Terrestre']) // Além do variável.  também podemos acessar objetos em string utilizando variável['']
console.log(animal.especie)

animal.populacao = 600_000_000 // os underlines servem para facilitar a visualização no códico, porém o resultado não é alterado.

console.log(animal.populacao)