<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers: *");


//$request = file_get_contents("php://input");


	// $data = json_decode($request);
	// var_dump($data);

	// $p_name = $data->product_name;
	// $p_price = $data->product_price;
	// $p_details = $data->product_details;
	// $p_available = $data->no_available;


 if (isset($_FILES["pic"])){

	
$p_name= $_POST['product_name'];
$p_price= $_POST['product_price'];
$p_details= $_POST['product_details'];
$p_available= $_POST['no_available'];

$fn = $_FILES["pic"]["name"];
$b =$_FILES["pic"]["tmp_name"];
$uploads ="uploads/";

 //echo $fn;
$movefile = move_uploaded_file($b, $uploads.$fn);

	if ($movefile) {
		echo "file moved successfulu";
	}

	else{
		echo "error";
	}


	$con = new mysqli("localhost","root","","optimo") or die("error establishing connection");
	 $query = "insert into adminpost(product_name,product_price,product_available,product_details,product_image_name) values('$p_name', '$p_price', '$p_available', '$p_details', '$fn');";

	$res = $con->query($query);
	if($res){
		echo "success";
	}

	else {
		echo "error";
	}

}
	

	
	

?>