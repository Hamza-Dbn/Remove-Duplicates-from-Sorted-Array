/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const result = [];
    let k = result.length;
    const hashtable = [];
    for (num of nums) {
        if (hashtable[num] == null) {
            hashtable[num] == true; 
            result.push(num);
        }
        else {
            continue;
        }   
    }
return k, result;
};
