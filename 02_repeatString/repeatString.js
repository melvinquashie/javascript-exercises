const repeatString = function(phrase, repeat) {

  if (repeat < 0){
    return "ERROR";
  }
  else{
    let word = "";

    for (var i = 0; i < repeat; i++) {
      word += phrase;
    }
    return word;
  }
};

// Do not edit below this line
module.exports = repeatString;
