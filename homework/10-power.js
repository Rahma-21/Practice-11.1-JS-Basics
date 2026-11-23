// Task 10: power (Easy)
// Calculate base to the power of exponent using a loop (do not use ** or Math.pow).
//
// - power(2, 3) = 2 * 2 * 2 = 8.
// - Any number to the power of 0 is 1.

function power(base, exponent) {
  let cal=base;
  for(let i=1; i<=base;i++){
   switch(exponent){
    case 0 : return 1;
    case 1 : return base;
    case 2 : return base * base;
    case 3 : return base * base * base;
    case 4 : return base * base * base * base;
    case 5 : return base * base * base * base * base;
    case 6 : return base * base * base * base * base * base;
    case 7 : return base * base * base * base * base  * base * base;
    case 8 : return base * base * base * base * base  * base * base * base;
    case 9 : return base * base * base * base * base  * base * base * base * base;
    case 10 : return base * base * base * base * base  * base * base * base * base * base;
   }
   

  }
}

// Expected output:
console.log(power(2, 3));   // 8
console.log(power(5, 0));   // 1
console.log(power(3, 4));   // 81
console.log(power(10, 2));  // 100
console.log(power(7, 1));   // 7
