// Đối tượng Validator
function Validator(options) {

    // Hàm lấy ra thẻ form-group
    function getFormGroupParent(inputElement, formGroupSelector) {
        while(inputElement.parentElement) {
            if(inputElement.parentElement.matches(formGroupSelector)) {
                return inputElement.parentElement;
            }
            inputElement = inputElement.parentElement;
        }
    }

    // Hàm thực hiện validate
    function validateBlur(inputElement, messageElement, errorMessage ) {
        if(errorMessage){
            getFormGroupParent(inputElement, options.formGroupSelector).classList.add('invalid');
            messageElement.innerText = errorMessage;
        } else {
            messageElement.innerText = '';
            getFormGroupParent(inputElement, options.formGroupSelector).classList.remove('invalid');
        }

        // Convert  giá trị trả về thành boolean
        return !errorMessage;
    }

    // Hàm thực hiện xoá lỗi khi nhập input
    function validateInput(inputElement, messageElement ) {
        messageElement.innerText = '';
        getFormGroupParent(inputElement, options.formGroupSelector).classList.remove('invalid')
    }

    // lấy element của form cần validate
    const formElement = document.querySelector(options.form) // == const formElement = document.querySelector('#form-1')
    if(formElement) {
        formElement.onsubmit = function (e) {
            e.preventDefault();

            // Đặt giá trị mặc định cho form nhập đúng tất cả input là true
            let isFormValid = true;

            options.rules.forEach(function(rule) {
                const inputElement = document.querySelector(rule.selector);
                const messageElement = getFormGroupParent(inputElement, options.formGroupSelector).querySelector(options.messageSelector);
                const errorMessage = rule.test(inputElement.value);

                // lấy giá trị true/false trả về từ nhập input
                // true: nhập đúng tất cả các input
                // false: nhập sai 1 hoặc tất cả các input
                const isValid = validateBlur(inputElement, messageElement, errorMessage);

                if(isValid === false) {
                    isFormValid = false;
                }
            })
            
            if(isFormValid) {
                // Trường hợp submit với javascript
                if(typeof options.onSubmit === 'function') {
                    const getValuesFromInput = formElement.querySelectorAll('[name]');
                    // Chuyển đổi từ nodeList sang array
                    // let formValues = Array.from(getValuesFromInput)
                    const formValues = [...getValuesFromInput].reduce(function(values, input) {
                        values[input.name] = input.value
                        return values;
                    }, {});
                    options.onSubmit(formValues)
                // Trường hợp sumbit với hành vi mặc định
                } else {
                    formElement.submit();
                }
            } 
        }
        
        options.rules.forEach(function(rule) {

            // lấy ra thẻ input
            const inputElement = document.querySelector(rule.selector);
            
            // lấy ra thẻ message từ thẻ cha của thẻ input
            const messageElement = getFormGroupParent(inputElement, options.formGroupSelector).querySelector(options.messageSelector);

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
Validator.isRequired = function (selector, message) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : message || "Vui lòng nhập trường này"
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
Validator.isPassword = function (selector, min) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim().length >= min  ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`;
        }
    };
}
Validator.confirmPassword = function (selector, getPassword, message) {
    return {
        selector: selector,
        test: function(value) {
            if(getPassword()) {
                if(!value) {
                    return value.trim() ? undefined : message || "Vui lòng nhập trường này"
                } else {
                    return value === getPassword() ? undefined : 'Mật khẩu nhập lại không chính xác'
                }
            }
        }
    };
}
