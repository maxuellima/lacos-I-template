let numeros = Number(prompt(`Insira números: `))
let soma = 0;

while(numeros!==0){
    soma += numeros
    console.log(`O número inserido agora foi: ${numeros}`)
    numeros = Number(prompt(`Insira mais um número: `))
}
console.log(`A soma de todos os números inseridos foi ${soma}`);
//------------------------------->
let numero = Number(prompt(`Insira um número: `))

for(let i = 0; i <= numero ; i++){
    console.log(i)
}
//------------------------------>

let prime = [2, 3, 5, 7, 11, 13, 17]
for(let i = 0; i < prime.length; i++){
    console.log(`O elemento de índice ${i} é ${prime[i]}`)
}
//-------------------------------->
let user = prompt(`Qual o tipo de usuário você é:\nA: Administrador\nB: Usuário Comum\nC: Usuário assinante`)

while(user.toUpperCase() !== "A"){
    user = prompt(`Acesso negado!`)
}
console.log(`Boas-vindas admin!`)

//------------------------------->
let tabuada = 2;

for(let i = 1; i <=10; i++){
    console.log(`Tabuada de ${tabuada} é: ${tabuada} * ${i} = ${tabuada*i} `)
}

//-------------------------------->
const arrayString = ["onix", "uno", "fusca", "strada", "hb20", "golf"]

for(let i = 0; i < arrayString.length; i++){
    console.log(arrayString[i].toLocaleUpperCase())

}