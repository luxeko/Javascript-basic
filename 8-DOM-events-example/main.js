let inputValue;

let inputTextElement = document.querySelector('input[type="text"]');
console.log(inputTextElement);
// inputTextElement.oninput = function(e) {
//     // console.log(e.target.value);
//     inputValue = e.target.value;
//     console.log(inputValue);
// }
inputTextElement.onkeyup = function(e) {
    console.log(e.which);
    switch(e.which) {
        case 27: 
            console.log('Esc');
            break;
    }
}

let inputCheckboxElement = document.querySelector('input[type="checkbox"]');
console.log(inputCheckboxElement);
inputCheckboxElement.onchange = function(e) {
    if(!e.target.checked){
        console.log("Không đủ điều kiện gửi mail") 
        return;
    }
    console.log("Đủ điều kiện gửi mail");
}

let selectElement = document.querySelector("select");
console.log(selectElement);
selectElement.onchange = function(e) {
    console.log(e.target.value);
}