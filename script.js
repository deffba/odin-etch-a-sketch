const displayBox = document.getElementById('mainContainer');


//create grid
function addBoxes() {
    for (let i = 0; i < 256; i++) {
    let newBox = document.createElement('div');
    newBox.classList.add('newBox');
    displayBox.appendChild(newBox);

    }
}

addBoxes();

//paint boxes
let boxes = document.getElementsByClassName('newBox');
function listenBox() {
    for (const box of boxes) {
            box.addEventListener('mouseover', () => {
            box.style.backgroundColor = 'black';
        
        })
    }
}

listenBox();

/*



//check for mouse-down
let mouseState = false;

function kukHora() {
    mouseState = true;
    console.log(mouseState);
    listenBox();
}

function mouseDown() {
    if (mouseState == false)
    document.addEventListener('mousedown', kukHora);
}

function mouseUp() {
    document.addEventListener('mouseup', () => {
        mouseState = false;
        clearInterval(mouseDown, 100);
        
        console.log(mouseState)
})
}


setInterval(mouseDown, 100);

setInterval(mouseUp, 100);
*/


//change box colour


/*function paintBox(item) {
    item.style.backgroundColor = 'black';
}

function listenBox() {
    if (mouseState == true) {
        for (let i = 0; i < boxes.length; i++) {
            let boeg = boxes[i];
            boeg.addEventListener('mouseover', paintBox(boeg));
            console.log(boeg);
            break;
            
        }
    } else {
        for (let i = 0; i < boxes.length; i++) {
            boxes[i].removeEventListener('mouseover', paintBox(boxes[i]));
            }
    }  

} */




