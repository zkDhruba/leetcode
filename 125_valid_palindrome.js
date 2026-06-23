var isPalindrome = function (s) {
  const replacedText = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  const reversedText = replacedText.split("").reverse().join("");
  if (replacedText === reversedText) {
    return true;
  } else {
    return false;
  }
};

isPalindrome("A man, a plan, a canal: Panam");
