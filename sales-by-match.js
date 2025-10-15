/*
There is a large pile of socks that must be paired by color. 
Given an array of integers representing the color of each sock, 
determine how many pairs of socks with matching colors there are.

exemple: 
    input: ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
    output: 3
*/

console.time("time");
function countPairs(ar) {
  let pairs = 0;

  const items = new Set();

  for (const color of ar) {
    if (!items.has(color)) {
      items.add(color);
    } else {
      pairs++;
      items.delete(color);
    }
  }
  return pairs;
}
console.timeEnd("time");

const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(countPairs(ar));

// function sockMerchant(ar) {
//   let pairs = 0;

//   const colors = new Set();

//   for (const i in ar) {
//     if (!colors.has(ar[i])) {
//       colors.add(ar[i]);
//     } else {
//       pairs++;
//       colors.delete(ar[i]);
//     }
//   }
//   return pairs;
// }

// const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// console.log(sockMerchant(ar));
