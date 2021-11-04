function palindrome(str) {
  str = str.replaceAll(/\W|_/g, "").toLowerCase()
  for(let i=0, j=str.length-1; i<(str.length-1)/2; i++){
    if(str[i] != str[j]) return false
    j--
  }
  return true;
}

/*
Return true if the given string is a palindrome. Otherwise, return false.
A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.
Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.
*/

palindrome("eye")
palindrome("eye")
palindrome("_eye")
palindrome("race car")
palindrome("not a palindrome")
palindrome("A man, a plan, a canal. Panama")
palindrome("never odd or even")
palindrome("nope")
palindrome("almostomla")
palindrome("My age is 0, 0 si ega ym.")
palindrome("1 eye for of 1 eye.")
palindrome("0_0 (: /-\ :) 0-0")
palindrome("five|\_/|four")