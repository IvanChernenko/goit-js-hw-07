// const inputRef = document.getElementById('validation-input');
// const dataLengthRef = Number(inputRef.getAttribute('data-length'))
// inputRef.addEventListener('blur', onInputBlur);
// function onInputBlur() {
//     if (inputRef.value.length !== dataLengthRef) {
//         inputRef.classList.add('invalid')
//         inputRef.classList.remove('valid')
//     } else {
//         inputRef.classList.add('valid')
//         inputRef.classList.remove('invalid')
//     }
// };

const inputRef = document.getElementById('validation-input');
 
const validNumber = inputRef.getAttribute('data-length')
 
const updateClass = (addClass, remClass) => {
    inputRef.classList.remove(`${remClass}`);
    inputRef.classList.add(`${addClass}`);
};

const onInputChange = e => {
    if (e.target.value.length === Number(validNumber)) {
        updateClass('valid', 'invalid')
    } else {
        updateClass('invalid', 'valid')
    }
}

inputRef.addEventListener('input', onInputChange);