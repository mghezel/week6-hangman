var Word = require('./word.js');
var prompt = require('prompt');

console.log("Country Hangman!");
console.log("Guess a letter of a country");
console.log("-----------------------------");
prompt.start();


game = {

 	country : ["spain", "england","mexico", "germany", "poland", "japan", "egypt", "india", "china",
    "russia", "france", "peru", "kenya", "sudan", "canada", "irland", "austria", "greece", 
    "malysia", "syria"],
 	wordsWon: 0,
 	guessesRemaining: 10,
 	currentWrd: null,
 	
 	startGame: function (wrd) {
 		this.resetGuesses();
 		this.currentWrd = new Word(this.country[Math.floor(Math.random()* this.country.length)]);
 		this.currentWrd.getLetter();
 		this.promptUser();
 	},

 	resetGuesses: function(){
 		this.guessesRemaining = 10;
 	},

 	promptUser: function(){
 		var self = this;
 		prompt.get(['guessLet'], function(err, result){
 			console.log("You guessed: " + result.guessLet);
 			var manyGuessed = self.currentWrd.checkLetter(result.guessLet);

 			if(manyGuessed ==0) {
 				console.log("WRONG");
 				self.guessesRemaining--;
 				
 			} else {
 				console.log("CORRECT");
 					if(self.currentWrd.findWord()){
 						console.log("You won!");
 						console.log("-------------------");
 						return;
 					}
 			}

 			console.log("Guesses remaining: " + self.guessesRemaining);
 			console.log("-------------------");
 			if((self.guessesRemaining > 0) && (self.currentWrd.found == false)){
 				//self.guessesRemaining--;
 				self.promptUser();
 			}
 			else if(self.guessesRemaining ==0){
 				console.log("Game over. Correct Word ", self.currentWrd.rndWord);
 			} else {
 				console.log(self.currentWrd.wordRender());
 				self.guessesRemaining--;
 			}
 		});

 	}

};

game.startGame();