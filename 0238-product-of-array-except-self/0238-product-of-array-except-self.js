/**
 * @param {number[]} nums
 * @return {number[]}
 */
    var productExceptSelf = function(nums) {
        let len = nums.length;
        let result = [];
        let multiplier = 1;
        for(let i=0; i<len; i++) {
            result[i] = multiplier; // right array
            multiplier *= nums[i];
        }
        multiplier = 1;//resetting
        for(let i=len-1; i>=0; i--) {
            result[i] *= multiplier; // right array * left array
            multiplier *= nums[i];
        }
        return result;
    };