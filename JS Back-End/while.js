const nomeDeUsuarios = ['Joana', 'Renata', 'Cleber', 'Zeca', 'Carla']

// console.log('Olá', nomeDeUsuarios[0])

let indiceDoUsuario = 0
const indiceAtual = nomeDeUsuarios.length
console.log({indiceAtual})

while (indiceDoUsuario < indiceAtual) {
    console.log('Olá', nomeDeUsuarios[indiceDoUsuario])
    indiceDoUsuario += 1
}