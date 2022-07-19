let A = 10
let B = 25
let C = null

C = A
A = B
B = C

//C passa a valer A, assim C=10. A passa a valer B, assim A=25. B passa a valer C, assim B=10

console.log ("O novo valor de A é", A)
console.log ("O novo valor de B é", B)