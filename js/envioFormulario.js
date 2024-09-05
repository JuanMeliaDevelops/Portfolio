// Envio de Form Jquery con Alertas en Placeholders


$('#submit').click(function(){
  
    //Valores de inputs
    var name = $('#name').val();
    var email = $('#email').val();
    var subject = $('#msg_subject').val();
    var message = $('#message').val();

    //Validadores
    var validacionCorreo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

    var validado = 1;

    if(!validacionCorreo.test(email)){
         $('#email').val("");
        $('#email').attr('placeholder', 'Ingresa un correo electronico válido');
        $('#email').addClass('custom-placeholder');
        validado = 0;
    }

    if (name.length <= 5 ){
        $('#name').val("");
        $('#name').attr('placeholder', 'Ingresa tu nombre completo');
        $('#name').addClass('custom-placeholder');
        validado = 0;
    }

    if (subject.length <= 4 ){
         $('#msg_subject').val("");
        $('#msg_subject').attr('placeholder', 'Ingresa un asunto válido');
        $('#msg_subject').addClass('custom-placeholder');
        validado = 0;
    }
  

    if (message.length <=20 ){
       $('#message').val("");
        $('#message').attr('placeholder', 'Tu mensaje debe ser mas largo');
        $('#message').addClass('custom-placeholder');
        validado = 0;
    }

  
    //Ajax Formulario 

    var datosFormulario =  'name='+ name+ '&email=' + email + '&subject=' + subject +  '&message=' + message;

    if (validado == 1 ){

        $.ajax({
        
            url: "correo.php",
            type: "POST",
            data: datosFormulario,

            success: function (res) {
              if (parseInt(res) == 1){
                $('#msgSubmit').text('Tu mensaje ha sido enviado con exito!')
              } else{
                $('#msgSubmit').css('color','red').text('Ha ocurrido un error al enviar tu mensaje, porfavor intentalo de nuevo mas tarde.')
              }
            },

            error: function (res) {
                $('#msgSubmit').css('color','red').text('Ha ocurrido un error al enviar tu mensaje, porfavor intentalo de nuevo mas tarde.')
            }
        });

    }

    
    });

