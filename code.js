/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  let Index = 1;
  for (let i = 0; i < nums.length - 1; i++) {
    if(nums[i] !== nums[i+1]) {
       nums[Index] = nums[i+1];
       Index ++;
       } 
  }
  return Index;
};
