const removeFromArray = function(array, ...args) {
  let result = [];

  array.forEach((num) => {
    if (!args.includes(num)) {
      result.push(num);
    }
  });

  return result;
};

// Do not edit below this line
module.exports = removeFromArray;
