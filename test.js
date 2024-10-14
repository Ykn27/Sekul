let x = "Fizz";
let y = "Buzz";
let z = x + y;

for (i = 1; i <= 100; i++) {
  if (i % 15 == 0) {
    console.log(`${i} is ${z}`);
  } else if (i % 3 == 0) {
    console.log(`${i} is ${x}`);
  } else if (i % 5 == 0) {
    console.log(`${i} is ${y}`);
  } else {
    console.log(`${i} is ${i}`);
  }
}
