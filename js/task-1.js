const ulCategories = document.querySelectorAll('.item');
console.log(`В списке ${ulCategories.length} категории.`)

const liName = ulCategories.forEach(element => console.log('Категория:', element.querySelector('h2').textContent,',', `Количество элементов ${element.querySelectorAll('li').length}`));


