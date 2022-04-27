/*
1.Hàm?
    - Một khối mã
    - Làm 1 việc cụ thể

2. Loại hàm
    - Built-in: có sẵn 
    - Tự định nghĩa

3. Tính chất
    - Không thực thi khi định nghĩa
    - Sẽ thực thi khi dc gọi
    - Có thể nhận tham số
    - Có thể trả về 1 giá trị

4. Tạo hàm đầu tiền
*/
    // function showDialog() {
    //     //code 
    //     alert('Hi hi hi');
    // }
    //gọi hàm
    //showDialog();



//Tham số hàm - Javascript
/*
1. Tham số?
    - Định nghĩa?
    - Kiểu dữ liệu?
    - Tính private
    - 1 tham số
    - Nhiều tham số

2. Truyền tham số
    - 1 tham số
    - nhiều tham số

3. Arguments?
    - Đối tượng argument
    - Giới thiệu vòng for
 */
    // function writeLog(message, message2) {
    //     console.log(message, message2);
    // }
    // writeLog('test message', 'test message2');

    // function writeLog(){
    //     var myString = '';
    //     for(var param of arguments) {
    //         myString += `${param} - `;
    //     }
    //     let test = myString.slice(0 , -3); // xoá ký tự ' - ' cuối cùng trong chuỗi
    //     console.log(test);
    // }
    // writeLog('log 1', 'log 2', 'log 3');

//return trong hàmg 
    // function sum(a, b) {
    //     return a+b;
    // }
    // var result = sum(2,8);
    // console.log(result);

/*
1. Khi function đặt trùng tên?
2. Khai báo biến trong hàm?
3. Định nghĩa hàm trong hàm?
 */
    // function showMessage() {
    //     function showMessage2() {
    //         console.log('message 2');
    //     }
    //     showMessage2();
    // }
    // showMessage();

    //Viết hàm kiểm tra một chuỗi có nằm trong một chuỗi khác hay không.
    function stringInString(needle, haystack) {
        var result;
        if(typeof(needle) === 'string' && typeof(haystack) === 'string'){
            if(haystack.indexOf(needle) >= 0){
                return true;
            }else{
                return false;
            }
        }else{
            return  false;
        }
        
    }
    // console.log(stringInString('F8', 'Cày JS tại F8'));

    //Viết hàm checkExistIdol để kiểm tra xem có idol của bạn trong danh sách idols không
    function checkExistIdol(list, name) {
        if (Array.isArray(list) && typeof name === 'string') {
            return list.indexOf(name) != -1
        } else {
            return false
        }
    }

/*
    Các loại function
    1. Declaration function
    2. Expression function
    3. Arrow function (giới thiệu qua. Khi nào lên nâng cao sẽ học lại)
 */
// 1. Declaration function
    function showMessage() {
        console.log('Declaration function');
    }
    var showMessage2 = function(){
        console.log('Expression function');
    }
// 2. Expression function
 