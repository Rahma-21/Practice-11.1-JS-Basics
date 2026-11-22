// Task 13: isBalanced (Bonus (optional, hard))
// Check that every bracket is closed in the right order.
//
// - Brackets: (), [] and {}. Ignore all other characters.
// - "([)]" and ")(" are not balanced.
// - Hint: push opening brackets onto an array, pop when you see a closing one.

function isBalanced(text) {
  // your code
}

// Expected output:
console.log(isBalanced("()"));         // true
console.log(isBalanced("{[()]}"));     // true
console.log(isBalanced("a(b[c]d)e"));  // true
console.log(isBalanced("(]"));         // false
console.log(isBalanced("([)]"));       // false
console.log(isBalanced("(("));         // false
console.log(isBalanced(")("));         // false
console.log(isBalanced(""));           // true
