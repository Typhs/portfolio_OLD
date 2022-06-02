<?php 

ini_set('max_execution_time', '320');


$x = $_POST['datatime'];
  
file_put_contents("time.txt",$x);

?>