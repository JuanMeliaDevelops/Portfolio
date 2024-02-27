

// Work Cards 

document.addEventListener('DOMContentLoaded', function () {
    const categories = document.querySelectorAll('.cats-categories li');
    const workCards = document.querySelectorAll('.work-container .work-cards');
    
    // Función para mostrar work-cards de la categoría seleccionada
    function showSelectedCategory(selectedCategory) {
        workCards.forEach(function (card) {
            const cardCategories = card.getAttribute('data-category').split(' ');
    
            if (cardCategories.includes(selectedCategory)) {
                card.classList.add('animate__bounceIn');
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
                card.classList.remove('animate__bounceIn');
            }
        });
    }
    
    // Mostrar solo las work-cards 'destacadas' al cargar la página
    showSelectedCategory('destacado');
    
    // Escuchar clics en las categoríass
    categories.forEach(function (category) {
        document.getElementById('categoryDestacados').classList.add('selected-category');
    
        category.addEventListener('click', function () {
            // Eliminar la clase 'selected' de todos los elementos li
            categories.forEach(li => {
                
    
                li.classList.remove('selected-category');
            });
    
            // Agregar la clase 'selected' solo al elemento clickeado
    
            document.getElementById('categoryDestacados').classList.remove('selected-category');
            this.classList.add('selected-category');
    
            const selectedCategory = this.getAttribute('data-category');
    
            // Mostrar solo las work-cards correspondientes a la categoría seleccionada
            showSelectedCategory(selectedCategory);
    
            // Reanudar la animación para todas las work-cards que coincidan con la nueva categoría
            workCards.forEach(function (card) {
                const cardCategories = card.getAttribute('data-category').split(' ');
                if (cardCategories.includes(selectedCategory)) {
                    card.classList.remove('animate__bounceIn');
                    setTimeout(() => {
                        card.classList.add('animate__bounceIn');
                    }, 100);
                }       
            });
        });
    });
    });
    
    
    
    // Función para mostrar work-cards de la categoría seleccionada
    function showSelectedCategory(selectedCategory) {
        workCards.forEach(function (card) {
            const cardCategories = card.getAttribute('data-category').split(' ');
    
            if (cardCategories.includes(selectedCategory)) {
                card.classList.add('animate__bounceIn');
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
                card.classList.remove('animate__bounceIn');
            }
        });
    }
    
    