const sumAll = function(num1, num2) {
  let start = num1;
  let end = num2;
  let result = 0;
if (typeof num1 != "number" || typeof num2 != "number") {
  return "ERROR"
}
else if (num1 < 0 || num2 < 0) {
  return "ERROR"
}

if (num1 > num2) {
  start = num2;
  end = num1;
}

for (let i = start; i <= end; i++) {
  result = result + i;
}

return result;
};

// Do not edit below this line
module.exports = sumAll;
