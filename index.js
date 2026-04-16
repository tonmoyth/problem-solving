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

const result = reverseString("Tonmoy");
console.log(result);
