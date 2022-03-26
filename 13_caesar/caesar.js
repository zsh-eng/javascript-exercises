const caesar = function (string, n) {
	function modulo(a, b) {
		return ((a % b) + b) % b
	}
	function stringToCodes(string) {
		return string.split("").map((c) => c.charCodeAt(0))
	}
	function shiftLetter(code) {
		const [upperFirst, upperLast, lowerFirst, lowerLast] = stringToCodes("AZaz")

		if (code >= upperFirst && code <= upperLast) {
			return modulo(code - upperFirst + n, 26) + upperFirst
		} else if (code >= lowerFirst && code <= lowerLast) {
			return modulo(code - lowerFirst + n, 26) + lowerFirst
		}
		return code
	}

	const charCodesShifted = stringToCodes(string).map((code) =>
		shiftLetter(code)
	)
	console.log(charCodesShifted)
	return charCodesShifted.reduce(
		(word, code) => word + String.fromCharCode(code),
		""
	)
}

// Do not edit below this line
module.exports = caesar
