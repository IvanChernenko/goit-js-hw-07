const inputRangeEl = document.querySelector('input[id=font-size-control]');
const spanEl = document.querySelector('span[id=text]');
inputRangeEl.addEventListener('input', onMoveInput)
function onMoveInput(event) {
    spanEl.style.fontSize = `${event.currentTarget.value}px `
    console.log(event);
};