const cargos = ['Professor', 'Diretor', 'Aluno']

const indiceDoDiretor = cargos.indexOf('Diretor') // Aqui eu estou criando uma variável para descobrir qual meu índice de diretor dentro do array ou seja, qual sua posição
console.log(indiceDoDiretor)

cargos.splice(indiceDoDiretor, 1) // Aqui eu estou dizendo de onde começa a remover e quantos elementos removerei
console.log(cargos)