// let a_elements = document.anchors; // cần có name trong thẻ <a>

let a_elements = document.links;
console.log(a_elements);

for(let i = 0; i < a_elements.length; i++) {
    a_elements[i].onclick = function(e) {
        console.log(e.target.href);
        if(!e.target.href.startsWith('https://www.facebook.com')) {
            e.preventDefault();
            alert("Bạn không thể chuyển trang");
        }
    }
}
let ul_element = document.querySelector('ul');

ul_element.onmousedown = function(e) {
    e.preventDefault();
}
ul_element.onclick = function(e) {
    console.log(e.target);
}

document.querySelector('div').onclick = function(e) {
    console.log("DIV");
}
document.querySelector('button').onclick = function(e) {
    e.stopPropagation();
    console.log('Click me!');
}



  

  


  