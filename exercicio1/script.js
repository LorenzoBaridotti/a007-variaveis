let nome
let idade

//tem q ser let pq const não funciona se não atribuir valor

console.log (typeof nome, typeof idade)

//undefined foi impresso pois não atribui valor as variáveis

nome = prompt ('qual seu nome?')
idade = +prompt ("quantos anos vc tem?")

//prompt irá atribuir string como valor e +prompt ira atribuir number como valor

console.log (typeof nome, typeof idade)
console.log("Olá,", nome, "você tem", idade, "anos")