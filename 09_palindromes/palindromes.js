const palindromes = function (str) {
	const letters = str.replace(/[., '"!?]/g, "").toLowerCase()
	const midpoint = Math.floor(letters.length / 2)
	for (let i = 0; i < midpoint; i++) {
		const front = letters.charAt(i)
		const back = letters.charAt(letters.length - i - 1)
		console.log(front, back)
		if (front !== back) return false
	}
	return true
}
// Do not edit below this line
module.exports = palindromes
