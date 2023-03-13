 

<?php

if($_POST["message"]) {

mail("arun36824@gmail.com", "Here is the subject line",

$_POST["Message for the sender"]. "From: arun36824@email.address");

}

?>

