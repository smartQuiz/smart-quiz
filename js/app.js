'use strict';

var categoryImg = [];
var parentElement;
var imageParent;



//create a user and grab it from the welcome page
var user = document.getElementById('userName');



//========================================SPORT QUIZ===============================================

function sportQuiz() {

  var sportsQuestions = [
    'Who won the last soccer world cup in Brazil 2014? Your choices are: a, b, c',
    'How many times did USA made it to the world cup?',
    'Who won the MLS cup in 2016?',
    'Which famous player helped Napoli win their first ever championship?',
    'Who won the champions league this year?'
  ];
  var sportsAnswers = ['Germany', '10', 'Seattle Sounders', 'Diego Maradona', 'Real Madrid'];
  var text;
  for (var i = 0; i < sportsQuestions.length; i++) {

    parentElement = document.getElementById('quiz');

    sportsAnswers.forEach(function() {
      text = document.createElement('input');
      text.setAttribute('id', sportsAnswers[i]);
    });

    console.log(text.id);

    var p = document.createElement('p');

    p.textContent = sportsQuestions[i];

    parentElement.append(p);
    parentElement.append(text);

  }
}

// sportQuiz();
//========================================TRAVEL QUIZ===============================================

function travelQuiz() {

  var travelQuestions = [
    'What country is mt everest in? Your choices are: a, b, c',
    'What is mt st helens famous for',
    'What famous art museum is in Paris France?',
    'Where are the most famous pyramids located?',
    'What famous landmark that can be seen from space is in China?'
  ];
  var travelAnswers = ['Nepal', 'Being a volcano', 'Le Louvre', 'Egypt', 'The Great Wall'];
  var text;
  for (var i = 0; i < travelQuestions.length; i++) {

    parentElement = document.getElementById('quiz');

    travelAnswers.forEach(function() {
      text = document.createElement('input');
      text.setAttribute('id', travelAnswers[i]);
    });

    console.log(text.id);

    var p = document.createElement('p');

    p.textContent = travelQuestions[i];

    parentElement.append(p);
    parentElement.append(text);

  }
}

// travelQuiz();

//========================================POP-CULTURE QUIZ===============================================

function popQuiz() {

  var popQuestions = [
    'This singer sat in a Blank Space while trying to shake it off as she sang We are never getting back together. Who is she?',
    'In the Big Bang Sheldon Cooper and Leonard Hofstadter lived next door to a pretty waitress named?',
    'Queen Daenerys Targaryen is also known as the mother of ?',
    'What famous actress plays Katniss Everdeen in the hunger games?',
    'Doctor who thinks these are cool?'
  ];
  var popAnswers = ['Taylor Swift', 'Penny', 'Dragons', 'Jennifer Lawrence', 'Bow ties'];
  var text;
  for (var i = 0; i < popQuestions.length; i++) {

    parentElement = document.getElementById('quiz');

    popAnswers.forEach(function() {
      text = document.createElement('input');
      text.setAttribute('id', popAnswers[i]);
    });

    console.log(text.id);

    var p = document.createElement('p');

    p.textContent = popQuestions[i];

    parentElement.append(p);
    parentElement.append(text);


  }
}

// popQuiz();

//=================================LINK EACH IMAGE TO APPROPRIATE QUIZ================================



//========================================EVENT LISTENER===============================================

//set the images section to be linked to the event
imageParent = document.getElementById('imageContainer');

//add the event listener to listen for images IDs
imageParent.addEventListener('click', clickHandler);

function clickHandler() {
  var clicked = event.target.getAttribute('id');
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
  parentElement.append(resetButton);
  parentElement.append(scoreButton);
}


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
