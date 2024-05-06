class Solution:
	def romanToInt(self, s: str) -> int:
		roman = {
			"I": 1,
			"V": 5,
			"X": 10,
			"L": 50,
			"C": 100,
			"D": 500,
			"M": 1000,
			"IV": 4,
			"IX": 9,
			"XL": 40,
			"XC": 90,
			"CD": 400,
			"CM": 900
		}
		digits = list(s)
		result = 0
		i = 0
		nn = len(digits)
		while i < nn:
			d = digits[i]
			pair = d + digits[i + 1] if i < nn - 1  else None
			
			if pair in roman:
				i += 2
				result += roman[pair]
				continue
			i += 1
			result += roman[d]
		return result

assert Solution.romanToInt(None, s="III") == 3
assert Solution.romanToInt(None, s="LVIII") == 58
assert Solution.romanToInt(None, s="MCMXCIV") == 1994
