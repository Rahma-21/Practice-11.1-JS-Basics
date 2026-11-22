// Task 10: getCartSummary (Medium)
// Summarize a shopping cart.
//
// - cart is an array of { name, price, qty }.
// - Return { count, total }: count = all quantities added up, total = sum of price * qty.

function getCartSummary(cart) {
  // your code
}

// Expected output:
console.log(getCartSummary([{ name: "Pen", price: 2, qty: 3 }, { name: "Book", price: 10, qty: 1 }]));  // { count: 4, total: 16 }
console.log(getCartSummary([{ name: "Mug", price: 7, qty: 2 }]));                                       // { count: 2, total: 14 }
console.log(getCartSummary([]));                                                                        // { count: 0, total: 0 }
