const displayBox = document.getElementById('mainContainer');


//create grid
function addBoxes(size) {


    for (let i = 0; i < (size * size); i++) {
    let newBox = document.createElement('div');
    newBox.classList.add('newBox');
    displayBox.appendChild(newBox);

    }
}



//paint boxes
let boxes = document.getElementsByClassName('newBox');
function listenBox() {
    for (const box of boxes) {
            box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'black';
        
        })
    }
}

//prompt user and set size

let gridSize = 16; //standard size

let sizeBtn = document.getElementById('sizeBtn');

sizeBtn.addEventListener('click', () => {
    gridSize = window.prompt('Set size', '');
    displayBox.replaceChildren(); //remove former grid boxes
    addBoxes(gridSize);
});





addBoxes(gridSize);
listenBox();

