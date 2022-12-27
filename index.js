const arr = [5, 66, 'pool', 7, 99, null, { name: 'Sam' }, [], true, 78];
const numbers = arr.filter(item => typeof item === 'number');
function sum(numbers) {
  let s = 0;
  for (let i = 0; i < numbers.length; i++) {
    s += numbers[i];
  }
  return (s / numbers.length);
}
console.log(sum(numbers));

let x = prompt('x');
let y = prompt('y');
let znak = prompt('znak');

const calc = (x, y, znak) => {
  switch (znak) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '/':
      return x / y;
    case '*':
      return x * y;
    case '%':
      return x % y;
    case '^':
      return x ** y;
    default: console.log('sorry');
  }
};
console.log(calc(+x, +y, znak));

let M = prompt('Длина первого масива?');
let array = [];
let k = [];

function double() {
  for (let i = 0; i < M; i++) {
    array[i] = prompt('элемент масива?');
  }
  let N = prompt('Сколько будет подмасивов?');
  for (let i = 0; i < M; i++) {
    k[i] = prompt('элемент второго масива?');
  }
  for (let i = 0; i < N; i++) {
    array.push(k);
  }
  console.log(array);
}
double();

let l = [];
let str = prompt('Що буде в рядку?');
let elemDel = prompt('скільки елементів треба прибрати?');

for (i = 0; i < elemDel; i++) {
  l[i] = prompt('Введіть елемент');
}

function show(str, l) {
  for (i = 0; i < l.length; i++) {
    console.log(l[i]);
    str = str.split(`${l[i]}`).join('');
  }
  console.log(str);
}
show(str, l);
