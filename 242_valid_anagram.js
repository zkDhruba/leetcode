var isAnagram = function (s, t) {
  const normalize = (str) =>
    str
      .replace(/[^a-zA-Z0-9]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");

  return normalize(s) === normalize(t);
};

isAnagram("anagram", "nagaram");
