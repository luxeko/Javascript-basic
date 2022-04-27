var h1_Element = document.querySelectorAll('h1');

for(var i = 0; i < h1_Element.length; i++) {
    h1_Element[i].onclick = function(e) {
        console.log(e.target);
    }
}