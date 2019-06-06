'use strict';

var greetingName = prompt('Hello! Thanks for visiting. What\'s your name?');
var disappointedInYou = 'Aww, come on. Give it a try!';
console.log('greeting: ' + greetingName);

//Checking if the user loves dogs
var favoriteAnimal = prompt('Hi, ' + greetingName + ' is your favorite animal a dog?').toLowerCase();
console.log('Dog favorite animal? ' + favoriteAnimal);

if(favoriteAnimal === 'yes' || favoriteAnimal === 'y') {
  alert('I love dogs too!');
} else if(favoriteAnimal === 'no' || favoriteAnimal === 'n') {
  alert('I\'m sorry you\'ve never experienced the glory and wonder that are doggos!');
} else {
  favoriteAnimal = prompt(disappointedInYou);
}

//I only like veggie sushi. Can the user guess this?
var favoriteFood = prompt('Is my favorite food sushi?').toLowerCase();
console.log('fave food is sushi ' + favoriteFood);

if(favoriteFood === 'yes' || favoriteFood === 'y') {
  alert('Oh, sorry. I really don\'t like fish!');
} else if(favoriteFood === 'no' || favoriteFood === 'n') {
  alert('You got it! I don\'t mind veggie sushi though');
}else {
  favoriteFood = prompt(disappointedInYou);
}
//Does the visitor drink as much coffee as me?
var coffeeTime = prompt('Do you drink lots of coffee?').toLowerCase();
console.log('Drinks coffee? ' + coffeeTime);

if(coffeeTime === 'yes' || coffeeTime === 'y') {
  alert('Me too! Coffee is a source of comfort and strength.');
} else if(coffeeTime === 'no' || coffeeTime === 'n') {
  alert('I envy your ability to function without coffee!');
}else {
  coffeeTime = prompt(disappointedInYou);
}

//Never miss a chance to plug my fave book Sunshine
var faveBook = prompt('Have you read the novel Sunshine by Robin McKinley?').toLowerCase();
console.log('Read Sunshine? ' + faveBook);

if(faveBook === 'yes'|| faveBook === 'y') {
  alert('OMG, same here! Possibly one of my favorite books of all time!');
} else if(faveBook === 'no' || faveBook === 'n') {
  alert('Oh, then I highly recommend you read it. I\'ll even give you my copy');
} else {
  faveBook = prompt(disappointedInYou);
}

//Watching this now so hard to resist asking the user
var watchShow = prompt('Have you watched Good Omens yet?').toLowerCase();
console.log('Watched Good Omens? ' + watchShow);

if(watchShow === 'yes' || watchShow === 'y') {
  alert('Yay! It\'s so good! Just another awesome show from Amazon Prime!');
} else if(watchShow === 'no' || watchShow === 'n'){
  alert('I highly recommend you give it a try! Free with Amazon prime!');
} else {
  watchShow = prompt(disappointedInYou);
}

// Question 6 will be a number guessing game

var yourGuess = prompt('Let\'s play a game! Can you guess the number I\'m thinking of? It\'s a number between 1 and 25. You have 4 guesses!');
var myNumber = 13;
for (var g = 1; g < 4; g++){ 

  if (yourGuess == myNumber) {
    yourGuess = alert('Congrats! You guessed correctly in only ' + g + ' attempt(s)');
    console.log('You got it! Well done');
    break;
 
  } else if (yourGuess > myNumber) {
    yourGuess = prompt('Sorry that is too high. Try again!');
    console.log('User guessed ' + yourGuess);

  } else if (yourGuess < myNumber) {
    yourGuess = prompt('Sorry! That is too low. Try again!');
    console.log('User guessed ' + yourGuess);
  }
  else {
    yourGuess = prompt('Try again! Remember, a number between 1 and 25');
    console.log('User guessed ' + yourGuess);

  }
}    

//Question 7 will be a question with multiple correct answers
//I'm allowing both version of the name for the Czech Republic.

var visitedCountries = ['Romania', 'England', 'Ghana', 'Germany', 'Uganda', 'Netherlands', 'Hungary', 'Czech Republic', 'Czechia'];

var guessTheCountries = prompt('Can you guess the countries I have visited? You get 10 tries!');

for (var i = 0; i < visitedCountries.length + 1; i++) {
  if (visitedCountries.indexOf(guessTheCountries) === -1 ) {
    console.log('guess: ' + guessTheCountries);
    guessTheCountries = prompt('Oh, not yet! Try again!');
   } else {
    console.log('guess: ' + guessTheCountries);
    guessTheCountries = prompt('That\'s right! Can you guess another?');

    }


  }






