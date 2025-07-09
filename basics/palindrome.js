function checkPalindrome(num) {
  // convert the num to string
  let str = '' + num
  let i = 0
  let j = str.length - 1

  while (i <= j) {
    if (str[i] === str[j]) {
      i++
      j--
    } else {
      return false
    }
  }

  // if we complete the loop without returning false, it's a palindrome
  return true
}


console.log(checkPalindrome(1991));
console.log(checkPalindrome(1145));
console.log(checkPalindrome(199851));