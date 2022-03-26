const findTheOldest = function (people) {
	function checkAge(person) {
		if ("yearOfDeath" in person) {
			return person.yearOfDeath - person.yearOfBirth
		} else {
			return new Date().getFullYear() - person.yearOfBirth
		}
	}

	return people.reduce(
		(oldest, current) =>
			checkAge(oldest) > checkAge(current) ? oldest : current,
		{ yearOfBirth: 2022 }
	)
}

// Do not edit below this line
module.exports = findTheOldest
