function reverseVowels(string) {
  const regex = /^[aeiouAEIOU]$/;

  const isVowel = (character) => regex.test(character);

  let i = 0;
  let j = string.length - 1;

  let result = string.split("");

  while (i < j) {
    const startChar = string[i];
    if (!isVowel(startChar)) {
      i++;
      continue;
    }

    const endChar = string[j];
    if (!isVowel(endChar)) {
      j--;
      continue;
    }

    result[j] = startChar;
    result[i] = endChar;
    i++;
    j--;
  }

  return result.join("");
}

console.log(reverseVowels("IceCreAm"));
