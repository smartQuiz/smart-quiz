'use strict';

var categoryImg = [];
var parentElement;




//create a user and grab it from the welcome page
var user = document.getElementById('userName');




//array of objects:

var sportsQuestions = [
  'Who won the last soccer world cup in Brazil 2014?',
  'How many times did USA made it to the world cup?',
  'Who won the MLS cup in 2016?',
  'Which famous player helped Napoli win their first ever championship?',
  'Who won the champions league this year?'
];
var text;
var sportsAnswers = ['Germany', '10', 'Seattle Sounders', 'Diego Maradona', 'Real Madrid'];

for (var i = 0; i < sportsQuestions.length; i++) {

  parentElement = document.getElementById('quiz');

  sportsAnswers.forEach(function() {
    text = document.createElement('input');
    text.setAttribute('id', sportsAnswers[i]);
  });

  // console.log(text.id);

  var p = document.createElement('p');

  p.textContent = sportsQuestions[i];

  parentElement.append(p);
  parentElement.append(text);

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
