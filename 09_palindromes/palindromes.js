const palindromes = function (string) {
 let lowercase = string
 .toLowerCase()   // Convert to lowercase
 .split('') // Split by one or more spaces
 .filter(character => character !== ' '); // Filter out spaces


};

// Do not edit below this line
module.exports = palindromes;
