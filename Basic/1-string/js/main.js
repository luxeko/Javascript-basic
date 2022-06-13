// làm việc với chuỗi
var myString = 'Hoc JS tai JS JS JS F8!';
var myString2 = '      Hoc JS tai F8!';

//Keyword: Javascript string methods
//1. Length
    //console.log(myString.length);
//2. Find index
    //console.log(myString.indexOf('JS')); = 4
    //console.log(myString.indexOf('JS', 6)); = 11
    //console.log(myString.lastIndexOf('JS')); = 17
    //console.log(myString.search('JS')); = 4

    //search khác indexOf ở chỗ ko điền dc vị trí bắt đầu tìm kiếm

//3. Cut string
    //Cắt chuỗi từ trái sang phải
    //console.log(myString.slice(4,6)) = JS

    //Cắt từ phải sang trái
    //console.log(myString.slice(-3, -1)); = F8

//4. Replace: thay đổi chuỗi
    //console.log(myString.replace('JS', 'Javascript')) = Hoc Javascript tai JS JS JS F8!
    //console.log(myString.replace(/JS/g, 'Javascript')) = Hoc Javascript tai Javascript Javascript Javascript F8!

//5. Convert to upper case
//6. Convert to lower case
    //console.log(myString.toUpperCase()); =  HOC JS TAI JS JS JS F8!
    //console.log(myString.toLowerCase())

//7. Trim: loại bỏ khoảng trắng thừa
    //console.log(myString2.trim()); = Hoc JS tai F8!
    //Chứng minh:
        //console.log(myString2.trim().length)  = 14
        //console.log(myString2.length)  = 20

//8. Split: tìm điểm chung để cắt thành từng chuỗi nhỏ
    //var languages = 'JS, PHP, Ruby';
    //console.log(languages.split(', ')); = ['JS', 'PHP', 'Ruby']

//9. Get a character by index: lấy vị trí phần tử theo index
    //console.log(myString.charAt(0)); = H
    //console.log(myString.charAt(10000)); = ''
    //console.log(myString.charAt(11)); = J