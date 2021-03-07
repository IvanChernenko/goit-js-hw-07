let counterValue = 0;
const spanRef = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
function decrement() { 
    counterValue += 1
    spanRef.textContent = counterValue
};
function increment() { 
    counterValue -= 1
    spanRef.textContent = counterValue
};
decrementBtn.addEventListener('click', increment);
incrementBtn.addEventListener('click', decrement);
