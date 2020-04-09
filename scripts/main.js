let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/fka-twigs.jpg') {
        myImage.setAttribute ('src','images/fka-twigs-2.jpg');
    } else {
        myImage.setAttribute ('src','images/fka-twigs.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'FKA twigs is cool, ' + myName;
    }
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'FKA twigs is cool, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}