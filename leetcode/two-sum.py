def solve(nums, target) -> int:
	s = {}
	for i, n in enumerate(nums):
		match = target - n
		if (match in s):
			return [i, s[match]]
		else:
			s[n] = i

assert solve([2,7,11,15], 9) == [0, 1] or [1, 0]
assert solve([3,2,4], 6) == [1, 2] or [2, 1]
assert solve([3,3], 6) == [0, 1] or [1, 0]