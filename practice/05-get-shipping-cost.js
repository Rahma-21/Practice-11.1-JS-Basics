// Task 5: getShippingCost (Easy)
// Calculate the shipping price (use switch).
//
// - "OM" costs 2, "AE" costs 5, any other country costs 15.
// - Express delivery doubles the price.

function getShippingCost(country, isExpress) {
  let multiplier =isExpress ? 2 : 1 ;
  switch(country){
    case "OM": return multiplier * 2;
    case "AE" : return multiplier * 5;
    default: return multiplier * 15;
  }
}

// Expected output:
console.log(getShippingCost("OM", false));  // 2
console.log(getShippingCost("AE", false));  // 5
console.log(getShippingCost("US", false));  // 15
console.log(getShippingCost("OM", true));   // 4
console.log(getShippingCost("US", true));   // 30
