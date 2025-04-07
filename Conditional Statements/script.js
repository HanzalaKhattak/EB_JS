//What is a conditional statement?
//A conditional statement is a statement that is written in the "If p, then q" format, 
// where p is called the hypothesis and q is called the conclusion.


// Difference between if-else and ternary operators?
// In JavaScript, the choice between if-else statements and ternary operators depends on the complexity of the condition and the need for code readability. If-else statements are more expressive and suitable for complex conditions and multiple branches of execution, whereas ternary operators provide a more concise way to achieve the same goal, making your code easier to read and maintain 


// Write script to print numbers from 1 to 10

// for(let i = 0; i < 10; i++){
//     console.log(i);
// }

// Write a script to check whether a number is divisible by 5 using a while loop

// let randomNumber = Number(prompt("Enter a Number"));
// while(randomNumber != 5){
//     if(randomNumber %= 5){
//         console.log(`${randomNumber} is divisible by 5`)
//     }else{
//         console.log(`${randomNumber} is not divisible by 5`)
//     }
// }

// Difference between while and d0-while loop
// In JavaScript, the while loop checks the condition before executing the loop body, potentially skipping it entirely if the condition is initially false. On the other hand, the do-while loop executes the loop body at least once before checking the condition.

// Create a program to count the number of digits in a given number using a while loop
// let number = Number(prompt("Enter a number:"));
// number = Math.abs(number);
// let digitCount = 0;
// if (number === 0) {
//     digitCount = 1;
// } else {
//    while (number > 0) {
//      number = Math.floor(number / 10); 
//        digitCount++;
//    }
//}
//console.log(`The number has ${digitCount} digit(s).`);


// print numbers from 10 to 1;

// let i;
// for(i = 10; i >= 1; i--){
//     console.log(i);
// }


// let marks = prompt("Enter your marks: ");
// console.log(marks, typeof(marks));

// if(isNaN(marks)){
//     console.log("Enter a valid number", marks);
// }


// ternay operator
// let Number = 31; 
// Number % 2 === 0 ? console.log(Number, " is Even"): console.log(Number, " is Odd");



// let num1 = Number(prompt("Enter a number: "));
// let num2 = Number(prompt("Enter another number: "));
// let num3 = Number(prompt("Enter another number: "));
// if(num1 > num2 && num1 > num3){
//     console.log(num1, " is the largest number");
// }else if(num2 > num1 && num2 > num3){
//     console.log(num2, " is the largest number");    
// }else if(num3 > num1 && num3 > num2){
//     console.log(num3, " is the largest number");
// }else{
//     console.log("The numberss you entered are equal");
// }

// Program for checking the Positive, Negative or Zero number

// let num = Number(prompt("Enter a number: "));
// switch (true) {
//     case num < 0:
//         console.log(num, "is a negative number");
//         break;
//     case num > 0:
//         console.log(num, "is a positive number");
//         break;
//     case num === 0:
//         console.log(num, "is zero");
//         break;
//     default:
//         console.log("Enter a valid number");
//         break;
// }


// let marks = Number(prompt("Enter your marks: "));
// switch(true){
//     case marks >= 90:
//         console.log("A");
//         break;
//     case marks >= 80:
//         console.log("B");
//         break;  
//     case marks >= 70:
//         console.log("C");
//         break;
//     case marks >= 60:
//         console.log("D");
//         break;
//     default:
//         console.log("Fail");
//         break;
// }

// let num = 35;
// if(num % 3 === 0 && num % 5 === 0){
//     console.log(num, " is divisible both by 3 and 5");
// }else{
//     console.log(num," is not divisible both by 3 and 5");
// }


// let myEmail = "m.hanzala2022@uop.edu.pk";
// let myPass = 12345;
// let email = prompt("Enter your email: ");
// if(email === myEmail){
//     console.log("The Email is correct");
// }else{
//     console.log("The Email is incorrect");
// }

// let pass = +prompt("Enter your password: ");
// if(pass === myPass){
//     console.log("Correct password");
// }else{
//     console.log("Incorrect password");
// }




// Basic Level
// Find GPA per subject using Switch Statement and also find Grade of that student

// let obtainedMarks = Number(prompt("Enter your obtained marks: "));
// let totalMarks = 85;
// let totalGPAPerSubject = 4;
// let gpa = parseFloat((obtainedMarks / totalMarks) * totalGPAPerSubject).toFixed(2);
// gpa = Number(gpa);
// switch (true) {
//     case gpa >= 3.8:
//         console.log("Your GPA is: ", gpa, " and your Grade is A");
//         break;
//     case gpa >= 3.3:
//         console.log("Your GPA is: ", gpa, " and your Grade is B");
//         break;
//     case gpa >= 2.8:
//         console.log("Your GPA is: ", gpa, " and your Grade is C");
//         break;
//     case gpa >= 2.35:
//         console.log("Your GPA is: ", gpa, " and your Grade is D");
//         break;
//     default:
//         console.log("Your GPA is ",gpa," You are fail");
//         break;
// }
   

// Advanced Level 
// let userBill = Number(prompt("Enter your bill: "));
// let discount;
// let discountedBill;
// switch(true){
//     case userBill >= 1000 && userBill <= 5000:
//         discount = userBill * (10/100);
//         discountedBill = userBill - discount;
//         console.log("Total Bill", userBill);
//         console.log("Discount : ",discount);
//         console.log("Discounted Bill : ", discountedBill);
//         break;
    
//     case userBill >= 5001 && userBill <= 10000:
//         discount = userBill * (20/100);
//         discountedBill = userBill - discount;
//         console.log("Total Bill", userBill);
//         console.log("Discount : ",discount);
//         console.log("Discounted Bill : ", discountedBill);
//         break;

//     case userBill >= 10001 && userBill <= 20000:
//         discount = userBill * (30/100);
//         discountedBill = userBill - discount;
//         console.log("Total Bill", userBill);
//         console.log("Discount : ",discount);
//         console.log("Discounted Bill : ", discountedBill);
//         break;
// }



// Traffic Lights

// let color = prompt("Enter the color of the traffic light: ");

//     switch(color) {
//         case "red":
//             console.log("Light is Red!, Please Stop! 🛑");
//             break;
//         case "yellow":
//             console.log("Light is Yellow!, Please Wait! 🚦");
//             break;
//         case "green":
//             console.log("GO! ✅");
//             break;
//         default:
//             console.log("Invalid color! ❌");
//     }


// write a script tha ask a user for a number untill its sum is greater than 100
// let sum = 0;
// while(sum <= 100){
//     numbersToAdd = Number(prompt("Enter a Number"));
//     console.log(`The Current sum id ${sum}`);
//     sum += numbersToAdd;
    
// }
// console.log("The total sum is greater than 100");


