//TODO Module 5. Logic and Control Flow - Lesson 10.01: Truthy and Falsy


//TODO 📝 Step 1: Explore the Topic

//* 📌 What Are "Truthy" and "Falsy" Values?
//  In JavaScript, every value has an inherent truthiness when evaluated in a boolean context—such as an if statement.
//  • Truthy values behave like true.
//  • Falsy values behave like false.

//* 🔍 List of Falsy Values in JavaScript
//  These are the only values considered falsy:

//? Value                               Type
//  false                               Boolean
//  0                                   Number
//  -0                                  Number
//  0n                                  BigInt
//  ""                                  String
//  null                                Object
//  undefined                           Undefined
//  NaN                                 Number

//! 📌 All other values—including empty arrays [], empty objects {}, non-empty strings " " — are considered truthy.

//* 🧪 Why Does It Matter?
//  Understanding truthy and falsy values is essential for:
//  • Writing clean if conditions
//  • Using ||, &&, and ternary operators
//  • Handling default values and edge cases

//  ✅ Examples

if ("hello") {
    console.log("This is truthy");      //  ✅ Runs
}

if (0) {
    console.log("This is falsy");       //  🚫 Skipped
}

//* ⚠️ Common Pitfalls
//  • Assuming empty arrays {} or [] are falsy — they are not.
//  • Confusing null with "null" — the string "null" is truthy.
//  • Using !!value to coerce values into a boolean is common but can be misread:

!!0                                     //  false
!!'text'                                //  true


//TODO  🧩 Step 2: Real-World Examples

//* 🛒 1. Shopping Cart Check

let cart = [];

if (cart.length) {
    console.log("Cart has items");
} else {
    console.log("Your cart is empty");
}

//! ✅ Explanation: cart.length is 0 → falsy → prints "Your cart is empty".


//* 🔑 2. Login Username Validation

let username = "";

if (!username) {
    console.log("Please enter your username");
}

//! ✅ Explanation: Empty string "" is falsy → triggers the prompt.


//* ⚙️ 3. Fallback to Default Settings

let userTheme;
let theme = userTheme || "light";

//! ✅ Explanation: If userTheme is falsy (e.g., "" or null), theme becomes "light".


//* 📄 4. Optional Notes Display

let task = { notes: "" };
task.notes && console.log("Notes:", task.notes);

//! ✅ Explanation: "" is falsy → nothing is printed. If notes had text, it would be printed.


//* 🎭 5. Boolean Conversion with !!

let value = 0;
console.log(!!value);                   //  false

let value2 = "hello";
console.log(!!value2);                  //  true

//! ✅ Explanation: !! turns any value into its boolean equivalent—handy for condition checks or debugging.


//? 🧠 Why Use These Patterns?
//  • Prevent errors from undefined or null values.
//  • Handle defaults safely and cleanly.
//  • Improve readability without verbose if-else chains.


//TODO  📝 Step 3: Quiz Questions

//? 🧠 Multiple Choice Questions

//* 1. Which of the following is not a falsy value in JavaScript?
//  A. ""
//  B. null
//  C. []
//  D. undefined

//! Answer: C

//* 2. What will this code output?

let username2 = "";

if (username2) {
    console.log("Welcome");
} else {
    console.log("Please enter your username");
}

//  A. Welcome
//  B. Please enter your username
//  C. undefined
//  D. Error

//! Answer: B

//* 3. Which of the following expressions evaluates to true?
//  A. !!0
//  B. !!null
//  C. !!"JavaScript"
//  D. !!undefined

//! Answer: C

//* 4. What will be assigned to theme?

let userTheme2 = "";
let theme2 = userTheme2 || "light";

//  A. ""
//  B. undefined
//  C. "light"
//  D. null

//! Answer: C

//* 5. What does the !! operator do in JavaScript?
//  A. Converts numbers to strings
//  B. Forces a value to be falsy
//  C. Converts a value to a strict boolean
//  D. Negates an object

//! Answer: C

//* 6. What is the output?

let items = 0;

if (items) {
    console.log("Items in cart");
} else {
    console.log("Cart is empty");
}

//  A. Items in cart
//  B. Cart is empty
//  C. 0
//  D. undefined

//! Answer: B

//* 7. Which of the following values is truthy?

//  A. false
//  B. null
//  C. " "
//  D. NaN

//! Answer: C

//* 8. What will this code print?

let notes = "";
notes && console.log("Notes:", notes);

//  A. Notes:
//  B. Notes: ""
//  C. Nothing
//  D. undefined

//! Answer: C

//* 9. What value is returned from this expression?

false || 42;

//  A. false
//  B. true
//  C. 42
//  D. undefined

//! Answer: C

//* 10. Which situation best describes the use of falsy values?

//  A. Checking if a string is exactly equal to false
//  B. Using default values when a variable might be undefined or empty
//  C. Comparing object types
//  D. Forcing code to throw an exception

//! Answer: B
