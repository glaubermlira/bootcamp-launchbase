// Usuários e tecnologias
// Crie um programa que armazena um array de usuários (objetos), cada usuário tem um nome e suas tecnologias (novo array),
// Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:

const usuarios = [
  {nome: 'Giorgiano da Silva', tecnologias: ['HTML e CSS']},
  {nome: 'Claus Costa', tecnologias: ['javascript e CSS']},
  {nome: 'Diolina Pereira', tecnologias: ['HTML, CSS, javascript e node.js']}
]

for (let i = 0; i < usuarios.length; i++){
  console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias}`);  
}


