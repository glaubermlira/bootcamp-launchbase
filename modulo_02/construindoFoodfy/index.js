const modalOverlay = document.querySelector(".modal-overlay")//Seleciona a classe .modal-overlay;
const cards = document.querySelectorAll(".card"); //O querySelectorAll serve pra selecionar uma coleção de objetos.

for (let card of cards) {
  card.addEventListener('click', function () {
    modalOverlay.classList.add('active')

    modalOverlay.querySelector('img').src = card.querySelector('img').src
    modalOverlay.querySelector('img').alt = card.querySelector('img').alt
    modalOverlay.querySelector('h4').innerHTML = card.querySelector('h4').innerHTML
    modalOverlay.querySelector('p').innerHTML = card.querySelector('p').innerHTML
  })
}

// Close Modal
document.querySelector('.close-button').addEventListener('click', function () {
  modalOverlay.classList.remove('active')
})
