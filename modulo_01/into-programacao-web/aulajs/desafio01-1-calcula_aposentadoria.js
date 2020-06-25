// Cálculo de aposentadoria;
// Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros fatores para serem levados em conta :)
// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
// Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;

const nome = 'Glauber'
const sexo = 'M'
const idade = 60
const tempoCont = 34

const tempoContH = tempoCont >= 35
const tempoContM = tempoCont >= 30

const somaTempoCont = (idade + tempoCont)

if (sexo == 'M' && tempoContH && somaTempoCont >= 95) {
  console.log(`${nome}, você já pode se aposentar!`);
} else if (sexo == 'F' && tempoContM && somaTempoCont >= 85) {
  console.log(`${nome}, você já pode se aposentar!`);
} else {
  console.log(`${nome}, você ainda não pode se aposentar!`);
}