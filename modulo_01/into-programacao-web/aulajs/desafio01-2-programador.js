// Vetores e objetos;
// Crie um programa com um objeto para armazenar dados de um programador como nome, idade e tecnologias que trabalha.

const programador = {
  nome: 'Glauber',
  idade: 34,
  tecnologias:[
    { nome: 'C++', especialidade: 'Desktop' },
    { nome: 'Python', especialidade: 'Data Science' },
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }
  ]
}

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[2].nome} com especialidade em ${programador.tecnologias[2].especialidade}.`);