from typing import List

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        seen = []
        candidates = []
        for n in nums:
            if (n in seen):
                candidates.remove(n)
            else:
                candidates.append(n)
                seen.append(n)
        return candidates[0]

assert Solution.singleNumber(None, [2,2,1]) == 1
assert Solution.singleNumber(None, [4,1,2,1,2]) == 4
assert Solution.singleNumber(None, [1]) == 1