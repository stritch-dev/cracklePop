# cracklePop

## Purpose
The application prints the numbers from one to one hundred  to the console.
But, 
 *if a number is divisible by three and not five then instead of the number,
"Crackle" is printed.
 *if a number is divisible by five and not by three then "Pop" is printed.
 *if a number is divisible by both three and five, then CracklePop is printed.

 This is also know as FizzBuzz. 


 ## Install
 First, clone the repository, then run `npm install`
 ```
 git clone https://github.com/stritch-dev/cracklePop.git && cd cracklePop && npm install

 ```

 ## Test
 ```
 npm test
 ```

 ## Run
 ```
 npm run cracklepop
 ```
 The expected output to the console is one line of text containing the sequence.

```
1 2 Crackle 4 Pop Crackle 7 8 Crackle Pop 11 Crackle 13 14 CracklePop 16 17 Crackle 19 Pop Crackle 22 23 Crackle Pop 26 Crackle 28 29 CracklePop 31 32 Crackle 34 Pop Crackle 37 38 Crackle Pop 41 Crackle 43 44 CracklePop 46 47 Crackle 49 Pop Crackle 52 53 Crackle Pop 56 Crackle 58 59 CracklePop 61 62 Crackle 64 Pop Crackle 67 68 Crackle Pop 71 Crackle 73 74 CracklePop 76 77 Crackle 79 Pop Crackle 82 83 Crackle Pop 86 Crackle 88 89 CracklePop 91 92 Crackle 94 Pop Crackle 97 98 Crackle Pop
```

  

## Just for fun
This algorithm can be written in fewer lines than I have used. I wanted the code to be easy to read and understand. Granted CracklePop/FizzBuzz is not a complicated problem, I chose to use whole words where possible. After implementation, I wanted to see a more concise version.  I turned to OpenAI's AI (https://chat.openai.com/chat). I've recently discovered that Chat GPT is yet another way to learn about programming. I prompted the AI system to implement FizzBuzz without any if statements or the ternary operator. While I didn't come up with this slick solution, a part of me figured/wondered if there was a mathematical way to solve the problem. This is what the AI presented 
'''
for (let i = 1; i <= 100; i++) {
  let output = "";
  output += "Fizz".repeat(i % 3 === 0 && 1);
  output += "Buzz".repeat(i % 5 === 0 && 1);
  console.log(output || i);
}
'''

If you are interested in the complete interaction I had with the system it is HERE.


## Thanks
Thanks for checking out my code.
