/* 
Alguns exercícios contém dicas nas últimas linhas. 

Antes das dicas, haverá uma linha que começa com "Dica:".

Busque resolver os exercícios apenas com as informações 
fornecidas acima da linha "Dica:". 

Leia as dicas apenas se precisar. 

A partir daqui, é esperado que você tenha o hábito de 
testar se o seu código realmente está resultando nos 
valores que você está supondo.

Para isso você pode usar, por exemplo, console.log(). 

Não haverá informações sobre isso nos exercícios, pois 
neste ponto do curso, este hábito deve ser intuitivo 
para você, conforme mostrado e comunicado nas aulas 
anteriores. 
*/

/*
01

Como você pode melhorar a declaração do array abaixo?

Dica: 

Será que há alguma melhoria que possa ser feita no nome 
do array?

Será que este array precisa ser declarado com a palavra-chave 
let?
*/

const marcas = ['Apple', 'Sony', 'Samsung', 'Microsoft']

console.log(marcas);

/*
02

Qual possibilidade de melhoria você vê no código abaixo?

Dica: 

Será que há alguma melhoria estrutural que pode ser feita? 
Você pode modificar a forma de declaração dos valores abaixo, 
se necessário.
*/

// const nome = 'Friends'
// const temporadas = 10
// const episodios = 236
// const temaAbertura = `I'll Be There for You`
// const elencoPrincipal = ['Jennifer Aniston', 'Courteney Cox', 'Lisa Kudrow', 'Matt LeBlanc', 'Matthew Perry', 'David Schwimmer']

const series = [{
  nome: 'Friends',
  temporadas: 34,
  elenco:['jen', 'ross']
},
{
nome:'Breaking Bad',
temporadas: 23
}
]
series[1].nome = 'Bia' 

console.log(series)

/*
03

Melhore a estrutura do código abaixo. 

Dica: 

Será que a estrutura usada é ideal para organizar estas 
informações?
*/

// const frutas = {
//   fruta1: 'banana',
//   fruta2: 'maçã',
//   fruta3: 'pera',
//   fruta4: 'uva'
// }

const frutas = ['banana', 'uva']
console.log(frutas)

/*
04

Declare uma const banda e atribua a ela um objeto vazio.
*/

const banda = {}


/*
05

A partir daqui, todo código relacionado ao objeto banda que 
você escrever não deve modificar a declaração do objeto. Isto 
é, você deve adicionar ou modificar propriedades neste objeto 
sem mexer na linha que contém const banda = {}.

Adicione no objeto banda uma propriedade nome.

Atribua o valor 'Led Zeppelin' para a propriedade nome.
*/

 banda.nome = 'Led'
 console.log(banda)

/*
06

Adicione no objeto banda uma propriedade generos.

Esta propriedade deve conter os gêneros Hard rock, Blues, 
Rock-folk, Rock e Heavy Metal.

Dica:

O tipo de valor da propriedade deve ser uma lista.
*/

banda.generos = ['rock', 'blues']
console.log(banda.generos)

/*
07

Adicione no objeto banda uma propriedade estaNaAtiva.

O valor desta propriedade deve indicar que a banda não está 
na ativa.

O valor NÃO deve ser uma string 'Sim' ou 'Não'.

Dica:

Use um boolean para indicar que a banda não está na ativa.
*/

banda.estaNaAtiva = false;
console.log(banda.estaNaAtiva)



/*
08

Adicione no objeto banda uma propriedade albuns.

A propriedade albuns deve armazenar 2 objetos com 
as seguintes propriedades...

Primeiro objeto:v
- nome, que armazena Houses of the Holy
- ano, que armazena 1973
- capa, que armazena https://upload.wikimedia.org/wikipedia/en/9/9f/Led_Zeppelin_-_Houses_of_the_Holy.jpg

Segundo objeto:
- nome, que armazena Physical Graffiti
- ano, que armazena 1975
- capa, que armazena https://upload.wikimedia.org/wikipedia/en/e/e3/Led_Zeppelin_-_Physical_Graffiti.jpg

Dica:

O tipo de valor da propriedade albuns deve ser uma lista.

O tipo de valor das propriedades capa deve ser uma string.
*/

banda.albuns = [
  {
    name: 'Holy'
    
  },
  {
    name: 'Graffiti',
    ano: 1975
  }
]
console.log(banda.albuns)

/*
09

Abaixo deste comentário, modifique o valor da propriedade ano 
do album Physical Graffiti para 1976.
*/

banda.albuns[1].ano=1873
console.log(banda.albuns[1].ano)

/*
10

Acesse o primeiro caractere do valor da propriedade url que está 
dentro do objeto versionGroup no objeto abaixo.

A expressão que você irá escrever deve retornar o caractere 'h'.
*/

const pokemon = {
  name: "Articuno",
  moves: [{move: { name: "razor-wind", url: "https://pokeapi.co/api/v2/move/13/"},
      versionGroupDetails: [{},
        { levelLearnedAt: 0, moveLearnMethod: { 
          name: "machine",
            url: "https://pokeapi.co/api/v2/move-learn-method/4/"
          },
          versionGroup: {
            name: "red-blue",
            url: "https://pokeapi.co/api/v2/version-group/1/"
          }
        }
      ]
    }
  ]
}
const firstChar = pokemon.moves[0].versionGroupDetails[1].versionGroup.url[0]
console.log(firstChar)
/*
11

Declare uma constante chamada paragrafo que armazene o parágrafo 
abaixo.

Nesta bateria de exercícios vimos que marca armazena um array no qual o segundo item é _MARCA_, um dos gêneros da banda _NOME_DA_BANDA_ é _GENERO_DA_BANDA_ e que a propriedade moveLearnMethod do Articuno contém um objeto com uma propriedade name que armazena "_VALOR_DA_PROPRIEDADE_".

O parágrafo acima contém placeholders no formato _BLABLABLA_.

Substitua os placeholders do parágrafo por expressões que 
retornem valores que correspondem ao que o placeholder está 
pedindo. 

Exemplo: o placeholder _MARCA_ deve ser substituído pela 
expressão que retorna o segundo item do array marca. 

O placeholder _GENERO_DA_BANDA_ deve ser substituído pela 
expressão que retorna o 4º item do array generos.

Seu parágrafo final deve ficar assim:

Nesta bateria de exercícios vimos que marca armazena um array no qual o segundo item é "Sony", um dos gêneros da banda Led Zeppelin é Rock e que a propriedade moveLearnMethod do Articuno contém um objeto com uma propriedade name que armazena "machine".

Dica: 

Use interpolações.
*/
const paragrafo = `Nesta bateria de exercícios vimos que marca armazena um array no qual o segundo item é ${marcas[1]}, um dos gêneros da banda ${banda.nome} é ${banda.generos[0]} e que a propriedade moveLearnMethod do Articuno contém um objeto com uma propriedade name que armazena ${pokemon.moves[0].versionGroupDetails[1].moveLearnMethod.name}.` 

console.log(paragrafo)

console.log(pokemon.moves[0].versionGroupDetails[1].versionGroup.url[3])