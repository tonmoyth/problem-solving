// 1. Reverse String
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

// 2 FizzBuzz
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

// 3. Find the Largest Number in an Array
const findLargestNumber = (numArr) => {
  let storeMaxNum = numArr[0];
  for (let i = 0; i < numArr.length; i++) {
    if (numArr[i] > storeMaxNum) {
      storeMaxNum = numArr[i];
    }
  }
  return storeMaxNum;
};
// const findLargeResult = findLargestNumber([
//   -2, 3, 4, 5, -4, 5, 6, 7, 5, 7, 8, 6,
// ]);
// console.log(findLargeResult);

// 4 Check for Palindrome
const palindrome = (string) => {
  const normalized = string.toLowerCase();
  const reversed = normalized.split("").reverse().join("").toLowerCase();
  if (normalized === reversed) {
    return true;
  } else {
    return false;
  }
};
// const palindromeResult = palindrome("Madam");
// console.log(palindromeResult);

// 5. Sum of Array Elements
const sum = (numberArr) => {
  let total = 0;

  if (numberArr.length === 0) {
    return 0;
  }

  if (numberArr.length > 500) {
    console.log("You can only sum less than or equal to 500 elements");
    return;
  }

  for (let i = 0; i < numberArr.length; i++) {
    total += numberArr[i];
  }

  return total;
};
// const sumResult = sum([100, 400, 100]);
// console.log(sumResult);

// 6. Count Vowels
const CountVoels = (string) => {
  let count = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i])) {
      count++;
    }
  }

  return count;
};
// const countVoelsResult = CountVoels("Tonmoy Hasan");
// console.log(countVoelsResult);

// 7. Even or Odd List
const findEvenNumber = (numArr) => {
  const findEven = numArr.filter((num) => num % 2 === 0);
  return findEven;
};
// const findEvenNumberResult = findEvenNumber([3, 5, 5, 7, 7]);
// console.log(findEvenNumberResult);

// 8. Factorial Calculation
const factorialCalculation = (num) => {
  if (num < 0 || num > 12) {
    return "Invalid input";
  }
  let result = 1;

  for (let i = num; i >= 1; i--) {
    result *= i;
  }

  return result;
};
// const factorialResult = factorialCalculation(12);
// console.log(factorialResult);

// 9. Find the Minimum in an Array
const findMinimumValue = (arr) => {
  let minimumNum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < minimumNum) {
      minimumNum = arr[i];
    }
  }

  return minimumNum;
};
// const findMinimunResult = findMinimumValue([4, 5, 7, 8]);
// console.log(findMinimunResult);

//10.  Remove Duplicates from a List
const removeDuplicates = (duplicateArr) => {
  return [...new Set(duplicateArr)];
};

const removeDuplicateResult = removeDuplicates([2, 3, 2, 3, 4, 5, 4, 3]);
console.log(removeDuplicateResult);
