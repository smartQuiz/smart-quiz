'use strict';

var categoryImg = [];
var parentElement;
var imageParent;
// var userNameID;
var score = 0;
var userName;
var buttonParentElement;
var clicked;
var sportInputs = [];
var travelInputs = [];
var popInputs = [];

var sportsQuestions = [
  'Who won the last soccer world cup in Brazil 2014? Brazil, Italy, USA or Germany.',
  'How many times did USA made it to the world cup? 9, 10, 6 or 12.',
  'Who won the MLS cup in 2016? LA galaxy, Seattle Sounders, DC United or NY city FC.',
  'Which famous player helped Napoli win their first ever championship? Diego Maradona, Messi, Ronaldo or david beckham.',
  'Who won the champions league this year? Barcelona, Manchester united, Real Madrid or Juventus.'
];
var sportsAnswers = ['germany', '10', 'seattle sounders', 'diego maradona', 'real madrid'];
var sportIds = ['germany', 'ten', 'seattlesounders', 'diegomaradona', 'realmadrid'];

var travelQuestions = [
  'What country is mt everest in?  Nepal, India, Turkey',
  'What is mt st helens famous for? Being small, Being a volcano, Tallest Mountain ' ,
  'What famous art museum is in Paris France? The pink door, Le louvre, The Acropolis',
  'Where are the most famous pyramids located? Spain, Egypt, Montana',
  'What famous landmark that can be seen from space is in China? Temple of Heaven, The Great Wall, Forbidden City'
];
var travelAnswers = ['nepal', 'being a volcano', 'le louvre', 'egypt', 'the great wall'];
var travelIds = ['nepal', 'beingavolcano', 'lelouvre', 'egypt', 'thegreatwall'];

var popQuestions = [
  'This singer sat in a Blank Space while trying to shake it off as she sang We are never getting back together. Who is she? Katie Harry, Taylor Swift, Justin Beaver',
  'In the Big Bang Sheldon Cooper and Leonard Hofstadter lived next door to a pretty waitress named? Sam, Penny, Jan, ',
  'Queen Daenerys Targaryen is also known as the mother of ? Two boys, A girl, Dragons',
  'What famous actress plays Katniss Everdeen in the hunger games? Mariah Carey, Jennifer Grey or Jennifer Lawrence',
  'Doctor who thinks these are cool? Bow Ties, Red Cars, Marbles'
];
var popAnswers = ['taylor swift', 'penny', 'dragons', 'jennifer lawrence', 'bow ties'];
var popIds = ['taylorswift', 'penny', 'dragons', 'jenniferlawrence', 'bowties'];


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


//========================================EVENT LISTENER===============================================

//set the images section to be linked to the event
imageParent = document.getElementById('imageContainer');

//add the event listener to listen for images IDs
imageParent.addEventListener('click', clickHandler);

function clickHandler() {
  clicked = event.target.getAttribute('id');
  if (clicked === 'img1') {
    popQuiz();
    imageParent.removeEventListener('click', clickHandler);
  } else if (clicked === 'img2') {
    sportQuiz();
    imageParent.removeEventListener('click', clickHandler);
  } else {
    travelQuiz();
    imageParent.removeEventListener('click', clickHandler);
  }
}
//========================================SUBMIT BUTTON===============================================

//submit answers button
var submitButton = document.createElement('button');
submitButton.setAttribute('id', 'submit');
submitButton.innerHTML = 'Submit Answers';

var quizForm = document.getElementById('quiz');

//set the submit answers button to intake answers
quizForm.addEventListener('submit', function(event) {

  event.preventDefault();

  //======================LTRIGGER APPROPRIATE QUIZ FOR EACH IMAGE=========================
  if (clicked === 'img2') {
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
  } else if (clicked === 'img1') {
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

  }
  setScoreStorage();
  //send the user to the score page
  window.location.href = 'scoreboard.html';

});

//=================================RESET AND RELOAD BUTTON========================================

buttonParentElement = document.getElementById('buttons');
//add the two button for the score and to reset:
var resetButton = document.createElement('button');
resetButton.setAttribute('id', 'reset');
resetButton.innerHTML = 'Reset';

//set the reset button to reload the page
resetButton.addEventListener('click', function() {
  location.reload();
});


buttonParentElement.append(resetButton);

var parsedScore;
var storageScore;
var stringifiedScore;
//=============================LOCAL STORAGE=========================================
// to set to local storage
function setScoreStorage() {
  function User(name, score) {
    this.name = name,
      this.score = score;
  };

  //get the user name from local storage
  var stringedUser = localStorage.getItem('name');
  var parsedUser = JSON.parse(stringedUser);
  //create a new user object with the user name from the local storage and assign the current score to it
  var newUser = new User(parsedUser);
  newUser.score = score;
  //save the user object to local storage with name and score
  var stringfiedUser = JSON.stringify(newUser);
  localStorage.setItem('userObject', stringfiedUser);

  return parsedScore;
}

function setUserStorage(userName) {
  //set the user name to local storage
  var stringfiedUser = JSON.stringify(userName);
  userName = localStorage.getItem('userName');
  var parsedUser = JSON.parse(userName);
  return parsedUser;
}

function ImageForCat(imgName, path, category) {
  this.imgName = imgName;
  this.path = path;
  this.category = category;
  categoryImg.push(this);
};
new ImageForCat('sports', 'img/sports.jpg', 'sports');
new ImageForCat('geography', 'img/geography.jpg', 'geography');
new ImageForCat('pop-culture', 'img/popculture.jpg', 'popculture');
