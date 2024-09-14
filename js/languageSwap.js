// Almacenar los textos originales en español (del HTML) al cargar la página
const originalTexts = {
    greeting: document.getElementById("greetingText").textContent,
    intro: document.getElementById("introText").textContent,
    contact: document.getElementById("contactText").textContent,
    viewWork: document.getElementById("viewWorkText").textContent
  };
  
  // Función para cambiar el idioma
  function setLanguage(lang) {
    if (lang === 'es') {
      // Restaurar los textos originales desde el HTML (español por defecto)
      document.getElementById("greetingText").textContent = originalTexts.greeting;
      document.getElementById("introText").textContent = originalTexts.intro;
      document.getElementById("contactText").textContent = originalTexts.contact;
      document.getElementById("viewWorkText").textContent = originalTexts.viewWork;
    } 
    
    else if (lang === 'en') {
      // Cargar el archivo JSON de inglés
      fetch('en.json')
        .then(response => response.json())
        .then(data => {
          document.getElementById("greetingText").textContent = data.greeting;
          document.getElementById("introText").textContent = data.intro;
          document.getElementById("contactText").textContent = data.contact;
          document.getElementById("viewWorkText").textContent = data.viewWork;
        });
    }
  }
  
  // Establecer un idioma predeterminado (en este caso, español ya está en el HTML)
  setLanguage('es');
  