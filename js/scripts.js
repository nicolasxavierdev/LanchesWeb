// tipos de variaveis

// let name = "Nícolas";

// let number = 10;

// let boolean1 = true;

// let boolean2 = false;

// let float = 1.5;


// concatenção

// let nome = "José";

// let sobrenome = "Maria";

// let idade = 34;

// console.log(`Ola! Meu nome é ${nome} ${sobrenome} e eu tenho ${idade} anos`);

// soma de variaveis, string + inteiro

// let n1 = 25;

// let n2 = 25;

// let res = (n1 + n2);

// console.log(`A soma de ${n1} + ${n2} é igual a ${res}`);

//let nota1 = 5;
//let nota2 = 6;
//let nota3 = 6;
//let nota4 = 7;

//let media = (nota1 + nota2 + nota3 + nota4) / 4;

//if (media >= 6){
// console.log(`Média ${media}, parabéns! Aluno aprovado.`);
//}else if(media > 5 && media < 5.9){
// console.log(`Média ${media}, puts! Aluno será encaminhado para conselho de classe`);
//}else{
// console.log(`Média ${media}, aluno reprovado.`);
//}

//algoritmo 14

//let lista = ['maçã','uva','morango','limão','abacaxi'];

//Algoritmo 15
//console.log(lista[0]);
//console.log(lista[1]);
//console.log(lista[2]);
//console.log(lista[3]);
//console.log(lista[4]);


//let listaJson = {
//  marca: 'Volkswagen',
//  modelo: 'Amarok Extreme AT 4×4',
//  cor: 'Preto',
//  motor: 'CD 3.0 V6 TDI',
//  ano: '2021',
//  combustível: 'Diesel'
//}

//console.log(`Meu carro é um ${listaJson.marca}, ano ${listaJson.ano}, modelo ${listaJson.modelo}, cor ${listaJson.cor}, combustível ${listaJson.combustível}`);


//Algoritmo 17
/* let notas = [5, 6, 6, 7];

let media = (notas[0]+ notas[1] + notas[2] + notas[3]) / notas.length;

if (media >= 6){
    console.log(`Média ${media}, parabéns! Aluno aprovado.`);
}else if(media > 5 && media < 5.9){
    console.log(`Média ${media}, puts! Aluno será encaminhado para conselho de classe`);
}else{
   console.log(`Média ${media}, aluno reprovado.`);
} */

// Algoritmo 018
/* let nomes = ['Nícola', 'Beatriz', 'Junior', 'Alessandra', 'Lucas', 'Nicollas', 'Gustavo', 'Luiz', 'Roseli', 'Diandra']

for (let a = 0; a < nomes.length; a++) {
   console.log(`Ola meu nome é ${nomes[a]}`);
} */

// Algoritmo 19
/* let nomes = ['Nícola', 'Beatriz', 'Junior', 'Alessandra', 'Lucas', 'Nicollas', 'Gustavo', 'Luiz', 'Roseli', 'Diandra']

nomes.forEach(function (nome) {
   console.log(`Ola meu nome é ${nome}`);
}) */

// Algoritmo 20
let carro = [
   {
      marca: 'Volkswagen',
      modelo: 'Amarok Extreme AT 4×4',
      ano: '2021',
      km: '50.000 km'
   }
]
carro.forEach(function (tipo) {
   console.log(`A marca do carro é ${tipo.marca}, modelo ${tipo.modelo}, ano ${tipo.ano}, e sua quilometragem é de ${tipo.km}`);
});