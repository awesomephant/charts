class Solution:
	def isValid(self, s: str) -> bool:
		bo = ["(", "{", "["]
		bc = [")", "}", "]"]

		opening = []

		for c in list(s):
			if c in bo:
				opening.append(bo.index(c))
			else:
				if len(opening) > 0 and bc.index(c) == opening[-1]:
					opening.pop(-1)
				else:
					return False
		return len(opening) == 0
	
assert Solution.isValid(None, "()") == True
assert Solution.isValid(None, "()[]{}") == True
assert Solution.isValid(None, "(]") == False
assert Solution.isValid(None, "([)]") == False
assert Solution.isValid(None, "]") == False
print(Solution.isValid(None, "([)]"))