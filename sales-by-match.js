/*
There is a large pile of socks that must be paired by color. 
Given an array of integers representing the color of each sock, 
determine how many pairs of socks with matching colors there are.

exemple: 
    input: ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
    output: 3
*/

console.time("time1");
function countPairs(array) {
  let pairs = 0;
  const setSocks = new Set();

  for (const sock of socks) {
    !setSocks.has(sock) === true
      ? setSocks.add(sock)
      : (pairs++, setSocks.delete(sock));
  }

  return pairs;
}
console.timeEnd("time1");

const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(countPairs(socks));
