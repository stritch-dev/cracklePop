const cracklePop = (() => {
	const pop = 'Pop'
	const crackle = 'Crackle'
	const cracklePop = 'CracklePop'

	const divisibleBy = (dividend, divisor) =>  dividend % divisor === 0 

	const divisibleByThree = n =>  divisibleBy(n, 3) 
	const divisibleByFive = n =>  divisibleBy(n, 5) 
	const divisibleByBoth = n => divisibleByThree(n) && divisibleByFive(n) 
	const count = () => {
		let result = []

		for(let i = 1; i < 101; i++){
			result = 
				divisibleByBoth(i) ?  result.concat(cracklePop)  :
					divisibleByThree(i) ?  result.concat(crackle)  :
						divisibleByFive(i) ?  result.concat(pop)  :
							result.concat(i)
		}

		return result.join(" ")
	}

	return { divisibleByThree, divisibleByFive, divisibleByBoth, count }
})()

module.exports = cracklePop
