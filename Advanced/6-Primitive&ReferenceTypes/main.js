// value types: Kiểu tham trị
// reference types: Kiểu tham chiếu

/* 
    1. Value types (Primitive data types) = kiểu dữ liệu nguyên thuỷ/đơn giản
     - String
     - Number
     - Boolean
     - BigInt
     - Symbol
     - undefined
     - null
    
    2. Reference types (Non-primitive data types) = kiểu dữ liệu không nguyên thuỷ
     - Object
     - Array
     - Function
    
    ## Data types with functions
     - Value types
     - Reference types
*/

let a = {
    name: 'Mercedes'
}
a = {
    name: 'BMW',
    model: 'I8'
}
let b = a;


console.log(b);