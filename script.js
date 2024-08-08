const container = document.querySelector('#container');
const btn = document.querySelector('#btn');
btn.addEventListener('click', changeGrid);

function createGrid(size) {
    for (let i = 0; i < size*size; i++) {
        let div = document.createElement('div');
        div.classList.add('square');
        container.appendChild(div);
    }
    let squares = document.querySelectorAll('.square');
    let dimension = (1000/size);
    squares.forEach(square => {
        square.style.width = `${dimension}px`;
        square.style.height = `${dimension}px`;
        square.style.opacity = '0.0';
        square.style.backgroundColor = randomColor();
        square.addEventListener('mouseover', () => {
            square.style.opacity = `${parseFloat(square.style.opacity) + 0.1}`;
        });
    });
}

function deleteGrid() {
    let squares = document.querySelectorAll('.square');
    squares.forEach(square => {container.removeChild(square);});
}

function changeGrid() {
    let size = prompt('Enter the size of the grid (1-100):');
    if (size < 1 || size > 100 || isNaN(size)) {
        alert('Please enter a number between 1 and 100');
        changeGrid();
    } else {
        deleteGrid();
        createGrid(size);
    }
}

function randomColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return `#${randomColor}`;
}