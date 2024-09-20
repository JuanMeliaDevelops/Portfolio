// Variable para rastrear si el cambio de idioma está en progreso
let isChangingLanguage = false;

// -Loader
// Función para mostrar el loader
function showLoader() {
    document.getElementById('loader').style.display = 'block';
    document.body.classList.add('loaderBodyHide');
}

// Función para ocultar el loader
function hideLoader() {
    document.getElementById('loader').style.display = 'none';
    document.body.classList.remove('loaderBodyHide');  
}

// -Language Swap
// Función para cambiar el idioma
function setLanguage(lang) {
    // Si ya se está cambiando de idioma o el idioma ya está seleccionado, salir de la función
    const currentLanguage = localStorage.getItem('selectedLanguage') || 'es';
    if (isChangingLanguage || currentLanguage === lang) return;

    // Establecer la variable para indicar que el cambio está en progreso
    isChangingLanguage = true;

    showLoader(); // Mostrar el loader cuando se inicia el cambio de idioma

    setTimeout(() => {
        // Obtener todos los elementos que tienen los atributos de traducción
        const translatableElements = document.querySelectorAll("[data-lang-en]");

        // Recorrer los elementos y cambiar el texto según el idioma
        translatableElements.forEach(element => {
            if (lang === 'es') {
                // Restaurar el texto original del HTML para el español
                element.innerHTML = element.getAttribute('data-original') || element.innerHTML;
            } else if (lang === 'en') {
                // Usar la traducción en inglés
                element.setAttribute('data-original', element.innerHTML); // Guardar el texto original en data-original
                element.innerHTML = element.getAttribute('data-lang-en');
            }
        });

        // Guardar la selección de idioma en localStorage
        localStorage.setItem('selectedLanguage', lang);

        // Aplicar la clase 'language-selected' según el idioma seleccionado
        document.querySelectorAll('.language').forEach(element => {
            element.classList.remove('language-selected');
        });

        // Agregar 'language-selected' al idioma seleccionado
        if (lang === 'es') {
            document.querySelector('.language[onclick="setLanguage(\'es\')"]').classList.add('language-selected');
        } else if (lang === 'en') {
            document.querySelector('.language[onclick="setLanguage(\'en\')"]').classList.add('language-selected');
        }

        hideLoader(); // Ocultar el loader una vez que se complete el cambio de idioma

        // Indicar que el cambio de idioma ha finalizado
        isChangingLanguage = false;
    }, 500); // Reducir el retraso para mejorar la experiencia de usuario
}

// Comprobar el idioma almacenado en localStorage al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es'; // Idioma por defecto 'es'

    // Aplicar la clase 'language-selected' al idioma seleccionado
    document.querySelectorAll('.language').forEach(element => {
        element.classList.remove('language-selected');
    });
    
    if (savedLanguage === 'es') {
        document.querySelector('.language[onclick="setLanguage(\'es\')"]').classList.add('language-selected');
    } else if (savedLanguage === 'en') {
        document.querySelector('.language[onclick="setLanguage(\'en\')"]').classList.add('language-selected');
    }

    // Aplicar el idioma guardado al cargar la página sin recargar innecesariamente
    const translatableElements = document.querySelectorAll("[data-lang-en]");
    translatableElements.forEach(element => {
        if (savedLanguage === 'es') {
            // Restaurar el texto original del HTML para el español
            element.innerHTML = element.getAttribute('data-original') || element.innerHTML;
        } else if (savedLanguage === 'en') {
            // Usar la traducción en inglés
            element.setAttribute('data-original', element.innerHTML); // Guardar el texto original en data-original
            element.innerHTML = element.getAttribute('data-lang-en');
        }
    });
});
