<?php

$fullname = isset($_POST["fullname"]) ? $_POST["fullname"] : "";
$email = isset($_POST["email"]) ? $_POST["email"] : "";
$mobile = isset($_POST["mobile"]) ? $_POST["mobile"] : "";
$subject = isset($_POST["subject"]) ? $_POST["subject"] : "";
$message = isset($_POST["message"]) ? $_POST["message"] : "";

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

// Define default "From" address with valid values
$defaultFromEmail = "dexnetnetworks@gmail.com";
$defaultFromName = "Admin";

$mail = new PHPMailer(true);

//SMTP Debug
//$mail->SMTPDebug = SMTP::DEBUG_SERVER;

$mail->isSMTP();
$mail->SMTPAuth = true;

$mail->Host = "smtp.gmail.com";
$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail->Port = 587;

$mail->Username = "dexnetnetworks@gmail.com";
$mail->Password = "fbuk bzug quny guqv";

// Validate email before setting the "From" address
$isValidEmail = filter_var($email, FILTER_VALIDATE_EMAIL);
if ($isValidEmail) {
    $mail->setFrom($email, $fullname);
} else {
    $mail->setFrom($defaultFromEmail, $defaultFromName);
}

$mail->addAddress("dexnetnetworks@gmail.com", "Admin");

$mail->Subject = $subject;

$mail->Body = "
Name: $fullname
Email: $email
Mobile: $mobile
Subject: $subject
Message:
$message
";

if ($mail->send()) {
    echo "Email sent successfully!";
  } else {
    echo "Error sending email: " . $mail->ErrorInfo;
  }

?>
