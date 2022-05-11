// Đối tượng Validator
function Validator(options) {

    // Hàm thực hiện validate
    function validateBlur(inputElement, messageElement, errorMessage ) {
        if(errorMessage){
            inputElement.parentElement.classList.add('invalid')
            messageElement.innerText = errorMessage;
        } else {
            messageElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid')
        }
    }

    // Hàm thực hiện xoá lỗi khi nhập input
    function validateInput(inputElement, messageElement ) {
        messageElement.innerText = '';
        inputElement.parentElement.classList.remove('invalid')
    }

    // lấy element của form cần validate
    const formElement = document.querySelector(options.form) // == const formElement = document.querySelector('#form-1')
    
    if(formElement) {
        options.rules.forEach(function(rule) {

            // lấy ra thẻ input
            const inputElement = document.querySelector(rule.selector);
            
            // lấy ra thẻ message từ thẻ cha của thẻ input
            const messageElement = inputElement.parentElement.querySelector(options.messageSelector);

            if(inputElement) {
                // Xử lý trường hợp blur khỏi input
                inputElement.onblur = function () {
                    const errorMessage = rule.test(inputElement.value);
                    validateBlur(inputElement, messageElement, errorMessage);
                }

                // Xử lý mỗi khi nhập
                inputElement.oninput = function () {
                    validateInput(inputElement, messageElement)
                }
            }
        })
    }
}

// Định nghĩa rules
// Nguyên tắc của các rules:
// 1. Khi có lỗi => trả ra message lỗi
// 2. Khi hợp lệ => không trả ra gì cả
Validator.isRequired = function (selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : "Vui lòng nhập họ và tên"
        }
    };
}
Validator.isPassword = function (selector, min) {
    return {
        selector: selector,
        test: function(value) {
            return value.length >= min  ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`;
        }
    };
}

Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function(value) {
            if(!value) {
                return value.trim() ? undefined : "Vui lòng nhập email"
            } else {
                const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                return regex.test(value)  ? undefined : "Cú pháp Email không hợp lệ"
            }
        }
    };
}
Validator.confirmPassword = function (selector, getPassword) {
    return {
        selector: selector,
        test: function(value) {
            if(!value) {
                return value.trim() ? undefined : "Vui lòng nhập lại mật khẩu"
            } else {
                return value === getPassword() ? undefined : 'Mật khẩu nhập lại không chính xác'
            }
        }
    };
}
