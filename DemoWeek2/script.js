// JavaScript for DOM manipulation

// Get reference to the container
const container = document.getElementById('container');

// Example of creating a new element and appending it to the container
const newBox = document.createElement('div');
newBox.className = 'box';
newBox.textContent = 'Box 4';
container.appendChild(newBox);



// Function to handle box click
function handleBoxClick(event) {
    // Toggle background color between red and green
    if (event.target.style.backgroundColor === 'coral') {
        event.target.style.backgroundColor = 'lightgreen';
    } else {
        event.target.style.backgroundColor = 'coral';
    }
}
// Attach event listener to each box
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
    box.addEventListener('click', handleBoxClick);
});


// DOM manipulation to change the text content of box 1
const SampleBox = document.querySelectorAll('.box')[0]; // Select the first box
SampleBox.textContent = 'Aaron'; // Change its text content to Aaron

// Function to handle paragraph click
function handleParagraphClick(event) {
    // Toggle color between red and blue
    if (event.target.style.color === 'red') {
        event.target.style.color = 'black';
    } else {
        event.target.style.color = 'red';
    }

    // Change text content
    if (event.target.textContent === 'Click me to change my color and text!') {
        event.target.textContent = 'Text and color changed!';
    } else {
        event.target.textContent = 'Click me to change my color and text!';
    }
}

// Get reference to the paragraph element
const paragraph = document.getElementById('paragraph');

// Add event listener for click event to the paragraph
paragraph.addEventListener('click', handleParagraphClick);
