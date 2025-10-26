const candies = [5, 2, 5, 3, 6, 7, 8, 1, 2];
const extraCandies = 5;

function kidsWithCandies(candies, extraCandies) {
  const max = Math.max(...candies);

  const result = [];

  for (const c of candies) {
    c + extraCandies >= max ? result.push(true) : result.push(false);
  }

  return result;
}

console.log(kidsWithCandies(candies, extraCandies));
