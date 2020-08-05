
//Adding Elements to fields

function addSet1Song(){
var setInput = document.getElementById('song').value
const newSong = document.createElement('li');
newSong.className = 'collection-item';
newSong.appendChild(document.createTextNode(setInput));
document.getElementById('set-1').appendChild(newSong);
document.getElementById('song').value = '';
}

function addSet2Song(){
var setInput = document.getElementById('song').value
const newSong2 = document.createElement('li');
newSong2.className = 'collection-item';
newSong2.appendChild(document.createTextNode(setInput));
document.getElementById('set-2').appendChild(newSong2);
document.getElementById('song').value = '';
}


console.log(newSong)

//Variables
const firstList = document.getElementById('set-1')
const secondList = document.getElementById('set-2')


