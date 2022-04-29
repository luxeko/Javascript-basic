var h1_Element = document.querySelectorAll('h1');
var get_title = document.querySelector('.title');

for(var i = 0; i < h1_Element.length; i++) {
    h1_Element[i].onclick = function(e) {
        console.log(e.target.innerText);
    }
}
test = get_title.textContent
console.log(typeof test);