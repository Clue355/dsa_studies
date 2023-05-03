"""
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
"""

def two_sum(nums, target):
    dict_nums = {}

    for idx, num in enumerate(nums):
        dict_nums[num] = idx
    for idx, num in enumerate(nums):
        if target - num in dict_nums and idx != dict_nums[target-num]:
            return [idx, dict_nums[target-num]]

print(two_sum([2, 7, 11, 15], 9)) # [0,1]
print(two_sum([3,2,4], 6)) #[1,2]
# O(n) time | O(n) space
