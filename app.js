//Selecting a Song Item

const songSelects1 = document.getElementById('set-1'); // This is your UL element
const songSelects2 = document.getElementById('set-2');

function changeColor(e) {
  e.target.classList.toggle('song-selection');
}


songSelects1.addEventListener('click', changeColor);
songSelects2.addEventListener('click', changeColor);

//Remove Item From List

const delItem = document.querySelector('.remove-song')
delItem.addEventListener('click', deleteItem);

function deleteItem(){
let removeSong = document.getElementsByClassName('song-selection');
 while(removeSong.length > 0) {
     removeSong[0].parentElement.removeChild(removeSong[0]);
 }
}


//Adding Elements to fields

function addGearItem() {
    let setGearItem = document.getElementById('gear').value
    let setGearPrice = document.getElementById('cost').value
    const newGearItem = document.createElement('li')
    newGearItem.className = "collection-item gear-item";
    newGearItem.appendChild(document.createTextNode(`${setGearItem} ${setGearPrice}`));
    document.getElementById('gear-ul').append(newGearItem);
    document.getElementById('gear').value = '';
    document.getElementById('cost').value = '';
    console.log(addGearItem);
}

function addSet1Song(e){
var setInput = document.getElementById('song').value
const newSong = document.createElement('li');
newSong.className = 'collection-item song-item';
newSong.appendChild(document.createTextNode(setInput));
document.getElementById('set-1').appendChild(newSong);
document.getElementById('song').value = '';

}

function addSet2Song(e){
var setInput = document.getElementById('song').value
const newSong2 = document.createElement('li');
newSong2.className = 'collection-item song-item';
newSong2.appendChild(document.createTextNode(setInput));
document.getElementById('set-2').appendChild(newSong2);
document.getElementById('song').value = '';

}




//Variables
const firstList = document.getElementById('set-1')
const secondList = document.getElementById('set-2')

document.querySelector('.remove-song')