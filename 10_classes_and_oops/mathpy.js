// Math.py = 3.14  , make it 3 or 4 is it possible ?

console.log(Math.PI);       // we cant change the PI value and we cant overwrite
Math.PI = 5
console.log(Math.PI); 


const descripter = Object.getOwnPropertyDescriptor(Math , "PI")    // talks about hidden properties or featurs of object 
console.log(descripter);   
      
/*
output : {
    value: 3.141592653589793,
    writable: false,
    enumerable: false,
    configurable: false
  }
*/

 const mynewObject = Object.create(null)   // way to declare a object 


 const chai = {       // other way to declare object 
    name: 'chai',
    price: 250,
    isAvailable: true
 }
 console.log(chai);