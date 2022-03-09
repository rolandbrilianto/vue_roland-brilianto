// No 3
const foo = ["Budi", "Sita", "Ayu"];
const [a, b, c] = foo;
console.log(a);
console.log(b);
console.log(c);

//No 4
let bdays = ["10-17", "05-19", "20-19"];
let i = 0;
for (i; i < bdays.length; i++) {
  bdays[i] = bdays[i].replace("-", "/");
}
console.log(bdays);

//No 5
let value = [1, 2, 3, 4, 5, 6];
const multiple = value.map((x) => x * 2);
console.log(multiple);

//No 6
let array = [1.5, 2.56, 5.1, 12.33];

let l = 0;
for (l; l < array.length; l++) {
  array[l] = Math.round(array[l]);
}
console.log(array);
