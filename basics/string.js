let x = "abc";                    // Primitive string
let a = new String("abc");       // String object
let z = String("abc");           // Primitive string

console.log(a == z);             // true (value comparison)
console.log(a == x);             // true (value comparison)
console.log(z == x);             // true (value comparison)
console.log("abc" == new String("abc")); // true (value comparison, object converts to primitive)

console.log(a === z);            // false (object !== primitive)
console.log(a === x);            // false (object !== primitive)
console.log(z === x);            // true  (both are primitives)
console.log('abc' === new String('abc')); // false (primitive !== object)