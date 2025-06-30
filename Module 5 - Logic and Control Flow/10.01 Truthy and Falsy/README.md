# 📗 Module 5. Logic and Control Flow - Lesson 10.01: Truthy and Falsy

## 📝 Step 1: Explore the Topic

In JavaScript, all values are either **truthy** or **falsy** when evaluated in a boolean context.

### 🔻 Falsy Values
The following are falsy in JavaScript:

- `false`
- `0`
- `-0`
- `0n`
- `""` (empty string)
- `null`
- `undefined`
- `NaN`

📌 All other values are **truthy**.

---

## 📝 Step 2: Real-World Examples

### 🛒 Shopping Cart Check
```javascript
let cart = [];
if (cart.length) {
  console.log("Cart has items");
} else {
  console.log("Your cart is empty");
}
```

### 🔑 Username Validation
```javascript
let username = "";
if (!username) {
  console.log("Please enter your username");
}
```

### ⚙️ Fallback with `||`
```javascript
let theme = userTheme || "light";
```

### 📄 Optional Notes
```javascript
let task = { notes: "" };
task.notes && console.log("Notes:", task.notes);
```

### 🎭 Boolean Coercion
```javascript
console.log(!!0);        // false
console.log(!!"hello");  // true
```

---

## 📝 Step 3: Quiz Questions

```JavaScript
1. Which of the following is not a falsy value in JavaScript?

A. ""
B. null
C. []
D. undefined
```

```javascript
2. What will this code output?

let username2 = "";

if (username2) {
    console.log("Welcome");
} else {
    console.log("Please enter your username");
}

A. Welcome
B. Please enter your username
C. undefined
D. Error
```

```javascript
3. Which of the following expressions evaluates to true?

A. !!0
B. !!null
C. !!"JavaScript"
D. !!undefined
```

```javascript
4. What will be assigned to theme?

let userTheme2 = "";
let theme2 = userTheme2 || "light";

A. ""
B. undefined
C. "light"
D. null
```

```javascript
5. What does the !! operator do in JavaScript?

A. Converts numbers to strings
B. Forces a value to be falsy
C. Converts a value to a strict boolean
D. Negates an object
```

```javascript
6. What is the output?

let items = 0;

if (items) {
    console.log("Items in cart");
} else {
    console.log("Cart is empty");
}

A. Items in cart
B. Cart is empty
C. 0
D. undefined
```

```javascript
7. Which of the following values is truthy?

A. false
B. null
C. " "
D. NaN
```

```javascript
8. What will this code print?

let notes = "";
notes && console.log("Notes:", notes);

A. Notes:
B. Notes: ""
C. Nothing
D. undefined
```

```javascript
9. What value is returned from this expression?

false || 42;

A. false
B. true
C. 42
D. undefined
```

```javascript
/10. Which situation best describes the use of falsy values?

A. Checking if a string is exactly equal to false
B. Using default values when a variable might be undefined or empty
C. Comparing object types
D. Forcing code to throw an exception
```

```javascript
### ✅ Quiz Evaluation

1. C – Correct
   ✔️ `[]` is truthy, even though it’s empty. The rest are falsy.

2. B – Correct
   ✔️ `""` is falsy, so it prints "Please enter your username".

3. C – Correct
   ✔️ Non-empty strings are truthy, and `!!"JavaScript"` returns `true`.

4. C – Correct
   ✔️ `""` is falsy, so `"light"` is assigned as the fallback using `||`.

5. C – Correct
   ✔️ The `!!` operator coerces any value into a boolean (`true` or `false`).

6. B – Correct
   ✔️ `0` is falsy → prints "Cart is empty".

7. C – Correct
   ✔️ `" "` (a non-empty string) is **truthy**, even though it looks empty.

8. C – Correct
   ✔️ `""` is falsy → `&&` short-circuits, so nothing is printed.

9. C – Correct
   ✔️ `false || 42` returns `42` because `false` is falsy.

10. B – Correct
    ✔️ This is the core reason: to provide fallback values when something may be missing or falsy.

```

### 🏆 **Final Score: 10 / 10 – Perfect!**

You clearly understand how JavaScript evaluates truthiness and how to use it effectively in real-world logic. 🎉 Great work!

---

## ✅ Summary

- Know the falsy values.
- Use `||` for fallbacks, `&&` for optional logic.
- Use `!!` to convert any value to its boolean form.
