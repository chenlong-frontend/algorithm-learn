/**
 * https://leetcode-cn.com/problems/two-sum/
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 自己实现版本
 */
var twoSum = function(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === target - nums[j]) {
        return [i, j]
      }
    }
  }
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 看解答后版本
 */
var twoSum1 = function(nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num = target - nums[i]
    if (map.has(num)) return [map.get(num), i]
    map.set(nums[i], i)
  }
}