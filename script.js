//your JS code here. If required.
const modal = document.getElementById('modal');
const openModalButton = document.getElementById('openModal');
const closeModalButton = document.querySelector('.close-modal');

openModalButton.addEventListener('click', function () {
  modal.style.display = 'block';
});

closeModalButton.addEventListener('click', function () {
  modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
