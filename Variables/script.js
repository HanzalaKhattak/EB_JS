let a = 3;
let b = 7;
console.log(`The value of "a" is ${a} and the value of "b" is ${b}`);
let c = a;
console.log(c);
a = b;
console.log(a);
b = c;
console.log(b);
console.log(`After Swapping: The value of "a" is ${a} and the value of "b" is ${b}`);

// Type conversion
let f = "10";
let g = parseInt(f);
console.log(g);

console.log(true && false || true);

// Adding a String and an Integer
let x = 5;
let y ="5";
let z = x + y;
console.log(z);


// Confirm 
confirm(`Do you want to proceed?`);


// Prompt
prompt(`What is your name?`); 