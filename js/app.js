'use strict'

var greetingName = prompt('Hello! Thanks for visiting. What\'s your name?');

console.log('greeting: ' + greetingName);

//Checking if the user loves dogs
var favoriteAnimal = prompt('Hi, ' + greetingName + ' is your favorite animal a dog?').toLowerCase();
console.log('Dog favorite animal? ' + favoriteAnimal);

if(favoriteAnimal === 'yes' || favoriteAnimal === 'y') {
  alert('I love dogs too!');
} else if(favoriteAnimal === 'no' || favoriteAnimal === 'n') {
  alert('I\'m sorry you\'ve never experienced the glory and wonder that are doggos!');
} else {
  alert('Aww, come on. Okay, next question');
}

//Does the visitor love pizza?
var favoriteFood = prompt('Is your favorite food pizza?').toLowerCase();
console.log('fave food is pizza? ' + favoriteFood);

if(favoriteFood === 'yes' || favoriteFood === 'y') {
  alert('I wish I didn\'t love pizza as much as I do!');
} else if(favoriteFood === 'no' || favoriteFood === 'n') {
  alert('I completely understand, I wish I didn\'t love pizza!');
}else {
  alert('Aww, come on. Okay, next question');
}
//Does the visitor drink as much coffee as me?
var coffeeTime = prompt('Do you drink lots of coffee?').toLowerCase();
console.log('Drinks coffee? ' + coffeeTime);

if(coffeeTime === 'yes' || coffeeTime === 'y') {
  alert('Me too! Coffee is a source of comfort and strength.');
} else if(coffeeTime === 'no' || coffeeTime === 'n') {
  alert('I envy your ability to function without coffee!');
}else {
  alert('Aww, come on. Okay, next question');
}

//Never miss a chance to plug my fave book Sunshine
var faveBook = prompt('Have you read the novel Sunshine by Robin McKinley?').toLowerCase();
console.log('Read Sunshine? ' + faveBook);

if(faveBook === 'yes'|| faveBook === 'y') {
  alert('OMG, same here! Possibly one of my favorite books of all time!');
} else if(faveBook === 'no' || faveBook === 'n') {
  alert('Oh, then I highly recommend you read it. I\'ll even give you my copy');
} else {
  alert('Aww, come on. Okay, next question');
}

//Watching this now so hard to resist asking the user
var watchShow = prompt('Have you watched Good Omens yet?').toLowerCase();
console.log('Watched Good Omens? ' + watchShow);

if(watchShow === 'yes' || watchShow === 'y') {
  alert('Yay! It\'s so good! Just another awesome show from Amazon Prime!');
} else if(watchShow === 'no' || watchShow === 'n'){
  alert('I highly recommend you give it a try! Free with Amazon prime!');
} else {
  alert('Aww, come on. Okay, next question');
}