$('#submit').click(enviarForm);

// Funciona al apretar ENTER
$('.container-form input, .container-form textarea').keypress(function(event) {
    if (event.which === 13) {
        event.preventDefault();
        enviarForm();
    }
});

// Función de envío de formulario
function enviarForm() {
    // Valores de inputs
    var name = $('#name').val();
    var email = $('#email').val();
    var subject = $('#msg_subject').val();
    var message = $('#message').val();

    // Validadores
    var validacionCorreo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
    var validado = 1;

    // Obtener el idioma seleccionado
    const currentLanguage = localStorage.getItem('selectedLanguage') || 'es';

    // Mensajes de validación en diferentes idiomas
    const validationMessages = {
        es: {
            email: 'Ingresa un correo electrónico válido',
            name: 'Ingresa tu nombre completo',
            subject: 'Ingresa un asunto válido',
            message: 'Tu mensaje debe ser más largo',
            success: 'Tu mensaje ha sido enviado con éxito!',
            error: 'Ha ocurrido un error al enviar tu mensaje, por favor inténtalo de nuevo más tarde.'
        },
        en: {
            email: 'Enter a valid email address',
            name: 'Enter your full name',
            subject: 'Enter a valid subject',
            message: 'Your message must be longer',
            success: 'Your message has been successfully sent!',
            error: 'An error occurred while sending your message, please try again later.'
        }
    };

    // Seleccionar los mensajes de validación según el idioma
    const messages = validationMessages[currentLanguage];

    if (!validacionCorreo.test(email)) {
        $('#email').val('');
        $('#email').attr('placeholder', messages.email);  // Cambiar placeholder basado en idioma
        $('#email').addClass('custom-placeholder');
        validado = 0;
    }

    if (name.length <= 5) {
        $('#name').val('');
        $('#name').attr('placeholder', messages.name);  // Cambiar placeholder basado en idioma
        $('#name').addClass('custom-placeholder');
        validado = 0;
    }

    if (subject.length <= 4) {
        $('#msg_subject').val('');
        $('#msg_subject').attr('placeholder', messages.subject);  // Cambiar placeholder basado en idioma
        $('#msg_subject').addClass('custom-placeholder');
        validado = 0;
    }

    if (message.length <= 20) {
        $('#message').val('');
        $('#message').attr('placeholder', messages.message);  // Cambiar placeholder basado en idioma
        $('#message').addClass('custom-placeholder');
        validado = 0;
    }

    // Envío Ajax del formulario si está validado
    var datosFormulario = 'name=' + name + '&email=' + email + '&subject=' + subject + '&message=' + message;

    if (validado == 1) {
        $.ajax({
            url: 'correo.php',
            type: 'POST',
            data: datosFormulario,

            success: function (res) {
                if (parseInt(res) == 1) {
                    $('#msgSubmit').text(messages.success);  // Mensaje de éxito basado en idioma
                } else {
                    $('#msgSubmit').css('color', 'red').text(messages.error);  // Mensaje de error basado en idioma
                }
            },
            error: function (res) {
                $('#msgSubmit').css('color', 'red').text(messages.error);  // Mensaje de error basado en idioma
            }
        });
    }
}
