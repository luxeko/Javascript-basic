function createCounter() {
    let counter = 0;

    function increase() {
        return ++counter;
    }
    return increase;
}

const counter1 = createCounter();
console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter1()); // 3


function createLogger(namespace) {
    function logger(message) {
        console.log(`[${namespace}] ${message}`);
    }   

    return logger;
}
// ============= App =============
// Register.js
const infoLogger = createLogger('Debug');
infoLogger("Gửi mail lỗi lần 1, thủ gửi lại...");
infoLogger("Gửi mail thành công");

// ForgotPassword.js
const errorLogger = createLogger("Error");
errorLogger("Email không tồn tại");


function createStorage(key) {
    const store = JSON.parse(localStorage.get(key)) ?? {};

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))
    }

    const storage = {
        get(key) {
            return store[key];
        },
        set(key, value) {
            store[key] = value;
            save();
        },
        remove(key) {
            delete store[key];
            save();
        }
    }

    return storage;
}

function a(x) {
    x++;
    return function () {
        console.log(++x);
    };
}

a(1)();
a(1)();
a(1)();

let x = a(1);
x();
x();
x();