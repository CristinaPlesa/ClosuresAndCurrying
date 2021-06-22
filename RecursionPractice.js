// Write a recursive function that reverses the order of words in a sentence. For instance, "I am a cat" should become "cat a am I".

const reverseWords = (string) => {
 
  if (!string.length) {
    return string;
  } else {
    console.log(string);
   return reverseWords(string.slice(1)).concat(string[0]);

  }
}

// "I am a cat".split(" ") = ["I", "am", "a", "cat"]
// "cat a am I"

// "fern"
// "nref"

console.log(reverseWords("I am a cat"));