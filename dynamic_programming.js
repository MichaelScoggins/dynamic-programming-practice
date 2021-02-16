// const fib = (n, memo = {}) => {
//   if (n in memo) return memo[n];
//   if (n <= 2) return 1;

//   memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
//   return memo[n];
// };

// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));
// console.log(fib(6));
// console.log(fib(50));

// const gridTraveler = (m, n) => {
//   if (m === 1 && n === 1) return 1;
//   if (m === 0 || n === 0) return 0;

//   return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
// };

// console.log(gridTraveler(1, 1)); // 1
// console.log(gridTraveler(2, 3)); // 3
// console.log(gridTraveler(3, 2)); // 3
// console.log(gridTraveler(3, 3)); // 6
// console.log(gridTraveler(18, 18)); // 2333606220

const gridTraveler = (m, n, memo = {}) => {
  const key = m + "," + n;

  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;

  memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo);
  return memo[key];
};

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18)); // 2333606220

const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;

  for (let num of numbers) {
    console.log(num);
  }
};

console.log(canSum(7, [2, 3])); // true
// console.log(canSum(7, [5, 3, 4, 7])); // true
// console.log(canSum(7, [2, 4])); // false
// console.log(canSum(8, [2, 3, 5])); // true
// console.log(canSum(300, [7, 14])); // false
