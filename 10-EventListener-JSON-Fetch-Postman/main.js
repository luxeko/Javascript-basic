// 1. DOM Event / Event listener
// 2. JSON
// 3. Promise
// 4. Fetch
// 5. DOM location
// 6. Local storage
// 7. Session storage
// 8. Coding convention
// 9. Best Practices
// 10. Mistakes
// 11. Performance

// ================= DOM Event / Event listener =================
// 1. Xử lý nhiều việc khi 1 event xảy ra
// 2. Lắng nghe / Huỷ bỏ lắng nghe
let btn = document.querySelector('button');
console.log(btn);
function viec1() {
    console.log("Việc 1");
}
function viec2() {
    console.log("Việc 2");
}
btn.addEventListener('click', viec1)
btn.addEventListener('click', viec2)
setTimeout(function () {
    btn.removeEventListener('click', viec1)
}, 3000)


// ================= JSON =================
// 1. Là một định dạng dữ liệu (chuỗi)
// 2. Javascript Object Notatin
// 3. JSON: Number, String, Boolean, Null, Array, Object
// Stringify: Từ Javascript types -> JSON
// Parse: Từ JSON -> Javascript types 
let json_number = '1';
let json_string = '"Duc Anh"';
let json_boolean = 'true';
let json_null = 'null';
let json_array = '["Javascript", "PHP", "Reactjs"]';
let json_object = '[{"name": "Duc Anh", "age": 19}, {"name": "Minh Hong", "age": 18}]';
console.log(JSON.parse(json_number));
console.log(JSON.parse(json_string));
console.log(JSON.parse(json_boolean));
console.log(JSON.parse(json_null));
console.log(JSON.parse(json_array));
console.log(JSON.parse(json_object));
console.log(JSON.stringify('DUC ANH'));


// ================= Promise =================

