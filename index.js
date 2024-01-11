function hasTargetSum(array, target) {
  // Write your algorithm here
  if(array.length === 0 && typeof array !== "number"){
    return "input cannot be empty and write numbers only"
  }

   for(let i = 0; i < array.length; i++){
        for(let j = i + 1; j < array.length; j++){
          if (array[i] + array[j] === target){
            return true;
          }
        }
   }

   return false;

}

     let result = hasTargetSum([22, 19, 4, 6, 30], 34)
     console.log(result);
/* 
  Write the Big O time complexity of your function here
  -----------------------------------------------------------------

  time complexity:  o(n^2)
*/

/* 
  Add your pseudocode here
  --------------------------------------------------------

  input the array and target to be checked 
  if input is empty and its not numbers 
   return "input cannot be empty and write numbers only"

   loop through the numbers and look for 2 numbers with a 
   total of of the target and return true.

   if there's none
     return false
*/

/*
  Add written explanation of your solution here
  -----------------------------------------------------------------------

  the function takes in an array of numbers and a target as arguements.

  it checks if the array type is numbers and the there's actually an array.

  it itterates through the array to look for 2 numbers that make up a total of 

  the target.

  if there are any, it returns true, else false.

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

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([9, 5, 6, 4, 10, 4], 16));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("")

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([2, 9, 3], 8));
}

module.exports = hasTargetSum;
