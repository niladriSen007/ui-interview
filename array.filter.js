Array.prototype.myFilter = function (callback, thisArg) {
  //Here, this -> the array on which we are calling this myFilter method
  if (this == null) {
    throw new TypeError("This cannot be null")
  }

  if (typeof callback !== "function") {
    throw new TypeError("Callback is not a function")
  }

  const actual_array = Object(this)
  const len = parseInt(actual_array?.length) || 0

  let result = new Array()
  for (let index = 0; index < len; index++) {
    if (
      actual_array[index] &&
      callback.call(thisArg, actual_array[index], index, actual_array)
    ) {
      const val = actual_array[index]
      result.push(val)
    }
  }
  return result
}


// Example usage and tests
console.log('Testing Array.filter() polyfill:');

// Basic filtering - even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(x => x % 2 === 0);
console.log('Even numbers:', evenNumbers); // [2, 4, 6, 8, 10]

// Filtering with index parameter
const longStrings = ['a', 'hello', 'hi', 'javascript', 'world'].filter((str, index) => {
  return str.length > 2 && index > 0;
});
console.log('Long strings after index 0:', longStrings); // ['hello', 'javascript', 'world']

// Filtering objects
const people = [
  { name: 'John', age: 30, active: true },
  { name: 'Jane', age: 25, active: false },
  { name: 'Bob', age: 35, active: true },
  { name: 'Alice', age: 28, active: true }
];

const activePeople = people.filter(person => person.active);
console.log('Active people:', activePeople);
// [{ name: 'John', age: 30, active: true }, { name: 'Bob', age: 35, active: true }, { name: 'Alice', age: 28, active: true }]

const adults = people.filter(person => person.age >= 30);
console.log('Adults (30+):', adults);
// [{ name: 'John', age: 30, active: true }, { name: 'Bob', age: 35, active: true }]

// Using thisArg
const validator = {
  minValue: 5,
  isValid: function(x) {
    return x >= this.minValue;
  }
};

const validNumbers = numbers.filter(function(x) {
  return this.isValid(x);
}, validator);
console.log('Valid numbers (>= 5):', validNumbers); // [5, 6, 7, 8, 9, 10]

// Sparse arrays (empty slots are skipped)
const sparse = [1, , 3, , 5, 6];
const sparseFiltered = sparse.filter(x => x > 3);
console.log('Sparse array filtered:', sparseFiltered); // [5, 6]

// Filtering falsy values
const mixed = [0, 1, false, 2, '', 3, null, 4, undefined, 5];
const truthyValues = mixed.filter(Boolean);
console.log('Truthy values:', truthyValues); // [1, 2, 3, 4, 5]

// Complex filtering with multiple conditions
const products = [
  { name: 'Laptop', price: 1000, category: 'electronics', inStock: true },
  { name: 'Phone', price: 500, category: 'electronics', inStock: false },
  { name: 'Book', price: 20, category: 'books', inStock: true },
  { name: 'Tablet', price: 300, category: 'electronics', inStock: true }
];

const availableElectronics = products.filter(product => {
  return product.category === 'electronics' && 
         product.inStock && 
         product.price < 800;
});
console.log('Available electronics under $800:', availableElectronics);
