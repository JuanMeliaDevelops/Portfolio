
/* Dropdown home lang  */

const dropdown = document.getElementById("lang-dropdown");
const menuDropdown =  document.getElementById("lang-dropdown-menu");

document.addEventListener('click', function(event) {
if (dropdown.contains(event.target)){
menuDropdown.style.display = 'block';
}
else {
menuDropdown.style.display = 'none';
}

}
);


/* Scroll Down a trabajos  Animacion */

const scrollDown = document.getElementById("scroll-down");

scrollDown.addEventListener('mouseenter', function(event){
scrollDown.classList.add("animate__animated", "animate__bounce");
} );

scrollDown.addEventListener('mouseleave', function(event) {

setTimeout(function() {
scrollDown.classList.remove("animate__animated", "animate__bounce");
}, 1200); 
});



/* Mostrar Categorias Work-cards */

document.addEventListener('DOMContentLoaded', function () {
const categories = document.querySelectorAll('.work-categories li');
const workCards = document.querySelectorAll('.work-container .work-cards');

// Función para mostrar work-cards de la categoría seleccionada
function showSelectedCategory(selectedCategory) {
workCards.forEach(function (card) {
const cardCategories = card.getAttribute('data-category').split(' ');
card.style.display = cardCategories.includes(selectedCategory) ? 'block' : 'none';
});
}

// Mostrar las work-cards destacadas al cargar la página
showSelectedCategory('destacados');

// Escuchar clics en las categorías
categories.forEach(function (category) {
category.addEventListener('click', function () {

    // Elimina clase a todos los li categories
categories.forEach(li => {
    li.classList.remove('selected-category');
    });
    // Agregar la clase 'selected' solo al elemento clickeado
    this.classList.add('selected-category');
    
const selectedCategory = this.getAttribute('data-category');

// Ocultar todas las work-cards
workCards.forEach(function (card) {
    card.style.display = 'none';
});

// Mostrar solo las work-cards correspondientes a la categoría seleccionada
showSelectedCategory(selectedCategory);
});
});
});
