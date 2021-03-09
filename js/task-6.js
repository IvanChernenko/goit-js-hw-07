const inputRef = document.getElementById('validation-input');
const dataLengthRef = Number(inputRef.getAttribute('data-length'))
inputRef.addEventListener('blur', onInputBlur);
function onInputBlur() {
    if (inputRef.value.length !== dataLengthRef) {
        inputRef.classList.add('invalid')
        inputRef.classList.remove('valid')
    } else {
        inputRef.classList.add('valid')
        inputRef.classList.remove('invalid')
    }
};