const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello World!';
myHeading.style.color = 'purple';


let myImage = document.querySelector('img')
myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === './images/web-dev.jpeg') {
        myImage.setAttribute('src', './images/reek.jpg');
    } else {
        myImage.setAttribute('src', './images/web-dev.jpeg');
    }
}

let  myButton = document.querySelector('button');
myButton.onclick = function () {
    let size = prompt('What size would you like to image to be?');
    size = size += 'px';
    let myImage = document.querySelector('img');

    myImage.style.width = size;    
}

let  colorButton = document.querySelector('#colorButton');
    colorButton.onclick = function () {
    let color = prompt('What color would you like the background to be?');
    
    document.querySelector('body').style.backgroundColor = color; 
   
}


let userButton = document.querySelector('#userButton');


function setUserName() {
    let myName = prompt('Please enter your name: ');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName)
        myHeading.textContent = 'Mozilla is cool, ' + myName;
    }
    
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

userButton.onclick = function() {
    setUserName();
}


