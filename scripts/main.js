/*document.querySelector('html').onclick = function() {
    alert('Ouch! Stop poking me!');
}*/
//點擊切換圖片
var myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/ELIAN.png') {
      myImage.setAttribute ('src','images/sky.jpg');
    } else {
      myImage.setAttribute ('src','images/ELIAN.png');
    }
}

// Personalized welcome message code
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML ='Hello ' + storedName + "! Welcome to Elian's page";
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML ='Hello ' + storedName + "! Welcome to Elian's page";
}
myButton.onclick = function() {
  setUserName();
}

