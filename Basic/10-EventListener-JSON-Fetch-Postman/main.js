// 1. DOM Event / Event listener
// 2. JSON
// 3. Promise
// 4. Fetch
//      - JSON server: API Server (fake) / Mock API
//      - CRUD
//          - Create: Tạo mới -> POST
//          - Read: Lấy dữ liệu -> GET
//          - Update: Chỉnh sửa -> PUT / PATCH
//          - Delete: Xoá       -> DELETE
//      - Postman
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
// sync/async : đồng bộ hoá / bất đồng bộ
setTimeout(function anvc() {
    console.log(1);
}, 1000);
console.log(2);

// callback hell
setTimeout(function(){
    console.log(1); // việc 1
    setTimeout(function(){
        console.log(2); // việc 2
        setTimeout(function(){
            console.log(3); // việc 3
            setTimeout(function(){
                console.log(4); // việc 4
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)

// Cách hoạt động của Promise thay thế cho callbackhell
// trong promise được truyền vào 1 function
let promise = new Promise(
    // Executor: thi hành
    function(resolve, reject) {
        // Logic
        // Thành công: resolve()
        // Thất bại: reject()
        resolve();
        // reject();
    }
)
promise
    .then(function() {
        return 1;
    })
    .then(function(data) {
        console.log(data);
        return 2;
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function() {
        console.log("Failure!");
    })
    .finally(function() {
        console.log("Done!");
    })

let promise1 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve([1]);
    }, 1000)
});
let promise2 = new Promise(function(resolve) {
    setTimeout(function() {
        resolve([2,3]);
    }, 3000)
});
Promise.all([promise1, promise2])
    .then(function(result) {
        let result1 = result[0];
        let result2 = result[1];
        console.log(result1.concat(result2));
    })