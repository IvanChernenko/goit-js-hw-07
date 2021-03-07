const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let valueCounter = document.querySelector("#value").textContent;


decrementBtn.addEventListener('click', () => {
    valueCounter -= 1;
    console.log(valueCounter);
});

incrementBtn.addEventListener('click',  () =>  {
    valueCounter++;
    console.log(valueCounter);
});
