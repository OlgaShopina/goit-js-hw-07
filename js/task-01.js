
const listCategories = document.querySelector('#categories')
const listItems = listCategories.querySelectorAll('.item');


console.log(`В списке ${listCategories.children.length} категории.`); 


listItems.forEach(elem => {
    console.log(`Категория: ${elem.querySelector('h2').textContent}`);
    console.log(`Количество элементов: ${elem.querySelectorAll('li').length}`);
});