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





/* Scroll Animation */

/* 
        // Función para realizar el desplazamiento con efecto de latigazo
        function scrollWithEffect(targetId) {
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                // Obtener la posición de la sección
                const targetPosition = targetElement.offsetTop;

                // Aplicar el efecto de latigazo
                document.body.classList.add('scroll-effect', 'scrolling');
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Eliminar el efecto de latigazo después de un tiempo
                setTimeout(() => {
                    document.body.classList.remove('scrolling');
                }, 500); // Debe coincidir con la duración de la animación
            }
        }

        // Manejar clics en enlaces de navegación
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(event) {
                event.preventDefault(); // Evitar el comportamiento por defecto del enlace
                const targetId = this.getAttribute('href').substring(1);
                scrollWithEffect(targetId);
            });
        });
 */