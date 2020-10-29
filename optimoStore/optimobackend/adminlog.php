<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers: *");


$request = file_get_contents("php://input");


if (isset($request)&& !empty($request)) {
	
	$data = json_decode($request);
	// var_dump($data);

	$user_name = $data->username;
	$user_pass = md5($data->password);



$conn = mysqli_connect('localhost','root','', 'optimo');

 	if (mysqli_connect_errno()) {
 		echo "Failed to connect to Database". mysqli_connect_errno();
 	};


 	$query = "SELECT * FROM admin WHERE admin_username='$user_name' AND admin_password='$user_pass'";

   $result = mysqli_query($conn, $query);

 		if (mysqli_num_rows($result)==1) {
 			// echo "you have succesfully log in";
 			// $log = mysqli_fetch_all($result, MYSQLI_ASSOC);
 			// echo json_encode($log);

 			$response = ["success"=>true, "message"=>"You have succesfully logged in"]; 			
 			echo json_encode($response);
 		}
 		else{
 			$response = ["success"=>false, "message"=>"Invalid Login Details"]; 			
 			echo json_encode($response);
 			// echo json_encode("error");
 		}
 	//$log = mysqli_fetch_all($result, MYSQLI_ASSOC);


 			//var_dump($log);

 			//echo json_encode($log);

 	//mysqli_free_result($result);

 	//mysqli_close($conn);


	

	
	

//$request = file_get_contents("php://input");


//if (isset($request)&& !empty($request)) {
	
	//$data = json_decode($request);
//	var_dump($data);

	// $p_name = $data->product_name;
	// $p_price = $data->product_price;
	// $p_details = $data->product_details;
	// $p_available = $data->no_available;

	//$con = new mysqli("localhost","root","","optimo") or die("error establishing connection");
	 //$query = "insert into admin(id,admin_username,admin_password,admin_email) values('', 'ibrahim', md5('ibrahim'), 'muhammedibrahim387@gmail.com');";

	//$res = $con->query($query);
// 	if($res){
// 		echo "success";
// 	}

// 	else {
// 		echo "error";
// 	}

 };
	

	
	

?>