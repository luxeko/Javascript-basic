function User(firstName, lastName, avatar) {
    this.firstName  = firstName;
    this.lastName   = lastName;
    this.avatar     = avatar;
}

var user = new User('Duc Anh', 'Le Kha', 'avatar');
console.log(user);

user.getName = function() {
    // return user.firstName + ' ' + user.lastName;
    return `${this.firstName} ${this.lastName}`;
}
console.log(user.getName());

User.prototype.className = 'F8';
console.log(user.className);

User.prototype.getClassName = function() {
    return this.className;
}
console.log(user.getClassName());

// Làm việc với Date
var date = Date();
console.log(typeof date); // string
var date2 = new Date();
console.log(typeof date2); // object


// Math trong object
/* 
    Math object

    - Math.PI       = 3.141592653589793
    - Math.round()  làm tròn số                     e.g: 1.8 => 2 ; 1.3 => 1
    - Math.abs()    giá trị tuyệt đối               e.g: -4 => 4
    - Math.ceil()   làm tròn trên                   e.g: 4.1 => 5; 4.9 => 5
    - Math.floor()  làm tròn dưới                   e.g: 4.1 => 4; 4.9 => 4
    - Math.random() dãy số thập phân ngẫu nhiên < 1
    - Math.min()    lấy ra giá trị nhỏ nhất         e.g: Math.min(-10, 1, 100, 50) => -10
    - Math.max()    tương tự min
*/
// console.log(Math.floor(Math.random()* 100));