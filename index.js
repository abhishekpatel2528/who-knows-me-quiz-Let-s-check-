var readlineSync = require("readline-sync");
var score = 0

var userName = readlineSync.question("What's your name? ");

console.log("Welcome " + userName + "!" + " DO YOU KNOW ABHISHEK? Let's Check?");


function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer === answer) {
    console.log("Wah! Kya baat hai")
    score = score + 1

  } else {
    console.log("Are yaar!")
    score = score - 1
  }
  console.log("Aapka score hai = " + score)
  console.log("----------------------------------")
}

var question = [{
  question: "Whats my favourite color?",
  answer: "black"
}, {
  question: "My Favourite place?",
  answer: "himalaya"
}, {
  question: "What's my favourite food?",
  answer: "paneer"
}, {
  question: "What's my biggest dream??",
  answer: "full stack developer"
}, {
  question: "Where was I born?",
  answer: "20 feb 2001"
}, {
  question: "What motivates you to work hard?",
  answer: "mumma"
}]

for (var i = 0; i < question.length; i++) {
  var currentQuestion = question[i]
  play(currentQuestion.question, currentQuestion.answer)
}

console.log("FINAL SCORE : " + score)