// Desafio 1-2: Lidando com objetos e vetores;
// Construção e impressão de objetos

const usuario = {
  nome: 'Glauber',
  idade: 34,
  empresa: {
    nome: 'Rocketseat',
    cor: 'Roxo',
    foco: 'Programação',
    endereco: {
      rua: 'Rua Guilherme Gembala' ,
      numero: 260
    }
  }  
}

console.log(`A empresa ${usuario.empresa.nome} está localizada em ${usuario.empresa.endereco.rua}, ${usuario.empresa.endereco.numero}`);