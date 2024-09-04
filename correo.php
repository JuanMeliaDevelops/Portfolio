<?php

if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["subject"])  && isset($_POST["message"])) {

  if (!empty($_POST["name"]) && !empty($_POST["email"]) && !empty($_POST["subject"]) && !empty($_POST["message"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
    $contenido = "Formulario de contacto de Solariega," . "\r\n" . $name . " esta interesado/a." . "\r\n" . "Email: " . $email . "\r\n" . "Asunto: " . $subject . "\r\n" . $message;
    $destino = "info@solariega.com.ar";
    $asunto = "Solariega,  " . $name . " " . $subject;
    $header = "From: " . $email . "\r\n" . "reply: " . $email . "\r\n" . "X-Mailer: PHP/" . phpVersion();
    $mail = mail($destino, $asunto, $contenido, $header);




    if ($mail) {
      echo 1;
    } else {
      echo 0;
    }
  }
}

