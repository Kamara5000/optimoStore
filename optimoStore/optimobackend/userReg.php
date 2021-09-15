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


 if (isset($_FILES["user_name"])){

	
$f_name= $_POST['f_name'];
$l_name= $_POST['l_name'];
$user_name= $_POST['user_name'];
$user_address= $_POST['user_address'];
$user_password = $_POST['user_password']

// $fn = $_FILES["pic"]["name"];
// $b =$_FILES["pic"]["tmp_name"];
// $uploads ="uploads/";

//  //echo $fn;
// $movefile = move_uploaded_file($b, $uploads.$fn);

// 	if ($movefile) {
// 		echo "file moved successfulu";
// 	}

// 	else{
// 		echo "error";
// 	}


	$con = new mysqli("localhost","root","","optimo") or die("error establishing connection");
	 $query = "insert into users(`user_id`, `first_name`, `last_name`, `user_name`, `user_address`, `user_password`) values('', '$f_name', '$l_name', '$user_name', '$user_address', '$user_password');";

	$res = $con->query($query);
	if($res){
		echo "success";
	}

	else {
		echo "error";
	}

}
	

	
	

?>