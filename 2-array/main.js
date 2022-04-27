/*
Kiểu số (number) trong js

1 .Tạo giá trị number
- Các cách tạo
- Dùng thế nào? Tại sao?
    - Kiểm tra data type
2. Làm việc với number
    - To string
    - To Fixed
*/
var age = 18;
var PI = 3.14;

var result = 20 / 'ABC' // = NaN
//console.log(result) = NaN

//Cách check result có phải NaN
    //console.log(isNaN(result)); = true

//Chuyển từ số sang string
    //var myString = age.toString();
    //console.log(myString);

//Làm tròn số thập phân (nếu giá trị sau thập phân > 5 thì làm tròn lên, ngược lại làm tròn xuống)
    //console.log(PI.toFixed()) = 3
    //console.log(PI.toFixed(1)) = 3.1
    //console.log(PI.toFixed(2)) = 3.14
    //console.log(PI.toFixed(3)) = 3.15

    var PI2 = 3.54;
    //console.log(PI2.toFixed()) = 4

//Array
    //var input = [1, 2, 3, 4, 7];
    //var dai = input.length;
    //tìm phần tử cuối của mảng
        //var result = input[input.length-1];
        //console.log(dai) == 5
        //console.log(result) == 7

/*
    Làm việc với array
    //Keyword: Js array methods
*/
var languages = [
    'JS',
    'PHP',
    'Ruby', 
    20,
    function(){},
    NaN
];
//1. To string: chuyển mảng thành 1 chuỗi
    //console.log(languages.toString()); = Js,PHP,Ruby,20,function(){},NaN

//2. Join: tương tự như split bên String
    //console.log(languages.join(' - ')); = Js - PHP - Ruby - 20 - function(){} - NaN

//3. Pop: xoá phần tử cuối mảng và trả lại chính phần tử đã xoá, nếu xoá liên tục thì trả về undefined
    //console.log(languages.pop()); = NaN

// 4. Push: thêm phần tử vào cuối mảng
    //console.log(languages.push('Java')); = 7 vì độ dài của mang đang là 6
        //console.log(languages); = ['Js', 'PHP', 'Ruby', 20, ƒ, NaN, 'Java']

//5. Shift: ngược lại với pop, xoá phần tử đầu mảng và trả về phần tử đã xoá đó
    //console.log(languages.shift()); = JS

//6. Unshift: giống push. Nhưng unshift thêm phần tử vào đầu mảng
    //console.log(languages.unshift('ReactJs')); = 7
        //console.log(languages); = ReactJs', 'JS', 'PHP', 'Ruby', 20, ƒ, NaN]

//7. Splicing: xoá, cắt, chèn phần tử mới vào mảng - splice(vị trí, xoá, chèn, chèn...)
    //xoá
        //languages.splice(1,1); = ['JS', 'Ruby', 20, ƒ, NaN]
        //languages.splice(1,2); =  ['JS', 20, ƒ, NaN]
            //console.log(languages)
    //chèn/ thêm mới
        //languages.splice(1,0,'ReactJs', 'Java'); = ['JS', 'ReactJs', 'Java', 'PHP', 'Ruby', 20, ƒ, NaN]
            //console.log(languages)

//8. Concat: nối array
    // var languages2 = [ 
    //     20,
    //     function(){},
    //     NaN,
    //     'CSS',
    //     'HTML'
    // ];
    // console.log(languages2.concat(languages));

//9. Slicing - cắt 1 vài hoặc toàn bộ phần tử theo vị trí. 
    //console.log(languages.slice(1)); = ['PHP', 'Ruby', 20, ƒ, NaN]
    //console.log(languages.slice(2)); = ['Ruby', 20, ƒ, NaN]
    //console.log(languages.slice(3,5)); = [20, ƒ]
    //console.log(languages.slice(0)); = ['JS', 'PHP', 'Ruby', 20, ƒ, NaN]  ---  1 cách để copy mảng