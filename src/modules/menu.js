import sandwich from '../kebab-sandwich.jpeg';
import margarita from '../pizza-margarita.jpeg';
import würstel from '../pizza-würstel.jpeg';
import wrapped from '../wrapped-kebab.jpeg';
function setBtnActive(id) {
    const activeBtn = document.querySelector('.tab.active');
    if (activeBtn) activeBtn.classList.remove('active');
    const homeBtn = document.getElementById(id);
    homeBtn.classList.add('active');
}
  
function createFood(src, text, price, alt) {
    const food = document.createElement('div');
    food.classList.add('food');
    const img = document.createElement('img');
    img.src = src
    img.setAttribute('alt', alt);
  
    const description = document.createElement('div');
    description.classList.add('description');
  
    const foodName = document.createElement('h3');
    foodName.textContent = text;
  
    const foodPrice = document.createElement('h2');
    foodPrice.textContent = price;
  
    description.appendChild(foodName);
    description.appendChild(foodPrice);
  
    food.appendChild(img);
    food.appendChild(description);
    return food;
}
  
function loadMenu() {
    const content = document.getElementById('tab-content');
    content.classList.add('grid-lay');
    content.classList.remove('flex-lay');
  
    content.textContent = '';
    setBtnActive('Menu');
  
    const foods = [
      createFood(
        sandwich,
        'Sandwich Kebab',
        '4,5€',
        'Sandwich Kebab photo'
      ),
      createFood(
        wrapped,
        'Wrapped Kebab',
        '4,5€',
        'Wrapped Kebab photo'
      ),
      createFood(
        margarita,
        'Pizza Margarita',
        '5,5€',
        'Pizza Margarita photo'
      ),
      createFood(
        würstel,
        'Pizza Würstel',
        '6€',
        'Pizza Würstel photo'
      ),
    ];
  
    foods.forEach((food) => {
      content.appendChild(food);
    });
} 
  
  export default loadMenu;