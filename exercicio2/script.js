const perguntaA = 'Você joga CSGO?'
const perguntaB = 'Você torce para o Athletico?'
const perguntaC = 'Você gosta de milho?'

const jogo = prompt(perguntaA)
const time = prompt(perguntaB)
const comida = prompt(perguntaC)

//Variavel jogo aquivale à variavel perguntaA, assim como time equivale à perguntaB e comida à perguntaC

let CSGO = jogo
let Athletico = time
let milho = comida

//Com isso CSGO será a resposta atribuida à perguntaA, Atlhetico será a resposta atribuida à perguntaB e milho será a resposta atribuida à perguntaC

console.log('Você joga CSGO?', CSGO)
console.log('Você torce para o Athletico?', Athletico)
console.log('Você gosta de milho?', milho)
