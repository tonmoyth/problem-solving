// Reverse String
const reverseString = (str) => {
  let reversed = "";
  if (str === "" || str.length === 1) {
    return str;
  }
  if (str.length > 1000) {
    console.log("large string");
  }

  if (str.length > 1 && str.length <= 1000) {
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
  }
  return reversed;
};

// const result = reverseString("Tonmoy");
// console.log(result);

// FizzBuzz
const FizzBuzz = (n) => {
  if (n >= 1 && n <= 100) {
    for (let i = 1; i <= n; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log("fizzBuzz");
      } else if (i % 3 === 0) {
        console.log("fizz");
      } else if (i % 5 === 0) {
        console.log("Buzz");
      } else {
        console.log(i);
      }
    }
  } else {
    console.log("Invalid input");
    return;
  }
};

// FizzBuzz(100);

// Find the Largest Number in an Array
const findLargestNumber = (numArr) => {
  let storeMaxNum = numArr[0];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > storeMaxNum) {
      storeMaxNum = numArr[i];
    }
  }
  return storeMaxNum;
};

const findLargeResult = findLargestNumber([
  -2, 3, 4, 5, -4, 5, 6, 7, 5, 7, 8, 6,
]);
console.log(findLargeResult);
