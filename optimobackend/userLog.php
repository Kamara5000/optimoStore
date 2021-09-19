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

	
	$query = "SELECT * FROM users WHERE user_name='$user_name'";
	$fetch_from_db =$conn->prepare( "SELECT * FROM users WHERE user_name= ?");
    $b = $fetch_from_db->bind_param('s', $user_name);
  		$c = $fetch_from_db->execute();
   		$a = $fetch_from_db->get_result();
	
 		if ($a) {
			
			$result= $a->fetch_assoc();
			//$user = mysqli_fetch_all($result, MYSQLI_ASSOC);
			$pass = $result['user_password'];
			 $verify = password_verify($user_pass, $pass);
			 if ($verify) {
			$response = ["success"=>true, "message"=>"You have succesfully logged in"]; 			
 			//echo json_encode($response);

 			$query = "SELECT * FROM users WHERE user_name='$user_name'";

 			$result = mysqli_query($conn, $query);


 			$user = mysqli_fetch_all($result, MYSQLI_ASSOC);

 			array_push($user,$response);
 			//var_dump($products);

 			echo json_encode($user);
			 }else{
				$response = ["success"=>false, "message"=>"Invalid Login Details"]; 
			 
				$user = [''];
				array_push($user, $response);			
				echo json_encode($user);
			 }

 			

 		}
 		else{
 			$response = ["success"=>false, "message"=>"Invalid Login Details"]; 
			 
			 $user = [''];
			 array_push($user, $response);			
 			echo json_encode($user);
 			// echo json_encode("error");
 		}
}

?>