let boxElement = document.querySelector('.box');

console.log(boxElement.classList);
boxElement.classList.add('red', 'blue', 'green')

console.log(boxElement.classList.contains('red')); // true vì đã thêm class red từ dòng 3

// setTimeout(() => {
//     boxElement.classList.remove('red');
// }, 2000);

setInterval(()=> {
    boxElement.classList.toggle('red');
}, 1000)


let test = document.forms;
let img = document.images;
let a_href1 = document.anchors; // phải có name trong thẻ a
let a_href2 = document.links // không cần có name
console.log(test);
console.log(img);
console.log(a_href1);
console.log(a_href2);