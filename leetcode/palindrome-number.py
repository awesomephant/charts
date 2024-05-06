class Solution:
    def isPalindrome(self, x: int) -> bool:
        s = str(x)
        return s == s[::-1]

assert Solution.isPalindrome(None, 121) == True
assert Solution.isPalindrome(None, -121) == False
assert Solution.isPalindrome(None, 10) == False