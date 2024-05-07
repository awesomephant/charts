class Solution:
	def intToRoman(self, num: int) -> str:
		roman = {
			1: "I",
			4: "IV",
			5: "V",
			9: "IX",
			10: "X",
			40: "XL",
			50: "L",
			90: "XC",
			100: "C",
			400: "CD",
			500: "D",
			900: "CM",
			1000: "M",
		}

		digits = list(str(num))
		result = ""
		for i, _d in enumerate(digits):
			d = int(_d) * 10 ** (len(digits) - i - 1)
			remainder = d
			while remainder > 0:
				val = 0
				for v in roman:
					if (v > remainder):
						break
					val = v
				remainder -= val
				result += roman[val]
		return result

n = 34
print(n)
print(Solution.intToRoman(None, n))