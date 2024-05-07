from typing import List

class Solution:
	def removeDuplicates(self, nums: List[int]) -> int:
		u = []
		i = 0
		while i < len(nums):
			n = nums[i]
			if (n in u):
				nums.pop(i)#
				continue
			u.append(n)
			i += 1
		return len(u)


n1 = [0,0,1,1,1,2,2,3,3,4]
l = Solution.removeDuplicates(None, n1)

assert n1 == [0,1,2,3,4]
assert l == 5