nums = [2,7,11,15]
target = 9


# O(n^2)
def solve(nums, target):
	nn = range(len(nums))
	for i in nn:
		for j in nn:
			if j != i:
				if nums[i] + nums[j] == target:
					return [i,j]
				
solution = solve(nums, target)
print(solution)