// rows = letters.length
// coloumns = letter[0].length;

// PSEUDO CODE:
// 1. rows = loop through each row, join seperate letters to form word, if word is found return true
// 2. use matrix function from previous pair programming assignemnt, to turn coloumns into rows
// 3. coloumns = use provided function but this time use it on the new matrix (that's been provided from matrix function) that allows us to loop through rows (which will have the values of the coloumns)

const wordSearch = (letters, word) => {
  let horJoined = "";
  let vertJoined = "";
  let vertical = [];
  let vertMatch = 0;
  let horMatch = 0;
  
  for (let i = 0; i < letters[0].length; i++) {
    for (let j = 0; j < letters.length; j++) {
      vertical.push(letters[j][i]);
    }
    vertJoined = vertical.join('');
    if (vertJoined.includes(word)) {
      return true;
    } else {
      vertMatch = false;
    }
    vertical = [];
  }
  for (let k = 0; k < letters.length; k++) {
    horJoined = letters[k].join("");
    if (horJoined.includes(word)) {
      return true;
    } else {
      horMatch = false;
    }
  }
  if (vertMatch === false && horMatch === false) {
    return false;
  }
};

module.exports = wordSearch;