//Array Literals
const numbers = [12, 45, 33, 29, 39];
const mixed = [12, 'dev', true, null];


//Array Constructor
const fruits = new Array('apple', 'grape', 'orange');

x = numbers[0];

x = numbers[0] + numbers[3];

x = `My favoriate fruit is ${fruits[2]}`;

x = numbers.length;

fruits[2] = 'pear';

x = fruits;

fruits[3] = 'strawberry';

fruits[fruits.length] = 'blueberry';
// console.log(x);

// console.log(numbers);
// console.log(fruits);

const arr = [12, 45, 33, 29, 39];

arr.push(100); // insert the value at end
//console.log(arr);
arr.pop(); //delete the value at end
//console.log(arr);

arr.unshift(99); // add element at 0th index
//console.log(arr);

arr.shift(); // remove first element from array
//console.log(arr);

//arr.reverse();
//console.log(arr);

let y;

y = arr.includes(45);
y = arr.indexOf(245);

// console.log(y);

//slice : Returns the copy of the section of the array

y = arr.slice(1,4);
// console.log(arr)
// console.log(y)

//splice : delete the element from an array and change the existing behivour of array

//y = arr.splice(1,4)

//if you want to delete only 1 element

//y = arr.splice(2,1);

y = arr.splice(1,4).reverse().toString().charAt(0);
console.log(y, arr)