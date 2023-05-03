package arrays_and_hashing.easy.P3_Two_sum.solutions;

class Solution {
    // O(n) time and space
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> hash = new HashMap<>();
        int[] result = new int[2];

        for (int i = 0; i < nums.length; i++) {
            int numNeeded = target - nums[i];
            if (hash.containsKey(numNeeded)) {
                result[0] = i;
                result[1] = hash.get(numNeeded);
                return result;
            }
            hash.put(nums[i], i);
        }
        return result;
    }
}