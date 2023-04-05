const cp = require('./cracklePop.js') 

const Crackle = 'Crackle'
const Pop = 'Pop'
const CracklePop = 'CracklePop'

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

	 test('CracklePop', () => {
	 const  expected = [
		 "1", "2", "Crackle", "4", "Pop", "Crackle", "7", "8", "Crackle", "Pop",
		 "11", "Crackle", "13", "14", "CracklePop", "16", "17", "Crackle", "19",
		 "Pop", "Crackle", "22", "23", "Crackle", "Pop", "26", "Crackle", "28", "29",
		 "CracklePop", "31", "32", "Crackle", "34", "Pop", "Crackle", "37", "38", "Crackle",
		 "Pop", "41", "Crackle", "43", "44", "CracklePop", "46", "47", "Crackle", "49",
		 "Pop", "Crackle", "52", "53", "Crackle", "Pop", "56", "Crackle", "58", "59", 
		 "CracklePop", "61", "62", "Crackle", "64", "Pop", "Crackle", "67", "68", "Crackle",
		 "Pop", "71", "Crackle", "73", "74", "CracklePop", "76", "77", "Crackle", "79",
		 "Pop", "Crackle", "82", "83", "Crackle", "Pop", "86", "Crackle", "88", "89",
		 "CracklePop", "91", "92", "Crackle", "94", "Pop", "Crackle", "97", "98", "Crackle",
		 "Pop"]
		 .join(' ')

    result = cp.count()

		expect(result).toEqual(expected)
		})
	 
})








