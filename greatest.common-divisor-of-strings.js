/* 
# Greatest Common Divisor of Strings
For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t 
(i.e., t is concatenated with itself one or more times).
Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.
*/

console.time("time");
function gdcOfStrings(str1, str2) {
  if (str1 + str2 !== str2 + str1) "";

  let n1 = str1.length;
  let n2 = str2.length;
  while (n2 !== 0) {
    let temp = n2;
    n2 = n1 % n2;
    n1 = temp;
  }
  return str1.slice(0, n1);
}
console.timeEnd("time");

const s1 = "abcabcabc";
const s2 = "abcabc";
console.log(gdcOfStrings(s1, s2));
