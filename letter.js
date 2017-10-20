//var Word = require("./Word");

// var Letter = function(singleLetter) {
  
//   this.singleLetter = singleLetter;

//   this.indexOfLetter = function(){
//   	return Word.indexOf(this.singleLetter);

//   };

//   this.addLetter = function(this.singleLetter) {
//   	if(this.indexOfLetter() != -1){
//     	this.arr.push(new Word(g, n, r));
// 	}
//   };
// };

var Letter = function(let){
  this.charac = let;
  this.appear = false;
  this.letterRender = function(){
    return !(this.appear) ? "_" : this.charac;
  };
};

module.exports = Letter;