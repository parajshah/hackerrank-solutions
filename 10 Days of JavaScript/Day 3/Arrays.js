function getSecondLargest(nums) {
  // Complete the function

  // Sort
  nums = nums.sort((a, b) => {
    return b - a;
  });

  // Find second largest
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] != nums[i + 1]) {
      return nums[i + 1];
    }
  }
  // If all numbers are same, return the last element
  return nums[nums.length - 1];
}
