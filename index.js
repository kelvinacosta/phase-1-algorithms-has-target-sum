function hasTargetSum(array, target) {
  // Write your algorithm here
  for(let i =0; i<array.length; i++){
    for(let j = i + 1; j < array.length; j++){
      const sum = array[i] + array[j]

      if(sum === target)
      return true 

    }

  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  quadratic time
*/

/* 
  Add your pseudocode here
  iterate the array to get every number inside 
  then get the sum of each number that adds up to the target and then
  compare those numbers
*/

/*
  Add written explanation of your solution here
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
