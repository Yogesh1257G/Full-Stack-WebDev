/* For using prompt() run code in browser using "index.html" */
let a = Number(prompt("Enter a number:"));
let b = 1;
if (a==0) {
    console.log(b);
}
for (let i = a; i > 1; i--) {
    b = b*i;
}
alert(`Factorial of ${a} is ${b}`);
function factorial(number){
   let arr = Array.from(Array(number+1).keys())
   let c = arr.slice(1,).reduce((a, b)=> a*b )
   return c
}
