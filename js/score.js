'user strict';

//render that user and score to the score board page


var showScore = document.getElementById('showScore');
console.log(showScore);
var newHeader = document.createElement('h1');
var secondHeader = document.createElement('h1');

//get the user object from local storage
var stringedUserObject = localStorage.getItem('userObject');
console.log(stringedUserObject);
var parsedUserObject = JSON.parse(stringedUserObject);
console.log(parsedUserObject);


newHeader.textContent = 'Well done ' + parsedUserObject.name;
secondHeader.textContent = 'Your score is: ' + parsedUserObject.score;
console.log(newHeader);
console.log(secondHeader);


showScore.append(newHeader);
showScore.append(secondHeader);
