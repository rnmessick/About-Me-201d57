'use strict';

// // Question 1-5 arrays
var favAnimalArray = ['I love dogs too!','I\'m sorry you\'ve never experienced the glory and wonder that are doggos!'];
var favFood = ['Oh, sorry. I really don\'t like fish!','You got it! I don\'t mind veggie sushi though'];
var favCoff = ['Me too! Coffee is a source of comfort and strength.', 'I envy your ability to function without coffee!'];
var favBook = ['OMG, same here! Possibly one of my favorite books of all time!', 'Oh, then I highly recommend you read it. I\'ll even give you my copy'];
var watchedShow = ['Yay! It\'s so good! Just another awesome show from Amazon Prime!', 'I highly recommend you give it a try! Free with Amazon prime!'];

var qAboutMe = function(userResp, ansArr){
  if(userResp === 'yes' || userResp === 'y') {
    alert(ansArr[0]);
  } else if(userResp === 'no' || userResp === 'n') {
    alert(ansArr[1]);
  } else {
    userResp = prompt(disappointedInYou);
  }
};

var greetingName = prompt('Hello! Thanks for visiting. What\'s your name?');
var disappointedInYou = 'Aww, come on. Give it a try!';
console.log('greeting: ' + greetingName);

//Checking if the user loves dogs
var favoriteAnimal = prompt('Hi, ' + greetingName + ' is your favorite animal a dog?').toLowerCase();
console.log('Dog favorite animal? ' + favoriteAnimal);
qAboutMe(favoriteAnimal, favAnimalArray);

//I only like veggie sushi. Can the user guess this?
var favoriteFood = prompt('Is my favorite food sushi?').toLowerCase();
console.log('fave food is sushi ' + favoriteFood);
qAboutMe(favoriteFood, favFood);


//Does the visitor drink as much coffee as me?
var coffeeTime = prompt('Do you drink lots of coffee?').toLowerCase();
console.log('Drinks coffee? ' + coffeeTime);
qAboutMe(coffeeTime, favCoff);


//Never miss a chance to plug my fave book Sunshine
var favoriteBook = prompt('Have you read the novel Sunshine by Robin McKinley?').toLowerCase();
console.log('Read Sunshine? ' + favoriteBook);
qAboutMe(favoriteBook, favBook);


//Watching this now so hard to resist asking the user
var watchShow = prompt('Have you watched Good Omens yet?').toLowerCase();
console.log('Watched Good Omens? ' + watchShow);
qAboutMe(watchShow, watchedShow);


// Question 6 will be a number guessing game

var guessingGame = function(){
  var yourGuess = parseInt(prompt ('Let\'s play a game! Can you guess the number I\'m thinking of? It\'s a number between 1 and 25. You have 4 guesses!'));
  console.log('User guessed ' + yourGuess);
  var myNumber = 13;
  for (var g = 1; g < 4; g++){
    if (yourGuess === myNumber) {
      break;
    } else if (yourGuess > myNumber) {
      yourGuess = parseInt(prompt('Sorry that is too high. Try again!'));
      console.log('User guessed ' + yourGuess);
    } else if (yourGuess < myNumber) {
      yourGuess = parseInt(prompt('Sorry! That is too low. Try again!'));
      console.log('User guessed ' + yourGuess);
    }
    else {
      yourGuess = prompt('Try again! Remember, a number between 1 and 25');
      console.log('User guessed ' + yourGuess);
    }
  }
  if (yourGuess === myNumber) {
    yourGuess = alert('Congrats! You guessed correctly in only ' + g + ' attempt(s)');
    console.log('You got it! Well done');
  }
};

guessingGame();

//Question 7 will be a question with multiple correct answers
//I'm allowing both version of the name for the Czech Republic.

var visitedCountries = ['Romania', 'England', 'Ghana', 'Germany', 'Uganda', 'Netherlands', 'Hungary', 'Czech Republic', 'Czechia'];
var countryGame = function(country){
  var guessTheCountries = prompt('Can you guess the countries I have visited? You get 10 tries!');

  for (var i = 0; i < country.length + 1; i++) {
    if (country.indexOf(guessTheCountries) === -1 ) {
      console.log('guess: ' + guessTheCountries);
      guessTheCountries = prompt('Oh, not yet! Try again!');
    } else {
      console.log('guess: ' + guessTheCountries);
      guessTheCountries = prompt('That\'s right! Can you guess another?');
    }
  }
};

countryGame(visitedCountries);






