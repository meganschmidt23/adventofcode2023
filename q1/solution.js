//Part 1
const f = require('fs')
let file = f.readFileSync('input.txt', 'utf-8');

let numbers = [];
let sum = 0;

file.split(/\r?\n/).forEach((line) => {
  let a = line.replace(/\D/g,'');
  numbers.push(a)
});

console.log(numbers)

for (let i = 0; i < numbers.length; i++) {
  let a = 0;
  if (numbers[i].length > 1){
    a = Number(numbers[i].charAt(0) + numbers[i].charAt(numbers[i].length-1))
    numbers[i] = a
  }
  else {
    numbers[i]= Number(numbers[i].toString() +numbers[i].toString());
  }
  sum = sum + numbers[i]
}
console.log(sum)
