//TODO 📗 Module 5. Logic and Control Flow - Lesson 10.02: Truthy and Falsy - Challenge


//TODO 📝 Step 4: Form Validator: Truthy/Falsy Edition

//* 🎯 Challenge Objective
//  Build a small form validation function that checks user input using truthy and falsy values to simplify condition checks and ensure graceful fallbacks.

//* 🛠️ Project Requirements
//? 1. Create a validateForm(formData) function
//  • formData is an object with the following fields:

/*
{
    username: string,
    email: string,
    age: number,
    subscribed: boolean,
    comments: string (optional)
};
*/

//? 2. Validation Rules using Truthy/Falsy:
//  • If username or email is falsy → log "Required field missing"
//  • If age is 0 or undefined → log "Invalid age"
//  • If comments exists (truthy) → log "Comment received"
//  • If subscribed is truthy → log "User subscribed to newsletter"

//? 3. Optional: Coerce values using !! for debugging or logging clarity

//* 🧪 Example Input

/*
validateForm({
    username: "alice",
    email: "",
    age: 0,
    subscribed: true,
    comments: "Nice platform!"
});
*/

//* ✅ Expected Output

//  Required field missing
//  Invalid age
//  Comment received
//  User subscribed to newsletter

//* 🧠 Reflection Prompts
//  • How did truthy/falsy logic simplify the validation flow?
//  • What might go wrong if values like 0, "", or null aren't handled properly?


//? ☑️ Pseudocode

//  DEFINE FUNCTION validateForm(formData)
//      IF formData.username is falsy OR formData.email is falsy THEN
//          PRINT "Required field missing"

//      IF formData.age is falsy THEN
//          PRINT "Invalid age"

//      IF formData.comments is truthy THEN
//          PRINT "Comment received"

//      IF formData.subscribed is truthy THEN
//          PRINT "User subscribed to newsletter"

//  SET testData TO {
//      username: "alice",
//      email: "",
//      age: 0,
//      subscribed: true,
//      comments: "Nice platform!"
// }

//  CALL validateForm(testData)


//! Solution

function validateForm(formData) {
    if (!formData.username || !formData.email) {
        console.log("Required field missing");
    }

    if (!formData.age) {
        console.log("Invalid age");
    }

    if (formData.comments) {
        console.log("Comment received");
    }

    if (formData.subscribed) {
        console.log("User subscribed to newsletter");
    }
};

const testData = {
    username: "alice",
    email: "",
    age: 0,
    subscribed: true,
    comments: "Nice platform!"
};

validateForm(testData);







