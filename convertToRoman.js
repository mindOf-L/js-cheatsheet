function convertToRoman(num) {
  let roman = "";
  let tempNum = 0;
  const romanObj = {
    1000: "M",
    900: "CM", 500: "D", 400: "CD", 100: "C",
    90: "XC", 50: "L", 40: "XL", 10: "X",
    9: "IX", 5: "V", 4: "IV", 1: "I"
  };
  while (num > 0) {
    if (num >= 1) tempNum = 1
    if (num >= 4) tempNum = 4
    if (num >= 5) tempNum = 5
    if (num >= 9) tempNum = 9
    if (num >= 10) tempNum = 10
    if (num >= 40) tempNum = 40
    if (num >= 50) tempNum = 50
    if (num >= 90) tempNum = 90
    if (num >= 100) tempNum = 100
    if (num >= 400) tempNum = 400
    if (num >= 500) tempNum = 500
    if (num >= 900) tempNum = 900
    if (num >= 1000) tempNum = 1000
    roman += romanObj[tempNum]
    num -= tempNum
  }
  return roman;
}

convertToRoman(36);
