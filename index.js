function hasTargetSum(array, target) {
  // Algorithm:
  // 1. Create an empty set to store the numbers we encounter while iterating through the array.
  // 2. Iterate through each number in the array.
  //    - Calculate the difference between the target and the current number.
  //    - Check if the difference exists in the set. If it does, return true because we found two numbers that sum up to the target.
  //    - If the difference does not exist in the set, add the current number to the set.
  // 3. If we finish iterating through the entire array without finding a pair that sums up to the target, return false.

  const numSet = new Set();

  for (let num of array) {
    const difference = target - num;

    if (numSet.has(difference)) {
      return true;
    }

    numSet.add(num);
  }

  return false;
}

/* 
  Time Complexity: O(n), where n is the length of the input array. We iterate through each element of the array once.

  Space Complexity: O(n), where n is the length of the input array. In the worst case, the set can store all n elements of the array.
*/

/* 
  Pseudocode:
  1. Create an empty set.
  2. Iterate through each number in the array.
     - Calculate the difference between the target and the current number.
     - Check if the difference exists in the set.
       - If it does, return true.
     - Add the current number to the set.
  3. Return false, as we didn't find a pair that sums up to the target.
*/

/*
  Solution Explanation:
  - The function solves the problem by using a set to keep track of numbers encountered while iterating through the array.
  - For each number, it calculates the difference between the target and the current number.
  - If the difference already exists in the set, it means we have found a pair of numbers that sum up to the target, so the function returns true.
  - If the difference does not exist in the set, the current number is added to the set.
  - If we finish iterating through the entire array without finding a pair that sums up to the target, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
