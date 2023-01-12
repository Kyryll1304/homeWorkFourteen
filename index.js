//Task one
function* range(start, end, step) {
  while (start < end) {
    yield start;
    start += step;
  }
}

const out = Array.from(range(20, 31, 0.5));

console.log(out);

//Task two
const arrayDollar = Array.from(range(20, 101, 10));

arrayDollar.forEach(function (element, index, array) {
  array[index] = element * 27;
});
console.log(arrayDollar);

//Task three
let l = 10;

for (let i = 1; i <= 100; i++) {
  if (Math.pow(i, 2) <= l) {
    console.log(i);
  }
}
//Task four
function testCycle(n) {
  for (let i = 2; i < n / 2; i++) if (n % i === 0) return "Складене число";
  return "Просте число";
}
console.log(testCycle(5));

//Task five
const b = 81;
const a = 3;

let p = Math.log10(b) / Math.log10(a);

if (p - Math.floor(p) == 0) {
  console.log("Так");
} else console.log("ні");
