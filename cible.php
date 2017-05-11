<p>
<?php

if (isset($_POST['name']) AND strlen($_POST['name'])<=20 AND $_POST['name'] != NULL AND preg_match('/^[_a-zA-Z0-9-]+$/', $_POST['name'])){

 echo strtolower(strip_tags($_POST['name']));
}
else {
  echo 'NAME NON VALIDE';
}

?>
</p>

<p>
<?php
if (isset($_POST['email']) AND strlen($_POST['email'])<=20 AND $_POST['email'] != NULL AND preg_match('/^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})+$/', $_POST['email'])){

  echo strtolower(strip_tags($_POST['email']));
  }
  else {
  echo 'MAIL NON VALIDE';
  }

 ?>
 </p>
