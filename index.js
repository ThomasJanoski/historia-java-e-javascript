let numero = 10
console.log(numero)

numero = "dez"
console.log(numero)

console.log("Olá, Mundo!")

function saudacao() {
    console.log("Olá de uma função em JavaScript")
}

saudacao()

class Pessoa {
    constructor(nome) {
        this.nome = nome
    }

    saudacao() { console.log(this.nome) }
}

const pessoa = new Pessoa("Carlos")