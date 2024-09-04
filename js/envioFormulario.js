function validacionTelefono(event) {
    if(event.charCode >= 48 && event.charCode <= 57){
      return true;
     };
   
     return false; 
}


$('#submit').click(function(){
  
    
    //Resetar alertas
    $('#alertaName').css('display','none')
    $('#alertaEmail').css('display','none')
    $('#alertaMessage').css('display','none')
    $('#alertaSubject').css('display','none')
    $('#msgSubmit').css('color','#546E7A').text('')

    //Valores de inputs
    var name = $('#name').val();
    var email = $('#email').val();
    var subject = $('#msg_subject').val();
    var message = $('#message').val();

    //Validadores
    var validacionCorreo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

    var validado = 1;

    if(!validacionCorreo.test(email)){
        $('#alertaEmail').css('display','block').text('Ingresa un correo electronico valido');
        validado = 0;

    }

    if (name.length <= 5 ){
        $('#alertaName').css('display','block').text('Ingresa tu nombre completo');
        validado = 0;
    }

    if (subject.length <= 4 ){
        $('#alertaSubject').css('display','block').text('Ingresa un asunto valido');
        validado = 0;
    }
  

    if (message.length <=20 ){
        $('#alertaMessage').css('display','block').text('Tu mensaje debe ser mas largo');
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
                $('#msgSubmit').css('color','red').text('Ha ocurrido un error al enviar tu mensaje, porfavor intenta de nuevo.')
              }
            },

            error: function (res) {
                $('#msgSubmit').css('color','red').text('Ha ocurrido un error al enviar tu mensaje, porfavor intenta de nuevo.')
            }
        });

    }

    
    });

