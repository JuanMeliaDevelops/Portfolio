// Variable para rastrear si el cambio de idioma está en progreso
let isChangingLanguage = false;

// Función para cambiar el idioma
function setLanguage(lang) {
    // Si ya se está cambiando de idioma o el idioma ya está seleccionado, salir de la función
    const currentLanguage = localStorage.getItem('selectedLanguage') || 'es';
    if (isChangingLanguage || currentLanguage === lang) return;

    // Establecer la variable para indicar que el cambio está en progreso
    isChangingLanguage = true;

    // Mostrar el loader
    showLoader();

    setTimeout(() => {
        // Obtener todos los elementos que tienen los atributos de traducción
        const translatableElements = document.querySelectorAll("[data-lang-en]");

        // Recorrer los elementos y cambiar el texto según el idioma
        translatableElements.forEach(element => {
            if (lang === 'es') {
                element.innerHTML = element.getAttribute('data-original') || element.innerHTML;
            } else if (lang === 'en') {
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

        // Agregar la clase 'language-selected' al idioma seleccionado
        document.querySelector(`.language[onclick="setLanguage('${lang}')"]`).classList.add('language-selected');

        // Ocultar el loader una vez que se complete el cambio de idioma
        hideLoader();
        isChangingLanguage = false;
    }, 500); // Simula un retraso de 0.5 segundos para mostrar el loader
}

// Al cargar la página, leer el idioma del localStorage
document.addEventListener('DOMContentLoaded', () => {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'es'; // Default 'es'

    // Aplicar el idioma guardado
    setLanguage(savedLanguage);

    // Aplicar la clase 'language-selected' al cargar la página
    document.querySelectorAll('.language').forEach(element => {
        element.classList.remove('language-selected');
    });

    // Asegúrate de que el elemento correcto tenga la clase 'language-selected'
    if (savedLanguage === 'es') {
        document.querySelector('.language[onclick="setLanguage(\'es\')"]').classList.add('language-selected');
    } else if (savedLanguage === 'en') {
        document.querySelector('.language[onclick="setLanguage(\'en\')"]').classList.add('language-selected');
    }
});

// Funciones de Loader (ejemplo simple)
function showLoader() {
    document.getElementById('loader').style.display = 'block';
    document.body.classList.add('loaderBodyHide');
}

function hideLoader() {
    document.getElementById('loader').style.display = 'none';
    document.body.classList.remove('loaderBodyHide');
}
