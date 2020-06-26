// Busca por tecnologia
// Crie uma função que recebe os dados de um objeto de usuário e retorna SE o usuário trabalha com CSS ou não. Essa função deve retornar um boolean true/false.

const usuarios = [
  {nome: 'Giorgiano da Silva', tecnologias: ['HTML', 'Java']},
  {nome: 'Claus Costa', tecnologias: ['javascript', 'CSS']},
  {nome: 'Diolina Pereira', tecnologias: ['HTML', 'javascript', 'node.js']}
]

function checaSeUsuarioUsaCSS(usuario) {
  // Percorra o array de tecnologias do usuário até encontrar se ele trabalha com CSS
  for (let tecnologia of usuario.tecnologias) {
  // SE encontrar, retorne true da função, caso contrário retorne false
    if (tecnologia == 'CSS') return true 
    }
    return false
}
  // Percorra o array de usuários e, para cada um, verifique se o mesmo trabalha com CSS utilizando a função construída acima, se SIM, imprima em tela as informações do usuário:
for (let i = 0; i < usuarios.length; i++){
  if (checaSeUsuarioUsaCSS(usuarios[i])) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`)
  }
}









