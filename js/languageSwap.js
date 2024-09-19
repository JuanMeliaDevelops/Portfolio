// Variable para rastrear si el cambio de idioma está en progreso
let isChangingLanguage = false;

// Función para obtener el valor de un parámetro de la URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Función para cambiar el idioma y actualizar el URL
function setLanguage(lang, updateURL = true) {
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
        document.querySelector(`.language[onclick="setLanguage('${lang}')"]`).classList.add('language-selected');

        // Actualizar la URL si es necesario
        if (updateURL) {
            const newUrl = new URL(window.location);
            newUrl.searchParams.set('lang', lang);
            window.history.pushState({}, '', newUrl); // Usar pushState en lugar de forzar recarga
        }

        // Ocultar el loader una vez que se complete el cambio de idioma
        hideLoader();
        isChangingLanguage = false;
    }, 500); // Simula un retraso de 0.5 segundos para mostrar el loader
}

// Redirigir a la URL con el idioma si no tiene el parámetro "lang"
document.addEventListener('DOMContentLoaded', () => {
    // Obtener el idioma de la URL si existe
    const urlLanguage = getQueryParam('lang');
    const savedLanguage = urlLanguage || localStorage.getItem('selectedLanguage') || 'es'; // Default 'es'

    // Aplicar el idioma guardado o de la URL
    if (savedLanguage !== (localStorage.getItem('selectedLanguage') || 'es')) {
        setLanguage(savedLanguage, false); // El segundo parámetro evita que se actualice el URL al cargar la página
    }

    // Aplicar la clase 'language-selected' al cargar la página
    document.querySelectorAll('.language').forEach(element => {
        element.classList.remove('language-selected');
    });
    
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
