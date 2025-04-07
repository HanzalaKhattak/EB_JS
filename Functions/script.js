// This is a simple JavaScript program that demonstrates the use of functions, variables, and event handling.
// It includes a button that, when clicked, will show an alert message.


// const buttonClicked = () =>{
//     alert("Button clicked!");
// }

// let button = document.getElementById("btn").addEventListener("click", buttonClicked);

// This function takes a number as input and returns its string representation.
// It uses the toString() method to convert the number to a string.


// let i;
// let result;
// function tableOfAnyNumber(num) {
//     for (i = 1; i <= 10; i++){
//         result = num * i;
//         console.log(`${num} x ${i} = ${result}`);
//     }
// }

// tableOfAnyNumber(99);




// let i;
// let display = "*";
// console.log(display);
// function pyramidStructure(){
//     for(i = 1; i <= 6; i++){
//         display = display * ;
//         result = Number(display - display);
//         console.log(result);
//         }
// }

// pyramidStructure();

// let i;
// // let star = "*";
// for(i = 1; i <= 6; i++){
//     let row = "";
//     for(let j = 1; j <= i; j++){
//         row += "*";
//     }
//     console.log(row);
// }


// Write a function to calculate a square of a number
// let num = Number(prompt("Enter a Number"));
// function squareOfaNumber(){
//     console.log(`The Square of ${num} is = ${num * num}`)
// }
// squareOfaNumber();

// Write a function that takes two values and returns their output
// let a;
// let b;
// function Product(a,b){
//     let product = a * b;
//     return product;
// }
// console.log(Product(54,67));

// 3. Declare an array of colors. Add a new color to the end and remove the first color.
// let colors = ["red", "green", "blue"];
// console.log(colors);
// colors.push("yellow");
// console.log(colors);
// colors.shift();
// console.log(colors);

// 4. Create an array of numbers and find the sum of all numbers using a loop.
// let numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   sum += numbers[i];
// }
// console.log("Sum of numbers:", sum)

// 5. Create an object car with properties make, model, and year. Print each property.
// let car = {
//     make: "Toyota",
//     model: "Camry",
//     year: 2022
//   };
//   console.log("Car Make:", car.make);  
//   console.log("Car Model:", car.model);
//   console.log("Car Year:", car.year);   

// 6. Write a function isEven() that checks if a number is even or odd.
// function isEven(number) {
//     if (number % 2 === 0) {
//       return "Even";
//     } else {
//       return "Odd";
//     }
//   }
//   console.log(isEven(10));
//   console.log(isEven(7));

// 7. Create an array of student names. Use a loop to print each name.
// let studentNames = ["Shahzad", "Hanzala", "Hasnain", "Ali"];
// for (let i = 0; i < studentNames.length; i++) {
//   console.log(studentNames[i]);
// }

// 8. Write a function that takes an array of numbers and returns the largest number.
// function findLargestNumber(arr) {
//     let largest = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//       if (arr[i] > largest) {
//         largest = arr[i];
//       }
//     }
//     return largest;
//   }
// let largestNumber = [15, 3, 28, 9, 42, 11];
// console.log(largestNumber)
// console.log("Largest number:", findLargestNumber(largestNumber));

// 9. Create an object person with properties firstName and lastName. Write a function to display the full name.
// let person = {
//     firstName: "Hanzala",
//     lastName: "Dawood"
//   };
  
//   function displayFullName() {
//     return person.firstName + " " + person.lastName;
//   }
//   console.log("Full Name:", displayFullName(person));

// 10. Write a program to reverse the elements of an array without using any built-in methods.
// function reverseArray(arr) { 
//     let left = 0;
//     let right = arr.length - 1;
//     while (left < right) {
//       let temp = arr[left];
//       arr[left] = arr[right];
//       arr[right] = temp;
//       left++;
//       right--;
//     }
//     return arr;
//   }
//   let originalArray = [10, 20, 30, 40, 50];
//   console.log(`Original Array : ${originalArray}`)
//   let reversedArray = reverseArray(originalArray);
//   console.log("Reversed Array:", reversedArray);