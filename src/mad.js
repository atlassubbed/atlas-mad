const median = require("atlas-median");

module.exports = (arr, isSorted) => {
  let n = arr.length;
  // short circuit all edge cases
  if (!n) return;
  if (n === 1) return 0;
  const m = median(arr, isSorted), devs = [];
  while(n--) devs[n] = Math.abs(m-arr[n]);
  return median(devs)
}
