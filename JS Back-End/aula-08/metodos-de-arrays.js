const cargos = ['professor', 'Diretor', 'Aluno']

cargos.push('Menbro da Secretaria') // O push serve para colocar dados a mais no array após sua criação
console.log(cargos)

cargos.pop() // Serve para remover a última informação do meu Array
console.log(cargos)

cargos.shift() // Serve para remover a primeira informação do meu Array
console.log(cargos)

cargos.unshift('Professor titular') // Serve para incluir uma informação no começo do meu array
console.log(cargos)

cargos.splice(0, 2) // Aqui o zero é minha posição de onde vou começar a remover e o 2 são quantos elementos eu quero remover do Array
console.log(cargos)

cargos.indexOf('')