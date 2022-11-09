/*============================================
                GLOBAL VARIABLES
=============================================*/
let boxes = document.getElementsByClassName('newBox'); //stores boxes created in the grid



/*============================================
            CREATE AND CONTROL GRID
==============================================*/

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

//prompt user and set size, reject if >100

let gridSize = 32; //standard size

let sizeBtn = document.getElementById('sizeBtn');

sizeBtn.addEventListener('click', setGridSize);

function setGridSize() {
    gridSize = window.prompt('Set size', '');
    if (gridSize > 100) {
        alert('Too big, must be under 100');
        setGridSize();
    } else {
    displayBox.replaceChildren(); //remove former grid boxes
    addBoxes(gridSize);}
    paintBox();
}

//reset grid colour
let rstBtn = document.getElementById('rstBtn');

rstBtn.addEventListener('click', rstBoxes);

function rstBoxes() {
    for (const box of boxes) {
        box.style.backgroundColor = 'white';
        box.style.opacity = 0.0;
        
    }
}

/*============================================
                    PAINT BOXES
==============================================*/

//apply paint functions to boxes

function paintBox() {
    for (const box of boxes) {
            box.addEventListener('mouseover', () => {
                if (mode == 0) {
                    paintItBlack(box);
                } else if (mode == 1) {
                    randomColour(box);
                } else {
                    gradualPaintBox(box)
                }
        
        })
    }
}

//add 10% opacity on hover-over
function gradualPaintBox(element) {
    let declaration = getComputedStyle(element); //returns value as str
    let boxOpacity = Number(declaration.getPropertyValue('opacity')); //converts declaration to num so that we can increment it
    element.style.backgroundColor = 'black';
    element.style.opacity = boxOpacity + 0.1;
    
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

//paint box black
function paintItBlack(element) {
    element.style.opacity = 1.0;
    element.style.backgroundColor = 'black';

}

/*============================================
                    SET PAINT MODE
==============================================*/
let mode = 0; //0 = regular; 1 = rainbow; 2 = gradual;

let rainbowBtn = document.getElementById('rainbowBtn');
let gradualBtn = document.getElementById('gradualBtn');
let regularBtn = document.getElementById('regularBtn');

rainbowBtn.addEventListener('click', () => {
    mode = 1;
    rstBoxes();
});
gradualBtn.addEventListener('click', () => {
    mode = 2; 
    rstBoxes();
});
regularBtn.addEventListener('click', () => {
    mode = 0; 
    rstBoxes();
});


/*============================================
                    MAIN LOOP
==============================================*/
addBoxes(gridSize);
paintBox();