let nome
let idade

console.log (typeof nome, typeof idade)

//undefined foi impresso pois nãoa tribui valor as variáveis

nome = prompt ('qual seu nome?')
idade = +prompt ("quantos anos vc tem?")

console.log (typeof nome, typeof idade)
console.log("Olá,", nome, "você tem", idade, "anos")