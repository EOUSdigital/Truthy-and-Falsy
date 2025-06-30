# 📗 Module 5. Logic and Control Flow - Lesson 10.02: Truthy and Falsy - Challenge

## Step 4: Project Challenge – Truthy and Falsy

### 🎯 Challenge Overview

Build a JavaScript form validator that uses **truthy and falsy values** to simplify logic, provide fallbacks, and detect missing or invalid data.

---

### 🛠️ Project Requirements
```javascript
1. Create a validateForm(formData) function
  • formData is an object with the following fields:

{
    username: string,
    email: string,
    age: number,
    subscribed: boolean,
    comments: string (optional)
};

2. Validation Rules using Truthy/Falsy:
  • If username or email is falsy → log "Required field missing"
  • If age is 0 or undefined → log "Invalid age"
  • If comments exists (truthy) → log "Comment received"
  • If subscribed is truthy → log "User subscribed to newsletter"

3. Optional: Coerce values using !! for debugging or logging clarity

🧪 Example Input

validateForm({
    username: "alice",
    email: "",
    age: 0,
    subscribed: true,
    comments: "Nice platform!"
});

✅ Expected Output

Required field missing
Invalid age
Comment received
User subscribed to newsletter
```
---

### ☑️ Refined Pseudocode

```javascript
DEFINE FUNCTION validateForm(formData)
    IF formData.username is falsy OR formData.email is falsy THEN
        PRINT "Required field missing"

    IF formData.age is falsy THEN
        PRINT "Invalid age"

    IF formData.comments is truthy THEN
        PRINT "Comment received"

    IF formData.subscribed is truthy THEN
        PRINT "User subscribed to newsletter"

SET testData TO {
    username: "alice",
    email: "",
    age: 0,
    subscribed: true,
    comments: "Nice platform!"
};

CALL validateForm(testData)
```

---

### 🧮 JavaScript Solution

```javascript
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
}

// Example usage
validateForm({
  username: "alice",
  email: "",
  age: 0,
  subscribed: true,
  comments: "Nice platform!"
});
```

---

### ✅ Expected Output

```javascript
Required field missing
Invalid age
Comment received
User subscribed to newsletter
```
---

### 🔍 Logic Concepts Applied

- **Falsy Checks**: Used to detect missing fields or values like `""`, `0`, `null`, `undefined`
- **Truthy Checks**: Used to detect optional or enabled values like `comments` or `subscribed`
- **Boolean Coercion**: No need for verbose `if-else` blocks

---

### 🧠 Reflection Prompts

- How did using truthy/falsy simplify the logic?
- What could happen if `0` or `""` were mistakenly treated as valid?
- Where else in your code could you benefit from similar pattern simplification?

---

### 🛠 Tips

- Use `!!value` to convert to strict boolean for debugging.
- Use logical operators (`||`, `&&`) to handle defaults and conditionals.
