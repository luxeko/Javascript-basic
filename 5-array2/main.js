/* Array - 2 */
/* Array method:
    forEach()
    every()
    some()
    find()
    filter()
    map()
    reduce()
*/

let courses = [
    {
        id: 1,
        name: 'Java',
        coin: 5
    },
    {
        id: 2,
        name: 'PHP',
        coin: 10
    },
    {
        id: 3,
        name: 'Javascript',
        coin: 15
    },
];

// let newCourses = course.map(function(course) {
//     return {
//         id: course.id,
//         name: `Khoá học ${course.name}`,
//         coin: course.coin
//     }
// });

function courseHandler(courses, index, originArray) {
    // return {
    //     id: courses.id,
    //     name: `Khoá học ${courses.name}`,
    //     coin: courses.coin,
    //     index: index,               // lấy ra vị trí phần tử
    //     originArray: originArray    // trả về array gốc
    // }
    return `<h2>${courses.name}</h2>`
}
let newCourses = courses.map(courseHandler)
console.log(newCourses); // in ra 1 mảng
console.log(newCourses.join(' ')); // chuyển 1 mảng thành 1 chuỗi string


// let totalCoin = 0;
// for(var course of courses){
//     totalCoin += course.coin
// }
// console.log(totalCoin);

// Reduce Cách 1:
let i = 0;
function countHandler(accumulator, currentValue, currentIndex, originArray){
    // accumulator: biến lưu trữ (gg dịch)
    i++;
    let total = accumulator + currentValue.coin;
    console.table({
        'Lượt chạy': i,
        'Biến lưu trữ': accumulator,
        'Giá khoá học': currentValue.coin,
        'Tích trữ được': total
    });
    return total;
}

// gán mặc định totalCoin = 0 = accumulator ở lượt chạy đầu tiên
let totalCoin = courses.reduce(countHandler, 0)
console.log(totalCoin);


// Reduce Cách 2: 
let totalCoin2 = courses.reduce(function(total, course) {
    return total + course.coin;
}, 0)
console.log(totalCoin2);


// Bài tập
// Bài 1: Flat - "Làm phẳng" mảng từ Depth array - "mảng sâu"
let depthArray = [1, 2, [3, 4], 5, 6, [7, 8, 9]];
let flatArray = depthArray.reduce(function(flatOutputArray, depthItem) {
    return flatOutputArray.concat(depthItem);
}, []);
console.log(flatArray); // => [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Bài 2: Lấy ra các khoá học đưa vào 1 mảng mới
let topics = [
    {
        topic: "Front-end",
        courses: [
            {
                id: 1,
                title: "HTML, CSS"
            },
            {
                id: 2,
                title: "Javascript"
            }
        ]
    },
    {
        topic: "Back-end",
        courses: [
            {
                id: 1,
                title: "Java"
            },
            {
                id: 2,
                title: "PHP"
            }
        ]
    }
];
let newTopics = topics.reduce(function (course, currentValue){
    return course.concat(currentValue.courses)
}, []);

console.log(newTopics);

let htmls = newTopics.map(function(course) {
    return `
        <div>
            <h2>${course.title}</h2> 
            <h2>ID: ${course.id}</h2> 
        </div>
    `;
});
console.log(htmls.join(''));