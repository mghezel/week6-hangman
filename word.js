var Letter = require("./letter");

// var words = ["Spain", "England","Mexico", "Germany", "Poland", "Japan", "Egypt", "India", "China",
//  "Russia", "France", "Peru", "Kenya", "Sudan", "Canada", "Irland", "Austria", "Greece", 
//  "Malysia", "Syria"];

//  var rndWord = words[Math.floor(Math.random() * words.length)];

//  console.log(rndWord);

 var Word = function(rndWord) {
  // this.cast will hold all of our CastMember objects
  this.arr = [];
  this.rndWord = rndWord;
  this.found = false; 

};

Word.prototype.getLength = function() {
    return this.rndWord.length;
};

Word.prototype.getLetter = function() {
    for (var i=0; i < this.getLength(); i++) {
      this.arr.push( new Letter(this.rndWord[i]));
    }
  };

Word.prototype.findWord = function() {
    this.found = this.arr.every(function(currLetter) {
      return currLetter.appear;
    });
    return this.found;
  };

Word.prototype.checkLetter = function(guessLetter) {
    var toReturn = 0;

    for (var i = 0; i < this.arr.length; i++) {
      if (this.arr[i].charac == guessLetter){
        this.arr[i].appear = true;
        toReturn++;
      }
    }
    return toReturn;
  };

Word.prototype.wordRender = function() {
    var string = '';
    for (var i=0; i < this.arr.length; i++){
      string += this.arr[i].letterRender();
    }
    return string;
  };

Word.prototype.printUnderscore = function() {
	for(var i=0; i<this.getLength(); i++){
		this.arr.push("-");				
	}
	this.arr = this.arr + "";
	this.arr = this.arr.replace(/,/g, '');
	console.log(this.arr);
};

//var newWord = new Word(rndWord);
//newWord.printUnderscore();
module.exports = Word;