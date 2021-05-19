// anonymous types
// You don't need to define an interface with one type.
// You can define it in line - this is an anonymouse type
// eg.
var todo: { name: string };
// it will then error when you try to assign an object that doesn't have the name property
todo = { age: 41 };

//in this example the union type allows only strings or arrays can be passed in.
function totalLength(x: (string | any[]), y: (string | any[])): number {
  var total: number = x.length + y.length;
  return total;
}
// if only the length is requires the typs don't need to be restricted to array and length types
// any object with a length property as long as it is a number will 
// replacing the union types with anonymouse types will achieve this
// length is a property
function totalLength2(x: { length: number }, y: { length: number }): number {
  var total: number = x.length + y.length;
  return total;
}
// this results is cleaner, easier to understand code.

// however nothing forcing consumers of this method from passing in 
// values of the exact same type, so they can add the length of an array to the length of a string
// this will be handled by using a generic type.