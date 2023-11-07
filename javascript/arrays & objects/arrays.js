//nesting concat and spread operator in array
let x;
const fruits = ['apple', 'pear', 'orange'];

const berries = ['strawberry', 'blueberry', 'rasberry'];

//fruits.push(berries);

//x = fruits[3][1];

const allFruits = [fruits, berries];

x = allFruits[1][0];

//x = fruits.concat(berries);

//spread operator (...)

x = [...fruits, ...berries]

//flatten array

const arr = [1, 2, [3,4], 5, [6,7], 8];

x = arr.flat();

//static methods on array object

x = Array.isArray(fruits);

x = Array.from('12345');

const a = 1;
const b = 2;
const c = 3;


x = Array.of(a, b, c)

//console.log(x);

//challenge

const data = [1,2,3,4,5];

//expected output: [6,5,4,3,2,1,0];

let result;

data.push(6);
data.unshift(0);
result = data.reverse();

//console.log(data);


//challenge2 \
/* Expected Resule: [
  1, 2, 3, 4,  5, 6, 7, 8, 9, 10]
   */

const data1 = [1,2,3,4,5]
const data2 = [5,6,7,8,9,10];

let result1;
result1 = data1.concat(data2.splice(1,data2.length));
console.log(result1);
// console.log(result1)