'use strict';

var categoryImg = [];
var parentElement;
var imageParent;
var score = 0;
var buttonParentElement;
var clicked;
var sportInputs = [];
var travelInputs = [];
var popInputs = [];

var sportsQuestions = [
  'Who won the last soccer world cup in Brazil 2014? Your choices are: a, b, c',
  'How many times did USA made it to the world cup?',
  'Who won the MLS cup in 2016?',
  'Which famous player helped Napoli win their first ever championship?',
  'Who won the champions league this year?'
];
var sportsAnswers = ['germany', '10', 'seattle sounders', 'diego maradona', 'real madrid'];
var sportIds = ['germany', 'ten', 'seattlesounders', 'diegomaradona', 'realmadrid'];

var travelQuestions = [
  'What country is mt everest in? Your choices are: a, b, c',
  'What is mt st helens famous for',
  'What famous art museum is in Paris France?',
  'Where are the most famous pyramids located?',
  'What famous landmark that can be seen from space is in China?'
];
var travelAnswers = ['nepal', 'being a volcano', 'le louvre', 'egypt', 'the great wall'];
var travelIds = ['nepal', 'beingavolcano', 'lelouvre', 'egypt', 'thegreatwall'];

var popQuestions = [
  'This singer sat in a Blank Space while trying to shake it off as she sang We are never getting back together. Who is she?',
  'In the Big Bang Sheldon Cooper and Leonard Hofstadter lived next door to a pretty waitress named?',
  'Queen Daenerys Targaryen is also known as the mother of ?',
  'What famous actress plays Katniss Everdeen in the hunger games?',
  'Doctor who thinks these are cool?'
];
var popAnswers = ['taylor swift', 'penny', 'dragons', 'jennifer lawrence', 'bow ties'];
var popIds = ['taylorswift', 'penny', 'dragons', 'jenniferlawrence', 'bowties'];

//create a user and grab it from the welcome page
var user = document.getElementById('userName');



//========================================SPORT QUIZ===============================================

function sportQuiz() {

  var text;
  for (var i = 0; i < sportsQuestions.length; i++) {

    parentElement = document.getElementById('quiz');

    sportIds.forEach(function() {
      text = document.createElement('input');
      text.setAttribute('name', sportIds[i]);
    });

    var label = document.createElement('label');

    label.textContent = sportsQuestions[i];

    parentElement.append(label);
    parentElement.append(text);
    quiz.append(submitButton);
  }
}

// sportQuiz();
//========================================TRAVEL QUIZ===============================================

function travelQuiz() {

  var text;
  for (var i = 0; i < travelQuestions.length; i++) {

    parentElement = document.getElementById('quiz');

    travelIds.forEach(function() {
      text = document.createElement('input');
      text.setAttribute('name', travelIds[i]);
    });

    var label = document.createElement('label');

    label.textContent = travelQuestions[i];

    parentElement.append(label);
    parentElement.append(text);
    quiz.append(submitButton);
  }
}

// travelQuiz();

//========================================POP-CULTURE QUIZ===============================================

function popQuiz() {

  var text;
  for (var i = 0; i < popQuestions.length; i++) {

    parentElement = document.getElementById('quiz');

    popIds.forEach(function() {
      text = document.createElement('input');
      text.setAttribute('name', popIds[i]);
    });

    var label = document.createElement('label');

    label.textContent = popQuestions[i];

    parentElement.append(label);
    parentElement.append(text);
    quiz.append(submitButton);
  }
}

// popQuiz();


//========================================EVENT LISTENER===============================================

//set the images section to be linked to the event
imageParent = document.getElementById('imageContainer');

//add the event listener to listen for images IDs
imageParent.addEventListener('click', clickHandler);

function clickHandler() {
  clicked = event.target.getAttribute('id');
  console.log('clicked ' + clicked);
  if (clicked === 'img1') {
    sportQuiz();
    imageParent.removeEventListener('click', clickHandler);
  } else if (clicked === 'img2') {
    popQuiz();
    imageParent.removeEventListener('click', clickHandler);
  } else {
    travelQuiz();
    imageParent.removeEventListener('click', clickHandler);
  }
}
//========================================SUBMIT BUTTON===============================================

//submit answers button
var submitButton = document.createElement('button');
submitButton.innerHTML = 'Submit Answers';

var quizForm = document.getElementById('quiz');

//set the submit answers button to intake answers
quizForm.addEventListener('submit', function(event) {

  event.preventDefault();

  //======================LTRIGGER APPROPRIATE QUIZ FOR EACH IMAGE=========================
  if (clicked === 'img1') {
    //======================SPORT QUIZ=========================
    var germany = event.target.germany.value.toLowerCase();
    sportInputs.push(germany);
    var ten = event.target.ten.value.toLowerCase();
    sportInputs.push(ten);
    var seattlesounders = event.target.seattlesounders.value.toLowerCase();
    sportInputs.push(seattlesounders);
    var diegomaradona = event.target.diegomaradona.value.toLowerCase();
    sportInputs.push(diegomaradona);
    var realmadrid = event.target.realmadrid.value.toLowerCase();
    sportInputs.push(realmadrid);

    for (var i = 0; i < sportInputs.length; i++) {
      if (sportInputs[i] == sportsAnswers[i]) {
        score++;
      }
    }
    console.log(score);


    console.log(germany);
    console.log(ten);
    console.log(seattlesounders);
    console.log(diegomaradona);
    console.log(realmadrid);

  } else if (clicked === 'img2') {
    //======================POP QUIZ=========================
    var taylorswift = event.target.taylorswift.value.toLowerCase();
    popInputs.push(taylorswift);
    var penny = event.target.penny.value.toLowerCase();
    popInputs.push(penny);
    var dragons = event.target.dragons.value.toLowerCase();
    popInputs.push(dragons);
    var jenniferlawrence = event.target.jenniferlawrence.value.toLowerCase();
    popInputs.push(jenniferlawrence);
    var bowties = event.target.bowties.value.toLowerCase();
    popInputs.push(bowties);

    for (i = 0; i < popInputs.length; i++) {
      if (popInputs[i] == popAnswers[i]) {
        score++;
      }
    }
    console.log(score);
    console.log(taylorswift);
    console.log(penny);
    console.log(dragons);
    console.log(jenniferlawrence);
    console.log(bowties);

  } else {
    //======================TRAVEL QUIZ=========================
    var nepal = event.target.nepal.value.toLowerCase();
    travelInputs.push(nepal);
    var beingavolcano = event.target.beingavolcano.value.toLowerCase();
    travelInputs.push(beingavolcano);
    var lelouvre = event.target.lelouvre.value.toLowerCase();
    travelInputs.push(lelouvre);
    var egypt = event.target.egypt.value.toLowerCase();
    travelInputs.push(egypt);
    var thegreatwall = event.target.thegreatwall.value.toLowerCase();
    travelInputs.push(thegreatwall);

    for (i = 0; i < travelInputs.length; i++) {
      if (travelInputs[i] == travelAnswers[i]) {
        score++;
      }
    }
    console.log(score);
    console.log(nepal);
    console.log(beingavolcano);
    console.log(lelouvre);
    console.log(egypt);
    console.log(thegreatwall);
  }









  // var answer = event.target.Germany.value;
  // var label = document.createElement('label');
  // label.textContent = answer;
  // if (answer === 'Germany') {
  //   score++;

  // parentElement.append(label);


});

//========================================RESET AND RELOAD BUTTON===============================================

buttonParentElement = document.getElementById('buttons');
//add the two button for the score and to reset:
var resetButton = document.createElement('button');
resetButton.innerHTML = 'Reset';

//set the reset button to reload the page
resetButton.addEventListener('click', function() {
  location.reload();
});

//set the score button to take us to score page
var scoreButton = document.createElement('button');
scoreButton.innerHTML = 'Score';
scoreButton.addEventListener('click', function() {
  window.location.href = 'scoreboard.html';
});
buttonParentElement.append(resetButton);
buttonParentElement.append(scoreButton);

//=============================GET INPUT DATAT AND SAVE SCORE=========================================


// var submitButton = document.getElementById('quiz');
//
// submitButton.addEventListener('submit', function(){
//
//   //first quiz
//
//   var germany = event.target.Germany.value;
//   console.log(germany);
//
// });








// parentElement = document.getElementById('quiz');
//   var p = document.createElement('p');
//   p.textContent = sports[0].q1;
//   parentElement.append(p);
// sports[0].q1


//===================================================================
//second attempt

//function for each of the three quizes to create the questions and answers and render it to the page.

//quiz 1

// function sportsQuiz () {
//
// }

//===================================================================
//first attempt

//function to populate the quiz field render()

// function render() {
//   parentElement = document.getElementById('quiz');
//   var h1 = document.createElement('h1');
//   h1.textContent = 'This is the first question?';
//   parentElement.append(h1);
// }
//
// render();
//event listener
//=====================================================================

//


function User(name, score, correct, wrong) {
  this.name = name,
    this.score = score,
    this.correct = 0,
    this.wrong = 0;
};

function ImageForCat(imgName, path, category) {
  this.imgName = imgName;
  this.path = path;
  this.category = category;
  categoryImg.push(this);
};
new ImageForCat('sports', 'img/sports.jpg', 'sports');
new ImageForCat('geography', 'img/geography.jpg', 'geography');
new ImageForCat('pop-culture', 'img/popculture.jpg', 'popculture');
