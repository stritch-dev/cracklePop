const cp = require('./cracklePop.js') 

const crackle = 'crackle'
const pop = 'pop'
const cracklePop = 'cracklePop'

describe("Divides by Three " , () => {
		test("True if a number is divisble by three with no remainder" , () => {
				expect(cp.divisibleByThree(3)).toBe(true)
				expect(cp.divisibleByThree(96)).toBe(true)
				expect(cp.divisibleByThree(333)).toBe(true)
				expect(cp.divisibleByThree(30)).toBe(true)
				})
		test("Returns false if it's not divisble by three" , () => {
				expect(cp.divisibleByThree(1)).toBe(false)
				expect(cp.divisibleByThree(2)).toBe(false)
				expect(cp.divisibleByThree(14)).toBe(false)
				expect(cp.divisibleByThree(112)).toBe(false)
				})
		})

describe("Divides by 5 " , () => {
		test("True if a number is divisble by five with no remainder" , () => {
				expect(cp.divisibleByFive(5)).toBe(true)
				expect(cp.divisibleByFive(10)).toBe(true)
				expect(cp.divisibleByFive(100)).toBe(true)
				expect(cp.divisibleByFive(30)).toBe(true)
				})
		test("False for numbers not divisble by five" , () => {
				expect(cp.divisibleByFive(1)).toBe(false)
				expect(cp.divisibleByFive(2)).toBe(false)
				expect(cp.divisibleByFive(14)).toBe(false)
				expect(cp.divisibleByFive(112)).toBe(false)
				})
		})

describe("Divides by both three and five" , () => {
		test("True for number divisible by both" , () => {
				expect(cp.divisibleByBoth(15)).toBe(true)
				expect(cp.divisibleByBoth(30)).toBe(true)
				expect(cp.divisibleByBoth(45)).toBe(true)
				})
		test("False for number that are not divisible by both" , () => {
				expect(cp.divisibleByBoth(1)).toBe(false)
				expect(cp.divisibleByBoth(3)).toBe(false)
				expect(cp.divisibleByBoth(5)).toBe(false)
				expect(cp.divisibleByBoth(11)).toBe(false)
				})
		})

describe("Produces the expected Crackle! Pop! sequence" , () => {

	 test('cracklePop', () => {
	 const  expected = [
		 "1", "2", "crackle", "4", "pop", "crackle", "7", "8", "crackle", "pop",
		 "11", "crackle", "13", "14", "cracklePop", "16", "17", "crackle", "19",
		 "pop", "crackle", "22", "23", "crackle", "pop", "26", "crackle", "28", "29",
		 "cracklePop", "31", "32", "crackle", "34", "pop", "crackle", "37", "38", "crackle",
		 "pop", "41", "crackle", "43", "44", "cracklePop", "46", "47", "crackle", "49",
		 "pop", "crackle", "52", "53", "crackle", "pop", "56", "crackle", "58", "59", 
		 "cracklePop", "61", "62", "crackle", "64", "pop", "crackle", "67", "68", "crackle",
		 "pop", "71", "crackle", "73", "74", "cracklePop", "76", "77", "crackle", "79",
		 "pop", "crackle", "82", "83", "crackle", "pop", "86", "crackle", "88", "89",
		 "cracklePop", "91", "92", "crackle", "94", "pop", "crackle", "97", "98", "crackle",
		 "pop"]
		 .join(' ')

    result = cp.count(1,100)

		expect(result).toEqual(expected)
		})
	 
})








