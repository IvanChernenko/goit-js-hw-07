const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const ingredientsEl = document.querySelector('#ingredients');

const elements = ingredients.map(ingredient => {
    const liEl = document.createElement('li');
    liEl.textContent = `${ingredient}`;

    return liEl
});

console.log(elements);

ingredientsEl.append(...elements);
