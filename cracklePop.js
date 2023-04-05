const cracklePop = (() => {
	const pop = 'pop'
	const crackle = 'crackle'
	const cracklePop = 'cracklePop'

	const divisibleBy = (dividend, divisor) =>  dividend % divisor === 0 

	const divisibleByThree = n =>  divisibleBy(n, 3) 
	const divisibleByFive = n =>  divisibleBy(n, 5) 
	const divisibleByBoth = n => divisibleByThree(n) && divisibleByFive(n) 
	const count = () => {
		const result = []

		for(let i = 1; i < 101; i++){
			if (divisibleByBoth(i)) { result.push(cracklePop) } 
			else if (divisibleByThree(i)) { result.push(crackle) } 
			else if (divisibleByFive(i)) { result.push(pop) }
			else { result.push(i) }
		}

		return result.join(" ")
	}

	return { divisibleByThree, divisibleByFive, divisibleByBoth, count }
})()

module.exports = cracklePop
