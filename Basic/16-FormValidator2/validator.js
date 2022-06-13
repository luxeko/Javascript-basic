function Validator(formSelector, options = {}) {
    // Hàm lấy ra thẻ form-group
    function getFormGroupParent(inputElement, formGroupSelector) {
        while(inputElement.parentElement) {
            if(inputElement.parentElement.matches(formGroupSelector)) {
                return inputElement.parentElement;
            }
            inputElement = inputElement.parentElement;
        }
    }

    let formRules = {};

    /** Quy ước tạo rule:
     * - Nếu có lỗi thì return `error message`
     * - Nếu không có lỗi thì return `undefined`
     * */ 
    let validatorRules = {
        required: function(value) {
            return value.trim() ? undefined : 'Vui lòng nhập trường này'
        },
        email: function(value) {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            return regex.test(value)  ? undefined : "Cú pháp Email không hợp lệ"
        },
        min: function(min) {
            return function (value) {
                return value.trim().length >= min ? undefined : `Vui lòng nhập tối thiểu ${min} ký tự`
            }
        },
        max: function(max) {
            return function (value) {
                return value.trim().length <= max ? undefined : `Vui lòng nhập tối đa ${max} ký tự`
            }
        },
    };
    
    // Lấy ra form element trong DOM theo `formSelector`
    let formElement = document.querySelector(formSelector);

    // Chỉ sử lý khi có element trong DOM
    if(formElement) {
        let inputs = formElement.querySelectorAll('[name][rules]')
        for(let input of inputs) {
            let ruleInfo;
            let rules = input.getAttribute('rules').split('|');
            for(let rule of rules) {
                let isRuleHasValue = rule.includes(':')
                if(isRuleHasValue) {
                    ruleInfo = rule.split(':');
                    rule = ruleInfo[0];
                }
                let ruleFunction = validatorRules[rule];

                if(isRuleHasValue) {
                    ruleFunction = ruleFunction(ruleInfo[1]);
                }

                if(Array.isArray(formRules[input.name])) {
                    formRules[input.name].push(ruleFunction);
                } else {
                    formRules[input.name] = [ruleFunction];
                }
            }
            // Lắng nghe sự kiện để validate
            input.onblur = handleValidate;
            input.oninput = handleClearError;
        }
        // Hàm thực hiện vali
        function handleValidate(event) {
            let rules = formRules[event.target.name];
            let errorMessage;
            for(let rule of rules) {
                errorMessage = rule(event.target.value)
                if(errorMessage) break;
            }

            // Nếu có lỗi thì hiển thị message lỗi ra UL
            if(errorMessage) {
                let formGroup = getFormGroupParent(event.target, '.form-group');
                if(formGroup) {
                    formGroup.classList.add('invalid');
                    let formMessage = formGroup.querySelector('.form-message');
                    if(formMessage) {
                        formMessage.innerText = errorMessage;
                    }
                }
            } 
            return !errorMessage;
        }

        function handleClearError (event) {
            let formGroup = getFormGroupParent(event.target, '.form-group');
            if(formGroup.classList.contains('invalid')) {
                formGroup.classList.remove('invalid');
                let formMessage = formGroup.querySelector('.form-message');
                if(formMessage) {
                    formMessage.innerText = '';
                }
            }
        }
    }  

    // Xử lý hành vi submit form
    formElement.onsubmit = function (event) {
        event.preventDefault();

        let inputs = formElement.querySelectorAll('[name][rules]');
        let isValid = true;
        for(var input of inputs) {
            console.log(input);
            if(!handleValidate({ target: input })) {
                isValid = false;
            } 
        }

        // Khi ko có lỗi thì submit form
        if(isValid === true) {
            if(typeof options.onSubmit === "function") {
                let getValuesFromInput = formElement.querySelectorAll('[name]');
                let formValues = [...getValuesFromInput].reduce(function(values, input) {
                    values[input.name] = input.value
                    return values;
                }, {});
                // Gọi lại hàm onSubmit và trả về kèm giá trị của form
                options.onSubmit(formValues);
                
            } else {
                formElement.submit();
            }
        }
    }
}