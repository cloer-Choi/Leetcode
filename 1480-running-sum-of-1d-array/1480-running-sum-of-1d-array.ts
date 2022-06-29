// function runningSum(nums: number[]): number[] {
//     let sum = 0;
//     return nums.map(num => sum += num)
// };

function runningSum(nums: number[]): number[] {
    const result = [nums[0]];
    for(let i = 1; i < nums.length; i++){
        result[i] = result[i-1] + nums[i];
    }
    return result
};

