// var nome = "Luizinho";

// if(nome != ""){
//     let nome = "Nicolly";
// }

// console.log(nome);
//Quando declaramos uma variável com var
// o Javascript aplica um processo nestas que chamamos de HOISTING.
//O HOISTING ou elevação, coloca todas as variáveis do tipo var no topo do programa.
//Isso faz com que se existirem variáveis com mesmo nome, elas se sobrepõem.
// let nr1 = 10;
// let nr2 = 5;
// //IF TERNÁRIO - DESCOBRINDO SE O NÚMERO É PAR OU IMPAR
// let resultado = !(nr1 % nr2) ? "PAR" : "IMPAR";
// console.log(resultado);

//Recuperar um elemento do HTML com a função getElementById(parâmetro)
// const mn = document.getElementById("menu");
// console.log(mn.textContent);

//Recuperando uma collection de elementos...
//
//Exercícios
//1 - Recupere uma coleção de imagens da página e imprima o
// atributo src...
//


// //Declarando um array em Javascript
// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];
// // let nr3 = [nr1,nr2];
// console.log(nr1);
// console.log(nr2);

// //OPERADOR SPREAD ...
// let nr3 = [...nr1,...nr2];
// console.log("NOVO ARRAY " + nr3);

// nr3.forEach( (numero)=>{
//     console.log("ITEM DO ARRAY : " + numero);
// } );

//et frutas = ["laranja","banana", "acerola", "abacate", "caqui", "uva"]
 // inserir itens ao final do array com o metodo do array;
 //rutas.push("melancia")
 //console.log(frutas)
  // inicio do array 
//frutas.unshift("kiwi")
 //console.log(frutas)
 //removendo item do array
 //frutas.pop("kiwi")
 //onsole.log(frutas)
 // remover do inicio do array
 //frutas.shift("laranja")
 //console.log(frutas)

// realizando a busca de um item no array usando o metodo indexof(iten)
// quando usamos o indexOf (iten) ele retorna o indice do item procurado 
//indice = frutas.indexOf("acerola")
//console.log(frutas[indice])

// utilizando  o metodo splice(indice do item, qnt de vezes que ele será rermovido ) para remover um item do array em conjunto com o indexof
//et indice = frutas.indexOf("abacate")
//console.log("fruta que esta no index antes da remoção: " + frutas[indice])
//frutas.splice(indice,1)
//console.log("fruta que ficou no index depois da remoção: " + frutas[indice])
//console.table(frutas)




let frutas = ["laranja","banana", "acerola", "abacate", "caqui", "uva"]
const aElements = document.querySelectorAll("a")
//loop for
//for(let x = 0; x < frutas.length ; x++ ){
//    console.log("valor de  x  :" + x );
//}

//for (const fruta of frutas){    // melhor//
 //   console.log(fruta)
//}
//for (const indice in frutas){
 //   console.log("frutas:" + frutas [indice])
// }
//frutas.map((fruta,key)=>{
    //console.log('fruta nr ${key} ${fruta}');

//});
const inputUser = document.querySelector("#idUser");
inputUser.addEventListener("focus", ()=>{
    inputUser.setAttribute("style", "outline-color:#ff0000;");

})