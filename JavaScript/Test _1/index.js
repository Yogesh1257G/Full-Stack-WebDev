/* Create a faulty calculator using JavaScript

This faulty calculator does following:
1. It takes two numbers as input from the user
2. It perfoms wrong operations as follows:

+ ---> -
* ---> +
- ---> /
/ ---> **


It performs wrong operation 10% of the times

*/
let a = Number(prompt("Enter 1st no:"));
let b = Number(prompt("Enter 2nd no:"));
let op = prompt("Enter operator (+,-,*,/) :");
let c = 100 * Math.random();
console.log(c);
if (c > 10) {
    if (op == '+') {
        console.log(`${a} + ${b} =`, a + b);
    }
    else if (op == '-') {
        console.log(`${a} - ${b} =`, a - b);
    }
    else if (op == '*') {
        console.log(`${a} * ${b} =`, a * b);
    }
    else {
        console.log(`${a} / ${b} =`, a / b);
    }
}
else {
    if (op == '+') {
        console.log(`${a} + ${b} =`, a - b);
    }
    else if (op == '-') {
        console.log(`${a} - ${b} =`, a / b);
    }
    else if (op == '*') {
        console.log(`${a} * ${b} =`, a + b);
    }
    else {
        console.log(`${a} / ${b} =`, a ** b);
    }
}