function countingCharacters(stringToCount) {
  console.log( stringToCount + " has " + stringToCount.length + " characters.")
};

function countingCharacters2(stringToCount, characterToFind){
  let characterCount = 0;
  for (let characterPosition = 0; characterPosition < stringToCount.length; characterPosition++) {
    if (stringToCount[characterPosition]==characterToFind){
      characterCount++;
    }
  }

  console.log("Character being looked for: " + characterToFind);
  console.log("String to search through: " + stringToCount);
  console.log("Number of times character found in string: " + characterCount);
}

function countingCharacters3(str,search){
  let count = 0;
  let numChars = search.length;
  let maxIndex = str.length - search.length;

  for (let index = 0; index < maxIndex; index++){
    let current = str.substring(index, index + numChars);
    if (current==search){
      count++;
    }
  }
  // console.log("String to search: " + str);
  // console.log("Substring to search for: " + search);
  // console.log("Times encountered: " + count);
  return count;
}
