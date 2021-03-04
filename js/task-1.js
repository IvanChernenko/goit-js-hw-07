const ulCategories = document.querySelectorAll('.item');
console.log(`В списке ${ulCategories.length} категории.`)

const liName = ulCategories.forEach(console.log('Категория:',element => element.querySelector('h2').textContent));
console.log('Категория:', liName)

