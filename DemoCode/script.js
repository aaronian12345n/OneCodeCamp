// JavaScript
const container = document.getElementById('container');

const newBox = document.createElement('div');
newBox.className = 'box';
newBox.textContent = 'New Box';
container.appendChild(newBox);

function handleBoxClick(event){
    if(event.target.style.backgroundColor === 'coral') {
        event.target.style.backgroundColor = 'lightgreen';
    } else {
        event.target.style.backgroundColor = 'coral';
    }
}

const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', handleBoxClick);
});

const SampleBox = document.querySelectorAll('.box')[1];
SampleBox.textContent = 'New Text'

