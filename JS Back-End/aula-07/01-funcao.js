function cumprimenta (nome) {
    console.log(`Olá, ${nome}`) // Nome é parâmetro
}

function cumprimentaComHora(nome, hora) {
    let cumprimento
    if (hora < 6) {
        cumprimento = 'Boa madrugada'
    } else
    if (hora < 12) {
        cumprimento = 'Bom dia'
    } else
    if (hora < 18) {
        cumprimento = 'Boa tarde'
    } else {
        cumprimento = 'Boa noite'
    }

    console.log(`${cumprimento}, ${nome}`)
}  

function cumprimentaComHoraEArgumentos (nome, hora) {
    let cumprimento
    if (arguments[1] < 6) {
        cumprimento = 'Boa madrugada'
    } else
    if (arguments[1] < 12) {
        cumprimento = 'Bom dia'
    } else
    if (arguments[1] < 18) {
        cumprimento = 'Boa tarde'
    } else {
        cumprimento = 'Boa noite'
    }

    console.log(`${cumprimento}, ${arguments[0]}!`)
}  

cumprimenta('Cláudia') // O que é definido aqui é o ARGUMENTO
cumprimentaComHora('João', 19)
cumprimentaComHoraEArgumentos('Flávio', 15)