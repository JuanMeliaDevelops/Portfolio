/* // Función para actualizar el URL sin recargar la página
function updateUrlLanguage(lang) {
  // Obtener la URL actual
  const currentUrl = window.location.href;

  // Crear un objeto URL para modificar el parámetro
  const url = new URL(currentUrl);
  
  // Actualizar o añadir el parámetro "lang"
  url.searchParams.set('lang', lang);

  // Usar history.pushState() para cambiar la URL sin recargar la página
  window.history.pushState({}, '', url);
}
 */


// Función para cambiar el idioma y la clase de idioma seleccionado
function setLanguage(lang) {
// Actualizar el idioma
if (lang === 'es') {
  // Restaurar los textos originales desde el HTML (español por defecto)
  document.getElementById("greetingText").textContent = originalTexts.greeting;
  console.log(originalTexts.greeting)

} else if (lang === 'en') {
  // Cargar el archivo JSON de inglés
  fetch('en.json')
    .then(response => response.json())
    .then(data => {
      document.getElementById("greetingText").textContent = data.greeting;

    });
}



// Guardar la selección de idioma en localStorage
localStorage.setItem('selectedLanguage', lang);

// Cambiar la clase para resaltar el idioma seleccionado
const languageItems = document.querySelectorAll(".languages .language");

languageItems.forEach(item => {
  if (item.textContent === lang.toUpperCase()) {
    item.classList.add("language-selected");
  } else {
    item.classList.remove("language-selected");
  }
});

// Actualizar el URL sin recargar la página
updateUrlLanguage(lang);
}

// Verificar si hay un idioma guardado en localStorage o en la URL
document.addEventListener('DOMContentLoaded', () => {
// Primero, revisamos si hay un parámetro `lang` en la URL
const urlLanguage = getUrlParameter('lang');

if (urlLanguage) {
  // Si existe el parámetro en la URL, usamos ese idioma
  setLanguage(urlLanguage);
} else {
  // Si no, revisamos si hay un idioma guardado en localStorage
  const savedLanguage = localStorage.getItem('selectedLanguage');
  
  if (savedLanguage) {
    setLanguage(savedLanguage);
  } else {
    // Por defecto, cargamos el español
    setLanguage('es');
  }
}
});
