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
//Pt 2
//Part 2
const f = require('fs')
let file = f.readFileSync('input.txt', 'utf-8');

let numbers = [];
let sum = 0;
file = file.replaceAll(/one/g, 'one1one')
file = file.replaceAll(/two/g, 'two2two')
file = file.replaceAll(/three/g, 'three3three')
file = file.replaceAll(/four/g, 'four4four')
file = file.replaceAll(/five/g, 'five5five')
file = file.replaceAll(/six/g, 'six6six')
file = file.replaceAll(/seven/g, 'seven7seven')
file = file.replaceAll(/eight/g, 'eight8eight')
file = file.replaceAll(/nine/g, 'nine9nine')

console.log(file)                                         
file.split(/\r?\n/).forEach((line) => {
  console.log(line)
  let a = line.replace(/\D/g,'');
  console.log(a)
  numbers.push(a)
});

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
console.log(numbers)
console.log(sum)
