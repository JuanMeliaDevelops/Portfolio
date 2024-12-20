$('#submit').click(enviarForm);

// Funciona al apretar ENTER
$('.container-form input, .container-form textarea').keypress(function (event) {
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

    // Validaciones
    if (!validacionCorreo.test(email)) {
        $('#email').val('');
        $('#email').attr('placeholder', messages.email);
        $('#email').addClass('custom-placeholder');
        validado = 0;
    }

    if (name.length <= 5) {
        $('#name').val('');
        $('#name').attr('placeholder', messages.name);
        $('#name').addClass('custom-placeholder');
        validado = 0;
    }

    if (subject.length <= 4) {
        $('#msg_subject').val('');
        $('#msg_subject').attr('placeholder', messages.subject);
        $('#msg_subject').addClass('custom-placeholder');
        validado = 0;
    }

    if (message.length <= 20) {
        $('#message').val('');
        $('#message').attr('placeholder', messages.message);
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
                    $('#msgSubmit').text(messages.success);

                    // Resetear formulario
                    resetFormPlaceholders(currentLanguage);

                    // Quitar estilos de error
                    $('.custom-placeholder').removeClass('custom-placeholder');
                } else {
                    $('#msgSubmit').css('color', 'red').text(messages.error);
                }
            },

            error: function () {
                $('#msgSubmit').css('color', 'red').text(messages.error);
            }
        });
    }
}

// Función para resetear placeholders basados en idioma
function resetFormPlaceholders(language) {
    $('#form')[0].reset(); // Reinicia los valores del formulario

    // Actualiza los placeholders según el idioma
    $('#name').attr(
        'placeholder',
        language === 'en' ? $('#name').data('lang-en') : 'Nombre \\ Empresa'
    );
    $('#email').attr(
        'placeholder',
        language === 'en' ? $('#email').data('lang-en') : 'Email'
    );
    $('#msg_subject').attr(
        'placeholder',
        language === 'en' ? $('#msg_subject').data('lang-en') : 'Asunto'
    );
    $('#message').attr(
        'placeholder',
        language === 'en' ? $('#message').data('lang-en') : 'Mensaje'
    );
}
