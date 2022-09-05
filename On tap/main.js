this.firstName = 'Duc';
this.lastName = 'Anh';

const teacher = {
    firstName: 'Minh',
    lastName: ' Hong',
    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

// Case 1:
console.log(teacher.getFullName());

// Case 2:
const getTeacherName = teacher.getFullName;
console.log(getTeacherName());

const tesst = {
    abc() {
        console.log(this);
        console.log("123");
    }
}
tesst.abc.call()