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
/* let carro = [
   {
      marca: 'Volkswagen',
      modelo: 'Amarok Extreme AT 4×4',
      ano: 2021,
      km: 50.012
   },
   {
      marca: 'Fiat',
      modelo: 'Uno',
      ano: 1995,
      km: 210.125
   },
   {
      marca: 'Ford',
      modelo: 'Corsa Sedan',
      ano: 2000,
      km: 110.065
   },
   {
      marca: 'Ford',
      modelo: 'Camaro',
      ano: 2021,
      km: 75.023
   },
   {
      marca: 'Honda',
      modelo: 'Civic',
      ano: 2021,
      km: 85.013
   },
]
carro.forEach(function (tipo) {
   console.log(`A marca do carro é ${tipo.marca}, modelo ${tipo.modelo}, ano ${tipo.ano}, e sua quilometragem é de ${tipo.km}km`);
}); */


// Algoritmo 21
/* let carros = [
   {
      marca: 'Volkswagem',
      ano: 1998,
      cor: 'vermelho',
      km: 100000
   },
   {
      marca: 'Fiat',
      ano: 2015,
      cor: 'cinza',
      km: 98000
   },
   {
      marca: 'Volkswagem',
      ano: 2012,
      cor: 'branco',
      km: 80500
   },
   {
      marca: 'GM',
      ano: 2020,
      cor: 'branco',
      km: 123.550
   },
   {
      marca: 'Ford',
      ano: 2010,
      cor: 'preto',
      km: 150000
   },
   {
      marca: 'Fiat',
      ano: 1997,
      cor: 'branco',
      km: 280000
   },
   {
      marca: 'Volkswagem',
      ano: 2020,
      cor: 'preto',
      km: 100000
   },
   {
      marca: 'Ford',
      ano: 2009,
      cor: 'cinza',
      km: 130.450
   },
   {
      marca: 'Ford',
      ano: 2008,
      cor: 'vermelho',
      km: 160.881
   },
   {
      marca: 'GM',
      ano: 2018,
      cor: 'preto',
      km: 190000
   }
]; */

/* let logo = carros.filter(function(marca){
   return marca.marca == 'Volkswagem'
})
console.log(logo); */


// Algoritmo 22
/* let carroF = carros.filter(function (fM) {
   return fM.marca == 'Ford'
})
console.log(carroF);

let fordPreto = carros.filter(function (cPreto) {
   return cPreto.marca == 'Ford' && cPreto.cor == 'preto'
})
console.log(fordPreto);

let carroKm = carros.filter(function (cKm) {
   return cKm.marca == 'Ford' && cKm.km < 160000
})
console.log(carroKm); */


// Algoritmo 23
/* let carroP = carros.filter(function (cP) {
   return cP.cor == 'preto'
})
console.log(carroP); */


// Algoritmo 24
/* let carroA = carros.filter(function(cA){
   return cA.ano > 2012
})
console.log(carroA); */


// Algoritmo 25
/* let listaAtl = carros.map(function(carro){
   return {
      marca: carro.marca,
      cor: carro.cor
   }
})

console.log(listaAtl);

let listaAno = carros.filter(function(itemAno){
   return itemAno.ano >= 2018
})

console.log(listaAno);

let listAno = carros.filter(function(itAno){
   return itAno.ano < 2018
})

console.log(listAno); */


//Funções 1
/* function mostrarCarros(marca) {
   let listaCarros = carros.filter(carros => carros.marca == marca)
   console.log(listaCarros);
}
mostrarCarros() */


//Funções 2
/* function mostrarNomeIdade(nome, idade){
   console.log(`Ola! Meu nome é ${nome} e tenho ${idade} anos de idade.`);
}
mostrarNomeIdade('Nícolas', 27) */


//Funções 3
/* function calcular(peso, altura) {
   let valor = peso / (altura * altura)
   console.log(valor);
}
calcular() */


//Funções 4
/* function adicionarCarro(carro) {
   carros.push(carro)
   console.log(carros);

}
adicionarCarro({
   marca: 'Renault',
   ano: 2000,
   cor: 'cinza',
   km: 200000
}) */



//Funções 5
/* function adicionarCarro(novocarro) {
   carros = [
      ...carros,
      novocarro
   ]

   console.log(carros);
}

adicionarCarro({
   marca: 'Dodge',
   ano: 2021,
   cor: 'preto',
   km: 10000
}) */



// Função 6
/* function calcularMedia(nota1 = 0, nota2 = 0, nota3 = 0, nota4 = 0) {
   let media = (nota1 + nota2 + nota3 + nota4) / 4;

   if (media >= 6) {
      console.log(`Média ${media}, parabéns! Aluno aprovado.`);
   } else if (media > 5 && media < 5.9) {
      console.log(`Média ${media}, puts! Aluno será encaminhado para conselho de classe`);
   } else {
      console.log(`Média ${media}, aluno reprovado.`);
   }
}

calcularMedia() */

// Função 7
/* let frutas = [
   {
      nome: 'Morango',
      preco: 5.00,
   },
   {
      nome: 'Uva',
      preco: 7.00,
   },
   {
      nome: 'Pera',
      preco: 2.50,
   },
   {
      nome: 'Maçã',
      preco: 2.50,
   },
   {
      nome: 'Laranja',
      preco: 2.50,
   },
   {
      nome: 'Limão',
      preco: 1.00,
   },
   {
      nome: 'Abacaxi',
      preco: 3.50,
   },
   {
      nome: 'Melancia',
      preco: 10.00,
   },
   {
      nome: 'Melão',
      preco: 4.00,
   },
   {
      nome: 'kiwi',
      preco: 6.00
   }
] */

// Função 7
/* function mostrarFruta(nome){
   let fruta = frutas.filter((fruta) => {
      return fruta.nome == nome
   })
   
   let mensagem = `A fruta escolhida foi ${fruta[0].nome} e seu preço é ${fruta[0].preco} reais.`

   console.log(mensagem);
}
mostrarFruta('Uva') */


// Função 8
/* frutas.forEach(function(fruta){
   console.log(`Fruta ${fruta.nome} custa ${fruta.preco}`);
}) */


// Função 9

/* let listaFruta = frutas.filter(function(listF){
   return listF.preco < 5.00
})

console.log(listaFruta);  */

// Função 10
/* let listaFruta = frutas.filter(function(listF){
   return listF.preco > 5.00
})

console.log(listaFruta); */


// Algoritmo 27

/* let nome = prompt('Digite seu nome.')
alert(`Ola! Meu nome é ${nome}.`) */

// Algoritmo 28

/* let nome = prompt('Digite seu nome.')
let sobrenome = prompt('Digite seu sobrenome.')
alert(`Olá! Meu nome completo é ${nome} ${sobrenome}`) */


// Algoritmo 29

/* let nota1 = parseInt(prompt('Digite a primeira nota.'))
let nota2 = parseInt(prompt('Digite a segunda nota.'))
let nota3 = parseInt(prompt('Digite a terceira nota.'))
let nota4 = parseInt(prompt('Digite a quarta nota.'))

let media = (nota1 + nota2 + nota3 + nota4) / 4;

if (media >= 6){
 alert(`Média ${media}, parabéns! Aluno aprovado.`);
}else if(media > 5 && media < 5.9){
   alert(`Média ${media}, puts! Aluno será encaminhado para conselho de classe`);
}else{
   alert(`Média ${media}, aluno reprovado.`);
}
  */

// Contatos

window.addEventListener('load', render)

function render() {
   let form = document.querySelector('#form')

   form.addEventListener('submit', (e) => {
      e.preventDefault()

      let iptNome = document.querySelector('#cNo').value

      let iptEmail = document.querySelector('#cEma').value

      let iptAssunto = document.querySelector('#cAssunto').value

      let iptMensagem = document.querySelector('#cMensagem').value

      if (iptNome == "") {
         alert("Informe seu nome.")
         form.iptNome.focus()
         return false
      } else if (iptEmail == "") {
         alert("Informe seu E-mail.")
         form.iptEmail.focus()
         return false
      } else if (iptAssunto == "") {
         alert("Informe o assunto.")
         form.iptAssunto.focus()
         return false
      }

      document.querySelector('#resultado').innerHTML =
         `<div>
            <h2>Dados Enviados</h2>
            <table border="0" cellpadding="10" cellspasing="10">
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Assunto</th>
                    <th>Mensagem</th>
                </tr>
                <tr>
                    <td>${iptNome}</td>
                    <td>${iptEmail}</td>
                    <td>${iptAssunto}</td>
                    <td>${iptMensagem}</td>
                </tr>
            </table>
        </div>`

   })
}