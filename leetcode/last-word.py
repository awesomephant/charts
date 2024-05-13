class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        words = s.strip().split(" ")
        return len(words[-1])
    
print(Solution.lengthOfLastWord(None, "Hello World"))
print(Solution.lengthOfLastWord(None, "   fly me   to   the moon  "))