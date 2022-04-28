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


// =================== map2() ===================
Array.prototype.map2 = function(callback) {
    let output = [], arrayLength = this.length;
    for(let i = 0; i < arrayLength; i++){
        // this[i]: lấy giá trị tại vị trí index = i;
        // i: lấy vị trị index
        let result = callback(this[i]);
        output.push(result);
    }
    return output;
}
let coursesMap = ['Javascript', 'PHP', 'Java'];
let htmlsMap = coursesMap.map2(function(course) {
    return `<h2>${course}</h2>`;
})
console.log(htmlsMap.join(''));


// =================== forEach2() ===================
Array.prototype.forEach2 = function(callback) {
    let output = [];
    for(var index in this){
        if(this.hasOwnProperty(index)){
            output.push(callback(this[index], index, this));
        }
    }
    return output;
}
let coursesForEach = new Array(1000);
coursesForEach.push('abc', 'xyz')
coursesForEach.forEach2(function(course, index, array){
    console.log(course, index, array);
})
let htmlsForEach = coursesForEach.forEach2(function(course) {
    return `<h2>${course}</h2>`
})
console.log(htmlsForEach.join(''));


// =================== reduce2() ===================
Array.prototype.reduce2 = function(callback, result) {
    let arrayLength = this.length;
    let i = 0;
    // console.log(arguments[2]);
    if(arguments.length < 2) {
        i = 1
        result = this[0];
    }
    for(i; i < arrayLength; i++){
        result = callback(result, this[i], i, this)
    }
    return result
}
let coursesReduce = [1, 2, 3, 4, 5];
let htmlsReduce = coursesReduce.reduce2(function(total, course) {
    return total + course;
}, 0, 'abc')
console.log(htmlsReduce);

// =================== find2() ===================
let coursesFind = [
    {
        name: "Javascript",
        point: 9,
    },
    {
        name: "PHP",
        point: 8,
    },
    {
        name: "ReactJs",
        point: 10,
    },
];
Array.prototype.find2 = function(callback) {
    arrayLength = this.length;
    for(let i = 0; i < arrayLength; i++) {
        if(callback(this[i], i, this)) {
            return this[i] ;
        }
    }
}
let htmlsFind = coursesFind.find2(function(course, number, arr) {
    return course.name === "PHP";
})
console.log(htmlsFind);


// =================== filter2() ===================
Array.prototype.filter2 = function(callback) {
    let output = [], result;
    for(var index in this){
        if(this.hasOwnProperty(index)) {
            result = callback(this[index], index, this);
            if(result) {
                output.push(this[index]);
            }
        }
    }
    return output;
}
let coursesFilter = [
    {
        name: 'Javascript',
        coin: 690
    },
    {
        name: 'PHP',
        coin: 790
    },
    {
        name: 'ReactJs',
        coin: 890
    }
];
let htmlsFilter = coursesFilter.filter2(function(course, index, arr){
    return course.coin > 700
})
console.log(htmlsFilter);

// =================== some2() ===================
Array.prototype.some2 = function(callback) {
    let output = false;
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            let result = callback(this[index], index, this);
            if(result) {
                output = true;
                break;
            }
            
        }
    }
    return output;
}
let coursesSome = [
    {
        name: 'Javascript',
        coin: 690,
        isFinish: false,
    },
    {
        name: 'PHP',
        coin: 790,
        isFinish: false,
    },
    {
        name: 'ReactJs',
        coin: 890,
        isFinish: false,
    }
];
let resultSome = coursesSome.some2(function(course, index, arr) {
    return course.coin > 690;
})
console.log(resultSome);

// =================== every2() ===================
Array.prototype.every2 = function(callback) {
    let output = true;
    for(var index in this) {
        if(this.hasOwnProperty(index)){
            let result = callback(this[index], index, this)
            if(!result){
                output = false;
                break;
            }
        }
    }
    return output
}
coursesEvery = [
    {
        name: 'Javascript',
        coin: 690,
        isFinish: true,
    },
    {
        name: 'PHP',
        coin: 790,
        isFinish: false,
    },
    {
        name: 'ReactJs',
        coin: 890,
        isFinish: true,
    }
];
let htmlsEvery = coursesEvery.every2(function(course, index, arr) {
    return course.coin > 690
})
console.log(htmlsEvery);


// =============== Viết hàm xếp lại mảng object theo giá trị trong object ===============
const inventories = [
    { name: 'asparagus', type: 'vegetable', quantity: 5 },
    { name: 'banana', type: 'fruit', quantity: 1 },
    { name: 'goat', type: 'meat', quantity: 26 },
    { name: 'cherries', type: 'fruit', quantity: 4 },
    { name: 'fish', type: 'meat', quantity: 30 },
];
// Cách 1: tạo function groupBy
const groupBy = function(objectArray, key) {
    return objectArray.reduce((output, currentValue) => {
        let groupKey = currentValue[key];
        if (!output[groupKey]) {
            output[groupKey] = [];
        }
        output[groupKey].push(currentValue);
        return output;
    }, {});
};
let result = groupBy(inventories, 'type')
console.log(result);

// Cách 2: dùng reduce 
const groupByType = inventories.reduce((output, currentValue) => {
    const { name } = currentValue;
    const { type } = currentValue;
    const { quantity } = currentValue;
    console.log( name );
    console.log( type );
    console.log( quantity );
    output[type] = output[type] ?? [];
    output[type].push(currentValue);
    return output;
  }, {});
console.log(groupByType);

// Cách 3: Viết 1 prototype GroupBy
Array.prototype.groupBy = function (callback) {
    if (typeof callback !== 'function') {
        throw new Error("groupBy take a function as only parameter");
    }
    return this.reduce((output, currentValue) => {
        let groupKey = callback(currentValue);
        if (!output[groupKey]) {
            output[groupKey] = [];
        }
        output[groupKey].push(currentValue);
        return output;
    }, {});
}
const test_groupBy = inventories.groupBy(function(inventory) {
    return inventory.type;
})
console.log(test_groupBy);
