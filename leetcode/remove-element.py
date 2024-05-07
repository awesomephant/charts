from typing import List

class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        i = 0
        while i < len(nums):
            if (nums[i] == val):
                nums.pop(i)
                continue
            i += 1
        return len(nums)

assert Solution.removeElement(None, [3,2,2,3], 3) == 2
assert Solution.removeElement(None, [0,1,2,2,3,0,4,2], 2) == 5