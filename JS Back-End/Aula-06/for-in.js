const user = {
    name: 'JoSÉ maRIa SOUSA santos',
    email: 'JOSE.M1@gmail.com',
    age: 23,
    address: 'X Street'
}

for (const key in user) {
    if (key === 'name') {
        const names = user[key].split(' ') //Na linha abaixo foi usado o "for-of" porque o split transformou os nomes separados em array
        user[key] = '' // Limpei o nome aqui, porque se não na etapa da linha 17 que junta, ele juntaria com o nome antigo
        
        for (const name of names) {
            const normalizedName = name.toLocaleLowerCase() // Aqui primeiro eu joguei o nome todo para lowerCase
            const [primeiraLetra, ...restoDoNome] = normalizedName // Nesta linha foi feito um rest operator com esses [ ... ] no meio das variáveis

            user[key] = user[key] + ' ' + primeiraLetra.toUpperCase() + restoDoNome.join('') // Aqui foi colocado o user[key] que está vazio no valor, aí coloca-se + para incluir o próximo valor, foi incluído um espaço entre ' ' porque se não o nome viria grudado + aí transformei a primeira letra em maiúsculo + e o restoDoNome precisou incluir um .join('') para fazer o array se transformar em string novamente e dentro das aspas foi vazio pq se colocasse algo ao imprimir iria cada letra teria um incremento da informação dada dentro das aspas
            user[key] = user[key].trim() // o trim() foi feito para remover os espaços 
        }
    }

    if (key === 'email') {
        user[key] = user[key].toLowerCase() // Essa lógica seria a mesma coisa que escrever a busca do objeto com pontos, por exemplo user.email = user.email.toLowerCase()
    }
}
console.log(user)