// 1. Let, const --> done
// 2. Template Literals --> done
// 3. Multi-line String --> done
// 4. Arrow function
// 5. Classese
// 6. Enhanced object literals
// 7. Default parameter values
// 8. Destructuring
// 9. Rest parameters
// 10. Spread
// 11. Tagged template literal
// 12. Modules


// -------------- Arrow function --------------
const logger = log => {
    console.log(log);
}

logger('Duc anh')

// const sum = (a,b) => {
//     return a+b;
// }
const sum = (a,b) => a+b;
console.log(sum(2,2));

const obj = (a,b) => ({a:a, b:b});
console.log(obj(2,2));


// -------------- Default parameter --------------
function logger_parameter(log, type = 'log'){
    console[type](log);
}
logger_parameter('Message...', 'error');

// -------------- Enhanced obj literals --------------
// 1. Định nghĩa key: value cho obj
// 2. Định nghĩa method cho obj
// 3. Định nghĩa key cho obj dưới dạng biến
const name = 'Javascript';
const price = 1000;
const course1 = {
    name, 
    price,
    getName() {
        return name
    }
}
console.log(course1.getName());

const filedName = 'new-name';
const filedPrice = 'price';
const course2 = {
    name: 'Javascript',
    [filedName]: 'Javascript',
    [filedPrice]: 1000
}
console.log(course2);


// -------------- Destructuring, Rest --------------
const array = ['Javascript', 'PHP', 'Python'];
const [a,b,c] = array;
console.log(a,b,c); // => Javascript PHP Python
// const [a, ,c] = array;
// console.log(a,c); => Javascript Python

const [x, ...rest] = array
console.log(x); // => Javascript
console.log(rest); // => ['PHP','Python']

const course3 = {
    name3: 'Javascript',
    price3: 1000,
    children: {
        name3: 'ReactJs'
    }
};
// const { name3, price3 } = course3;
// console.log(name3, price); => Javascript 1000
const { name3, ...rest3 } = course3;
console.log(name3); // => Javascript 
console.log(rest3); // => {price3: 1000, children: { name3: 'ReactJs' }}

const {name3: parentName3, children: { name3 : childrenName3 }} = course3
console.log(parentName3); // => Javascript
console.log(childrenName3); // => ReactJs

const test = ['Test 1', 'Test 2', 'Test 3'];

console.log(...test);

function abvf(...params) {
    console.log(params);
}
abvf();