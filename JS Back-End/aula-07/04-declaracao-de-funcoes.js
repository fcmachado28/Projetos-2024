console.log(climaAtual()) // Posso fazer o console.log antes da função, porque ao declarar um função ela faz um hoisting, ou seja faz a lógica declarada dentro da função rolar desde o início do código.
console.log(climaAtual())
console.log(climaAtual())

function climaAtual() {
    const climasPossiveis = ['ensolarado', 'chuvoso', 'nevando']
    const climaSorteado = climasPossiveis[Math.round(Math.random() * 2)] 
//Essa função matematíca acima é um pseudo randomico porque é baseado no tempo de execução que retornar entre 0 ou 1
//Então o meth.random é exatamente para trazer o 1 ou 0 aleatoriamente, mas como no meu array eu tenho 3 posições tilizo o math.round que é para arredondar o valor que se for de meio pra cima vira 1 e menos que isso vira zero e então eu multiplico isso por 2, porque se por exemplo ele me der 0.9 me arredonda pra 1.8 que vira 2 ou seja terceira informação do array, se ele jogar numeros menos vai pra 1 e se jogar pra números muito baixos vai pra zero.
    return `Hoje está ${climaSorteado}`
}

const climaAtualArrow = () => {
    const climasPossiveis = ['ensolarado', 'chuvoso', 'nevando']
    const climaSorteado = climasPossiveis[Math.round(Math.random() * 2)] 
    return `Hoje está ${climaSorteado}`
}

console.log(climaAtual())
console.log(climaAtualArrow())
console.log(climaAtualArrow())
console.log(climaAtualArrow())
console.log(climaAtualArrow())
console.log(climaAtualArrow())