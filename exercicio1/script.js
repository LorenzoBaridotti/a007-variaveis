let nome = "null"
let idade = 0

console.log (typeof nome, typeof idade)

//nome será string pois se trata de texto e idade number pois se trata de um numero

nome = prompt ('qual seu nome?')
idade = +prompt ("quantos anos vc tem?")

console.log (typeof nome, typeof idade)
console.log("Olá,", nome, "você tem", idade, "anos")