const refs = {
    inputRef: document.querySelector('#name-input'),
    outputRef: document.querySelector('#name-output'),
};
refs.inputRef.addEventListener('input', onOutputChange);
function onOutputChange(event) {
    refs.outputRef.textContent = event.currentTarget.value === ''
        ?  'незнакомец'
        : event.currentTarget.value;
 };

