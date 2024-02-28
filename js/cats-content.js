


// Cats Content - Sobre Mi ----------------
const categories = document.querySelectorAll('.sobreMi-cats button');
const contentCard = document.querySelectorAll('.sobreMi-cats-container a');


function showSelectedCategory(selectedCategory) {
    contentCard.forEach(function (card) {
        const categories = card.getAttribute('data-category').split(' ');

        if (categories.includes(selectedCategory)) {
            card.classList.add('animate__fadeIn');
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
            card.classList.remove('animate__fadeIn');
        }
    });
}



// Escuchar clics en las categoríass
categories.forEach(function (category) {



    category.addEventListener('click', function () {
        categories.forEach(button => {

            button.classList.remove('selected-button');
        });

        this.classList.add('selected-button');

        const selectedCategory = this.getAttribute('data-category');

        // Mostrar solo las work-cards correspondientes a la categoría seleccionada
        showSelectedCategory(selectedCategory);

        // Reanudar la animación para todas las cards que coincidan con la nueva categoría
        workCards.forEach(function (card) {
            const cardCategories = card.getAttribute('data-category').split(' ');
            if (cardCategories.includes(selectedCategory)) {
                card.classList.remove('animate__fadeIn');
                setTimeout(() => {
                    card.classList.add('animate__fadeIn');
                }, 100);
            }
        });
    });
});



