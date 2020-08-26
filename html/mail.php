
<?php
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$select = $_POST['select'];
$file = $_POST['file'];
$message = $_POST['message'];
$formcontent="From: $name \n email: $email \n phone: $phone \n select: $select \n select: $select \n file: $file \n  Message: $message";
$recipient = "sajib.khan682@gmail.com";
$subject = "New Mail";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
header("location: thank-you.html")
?> 












