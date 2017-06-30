'use strict';

var userName;
//=============================SUBMIT EVENT FOR INDEX.HTML USER NAME=========================================

var userNameID = document.getElementById('entryID');

//set the submit answers button to intake answers
userNameID.addEventListener('submit', function(event) {

  event.preventDefault();

  userName = event.target.name.value;

  //=============================USER CONSTRUCTOR=========================================


  //set the user name to local storage
  var stringfiedUser = JSON.stringify(userName);
  localStorage.setItem('name', stringfiedUser);

});
