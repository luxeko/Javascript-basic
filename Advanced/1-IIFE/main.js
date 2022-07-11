// IIFE - Immediately Inveked Function Expression
// Dùng khi muốn chạy luôn hàm sau khi khởi tạo hàm
// Là một hàm "private"
// Dùng dấu ; trước IIFE
// Không có tính sử dụng lại => ko nhất thiết đặt tên function

;(function() {
    console.log("Now now");
})()

;(function(message) {
    console.log(message)
})("Hello")

;(function logger(log) {
    console.log(log);
}("Đây là logger"))

;(function() {
    let fullName = 'Duc Anh';
})()

const app = (function() {
    // private
    const cars = [];
    return {
        get(index) {
            return cars[index];
        },
        add(car) {
            cars.push(car);
        },
        edit(index, car) {
            cars[index] = car;
        },
        delete(index) {
            cars.splice(index, 1);
        }
    }
})()

;(function js(x) {
    const y = (j) => j * x;

    console.log( y( s() ) );

    function s() {
        return j();
    }

    function j() {
        return x ** x;
    }
})(3)



