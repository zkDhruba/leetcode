s = "A man, a plan, a canal: Panama";

var isPalindrome = function (s) {
  const removeNonAlphNum = s.replace(/[^a-z0-9]/gi, "");
  const lowercase = removeNonAlphNum.toLowerCase();
  const reverse = lowercase.reverse();

  console.log(lowercase, reverse);
  //   const lowercase = removeNonAlphNum.lowercase();
  //   console.log(lowercase);
};

isPalindrome(s);
