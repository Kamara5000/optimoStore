<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers: *");


$request = file_get_contents("php://input");


if (isset($request)&& !empty($request)) {
	
	$data = json_decode($request);
	// var_dump($data);

	$user_name = $data->username;
	$user_pass = $data->password;



$conn = mysqli_connect('localhost','root','', 'optimo');

 	if (mysqli_connect_errno()) {
 		echo "Failed to connect to Database". mysqli_connect_errno();
 	};


 	$query = "SELECT * FROM users WHERE user_name='$user_name' AND user_password='$user_pass'";

   $result = mysqli_query($conn, $query);

 		if (mysqli_num_rows($result)==1) {
 			// echo "you have succesfully log in";
 			// $log = mysqli_fetch_all($result, MYSQLI_ASSOC);
 			// echo json_encode($log);


 			$response = ["success"=>true, "message"=>"You have succesfully logged in"]; 			
 			//echo json_encode($response);

 			$query = "SELECT * FROM users WHERE user_name='$user_name'";

 			$result = mysqli_query($conn, $query);


 			$products = mysqli_fetch_all($result, MYSQLI_ASSOC);

 			array_push($products,$response);
 			//var_dump($products);

 			echo json_encode($products);

 		}
 		else{
 			$response = ["success"=>false, "message"=>"Invalid Login Details"]; 			
 			echo json_encode($response);
 			// echo json_encode("error");
 		}
}

?>