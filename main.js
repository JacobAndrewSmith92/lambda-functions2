// 1. Create a function that logs the result of adding two numbers that were passed in as arguments.
// 2. Create another function that logs the result of subtracting two numbers that were passed in as arguments.
// 3. Invoke each function a couple times with different argument values.

function simpleAddition(num1, num2) {
    console.log(num1 + num2);

}
// Simple function that adds to params together
const add = (first, second) => console.log(first+second) // If one line of code, no curly brackets needed

simpleAddition(55, 44)
add(32342, 23536)

// cmd+D selects all the same words
// cmd+shft+L selects all the same words in the file

const subtraction = (first, second) => console.log(first-second)

 subtraction(55, 322)

 // Create another function called `calculate` that takes three arguments: two numbers and a function

 const calculate = (first, second, operationToPerform) => {
    operationToPerform(first, second)

 } 
 // A function passed to another function is called a Lambda

 calculate(500, 500, add)
 calculate(500, 500, subtraction)


