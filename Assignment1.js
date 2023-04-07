//Q1:
// ---------------Prompt the user to enter two numbers-------------
let Num1=+prompt("enter your first number");
let Num2=+prompt("enter your second number");

let max = Num1;
if (num2 > Num1) {
  max = Num2;
}

// ----------------Output the larger number to the console----------
console.log("The larger number is: " + max);

//Qno2:write a JavaScript conditional statement to find the sign of a number. display an alert box with the specified sign

let num = 10; //------- replace 10 with your number-------

if (num > 0)
 {
  alert("The number is positive.");
 }
 else if (num < 0) 
 {
  alert("The number is negative.");
 }
 else 
 {
  alert("The number is zero.");
 }

 //Q3:
 //----------- Prompt user for five numbers---------------
const num1 = Number(prompt("Enter the first number:"));
const num2 = Number(prompt("Enter the second number:"));
const num3 = Number(prompt("Enter the third number:"));
const num4 = Number(prompt("Enter the fourth number:"));
const num5 = Number(prompt("Enter the fifth number:"));

// ----------Find the largest number----------------------
let largest = num1;
if (num2 > largest) {
  largest = num2;
}
if (num3 > largest) {
  largest = num3;
}
if (num4 > largest) {
  largest = num4;
}
if (num5 > largest) {
  largest = num5;
}

// ----------------Display the largest number in the console--------------
console.log(`The largest number is ${largest}.`);

//Qno4:-------------------------------------------
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0)
    {
      console.log(i + " is even");
    } else {
      console.log(i + " is odd");
    }
  }

  //Qno5:
  // -----------------Define the student marks----------------------
const studentMarks = [80, 75, 90, 95, 60, 85, 50, 65];

// ----------------Calculate the average marks---------------
const totalMarks = studentMarks.reduce((acc, curr) => acc + curr, 0);
const averageMarks = totalMarks / studentMarks.length;

//--------------- Determine the grade based on the average marks--------------
let grade;
if (averageMarks >= 90 && averageMarks <= 100) {
  grade = 'A';
} else if (averageMarks >= 80 && averageMarks <= 89) {
  grade = 'B';
} else if (averageMarks >= 70 && averageMarks <= 79) {
  grade = 'C';
} else if (averageMarks >= 60 && averageMarks <= 69) {
  grade = 'D';
} else {
  grade = 'F';
}

// Output the result-------------------
console.log(`The average marks are ${averageMarks.toFixed(2)} and the grade is ${grade}.`);

//Qno6: 
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }

  //Qno:
  // --------------Set the number of rows--------------
const rows = 5;

// Use nested loops to construct the pattern
for (let i = 1; i <= rows; i++) {
  // Create an empty string to hold the pattern for this row
  let pattern = '';

  // Use another loop to construct the pattern for this row
  for (let j = 1; j <= i; j++) {
    pattern += '* ';
  }

  // Print the pattern for this row
  console.log(pattern);
}
