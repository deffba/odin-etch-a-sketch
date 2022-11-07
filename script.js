


//create grid
const displayBox = document.getElementById('mainContainer');
function addBoxes(size) {


    for (let i = 0; i < (size * size); i++) {
    let newBox = document.createElement('div');
    newBox.classList.add('newBox');
    newBox.style.width = `${100/size}%`;
    newBox.style.height = `${100/size}%`;
    displayBox.appendChild(newBox);
    

    }
}


//add 10% opacity on hover-over
function gradualPaintBox(element) {
    let declaration = getComputedStyle(element); //returns value as str
    let boxOpacity = Number(declaration.getPropertyValue('opacity')); //converts declaration to num so that we can increment it
    element.style.backgroundColor = 'black';
    element.style.opacity = boxOpacity + 0.1;
    
}

//paint boxes
let boxes = document.getElementsByClassName('newBox');
function paintBox() {
    for (const box of boxes) {
            box.addEventListener('mouseover', () => {
                gradualPaintBox(box);
                //randomColour(box);
                //box.style.backgroundColor = 'black';
        
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
    paintBox();
});


//reset grid colour
let rstBtn = document.getElementById('rstBtn');

rstBtn.addEventListener('click', rstBoxes);

function rstBoxes() {
    for (const box of boxes) {
        box.style.backgroundColor = 'white';
        box.style.opacity = 0.0;
        
    }
}





//paint colour randomiser
let rRandom;
let gRandom;
let bRandom;

function randomColour(element) {
    rRandom = Math.floor(Math.random() * 256);
    gRandom = Math.floor(Math.random() * 256);
    bRandom = Math.floor(Math.random() * 256);
    element.style.opacity = 1.0;
    element.style.backgroundColor = `rgb(${rRandom}, ${gRandom}, ${bRandom})`;   

}

//initialise
addBoxes(gridSize);
paintBox();