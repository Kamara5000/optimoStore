<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers: *");


if (isset($_POST["id"])) {

    $p_id= $_POST['id'];

	$con = new mysqli("localhost","root","","optimo") or die("error establishing connection");
	
    $query = "DELETE FROM `adminpost` WHERE `adminpost`.`product_id` = $p_id";
	$res = $con->query($query);
	if($res){
		echo "success";
	}

	else {
		echo "error, unable to delete";
	}

}else{
    echo ('error, no id');
}
	

	
	

?>