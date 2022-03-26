// recursive approach
const fibonacci = function (n) {
	n = parseInt(n)
	if (n < 1) {
		return "OOPS"
	}
	const nums = [1, 1]
	function calcNthFibo(n) {
		const l = nums.length
		if (n <= l) {
			return nums[n - 1]
		} else {
			const nthFibo = calcNthFibo(n - 1) + calcNthFibo(n - 2)
			nums.push(nthFibo)
			return nthFibo
		}
	}
	return calcNthFibo(n)
}

// iterative approach
const fibonacci2 = function (n) {
	const nums = [1, 1]
	for (let i = 2; i < n; i++) {
		nums[i] = nums[i - 1] + nums[i - 2]
	}
	return nums[n - 1]
}

// Do not edit below this line
module.exports = fibonacci
