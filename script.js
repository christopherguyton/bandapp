//Define My UI Variables

const setForm = document.querySelector('#setlist-form');
const songList1 = document.querySelector('#set-1');
const songList2 = document.querySelector('#set-2');
const removeBtn = document.querySelector('.remove-song');
const songInput = document.querySelector('#song');

//Load Event Listeners

loadEventListeners();

function loadEventListeners() {
    setForm.addEventListener('submit', addSong);
    songList1.addEventListener('click', changeColor);
    songList2.addEventListener('click', changeColor);
}

//Mark For Deletion
function changeColor(e) {
    e.target.classList.toggle('song-selection');
  }

//Add A Song

function addSong(e){
    if (songInput.value === '') {
        alert('You Must Input A Song');
    }
    e.preventDefault();
}
