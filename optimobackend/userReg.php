<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers: *");




// 			if (isset($_POST['submit'])) {
// 				if (!empty($_POST['f_name'])){  

// 		$fName= $_POST['f_name'];
// 
// 	 	$conn = mysqli_connect('localhost','root','', 'optimo');

//  	if (mysqli_connect_errno()) {
//  		echo "Failed to connect to Database". mysqli_connect_errn$lName= $_POST['l_name'];
// $userName= $_POST['userName'];
// $userAddress= $_POST['user_address'];
// $userPassword = md5($_POST['user_password']);

//  	};


//  	$query = "insert into users(first_name, last_name, user_name, user_address, user_password) values('$fName', '$lName', '$userName', '$userAddress', '$userPassword');";

//    $result = mysqli_query($conn, $query);

//    		 if($result){

// 			$response = ["success"=>true, "message"=>"You have succesfully register"]; 			
//  			echo json_encode($response);
//  		}
//  		else{
//  			$response = ["success"=>false, "message"=>"Invalid  Details"]; 			
//  			echo json_encode($response);
//  			// echo json_encode("error");
//  		}

	 

	 
// }

// else{
// 				$response = ["invalid"=>true, "message"=>"Invalid  Details"]; 			
//             echo json_encode($response);
// 				}
// 			}



			$hostName = 'localhost';
			$dbuserName = 'root';
			$password = '';
			$dataBaseName = 'optimo';


			$con = new mysqli($hostName, $dbuserName, $password, $dataBaseName);
				if($con->connect_error){
					die('unable to connect'. $con->connect_error);
				 }
				 //else{
				// 	echo "connect successfully";
				// }


			

				$lName= $_POST['l_name'];
 				$userName= $_POST['userName'];
 				$userAddress= $_POST['user_address'];
				 $userPassword = $_POST['user_password'];
				 $fName= $_POST['f_name'];


		 	$checkDatabase = "SELECT * FROM users WHERE  user_name = '$userName'";
		 	$confirm = $con->query($checkDatabase);

		 	if ($confirm->num_rows >0) {
		 		//echo "user already exist please choose another username";
		 		$response = ["invalid"=>true, "message"=>"user already exist please choose another username"]; 			
							echo json_encode($response);
		 	}else{
		 		$insertIntoDb="INSERT INTO users(first_name, last_name, user_name, user_address, user_password) VALUES ('$fName', '$lName', '$userName', '$userAddress', '$userPassword')";
		 		
		 		$a = $con->query($insertIntoDb);
		 	

		 	

		 			if ($a) {
		 					$response = ["success"=>true, "message"=>"You have succesfully register"]; 			
							echo json_encode($response);
							
		 			}else{
		 				$response = ["success"=>false, "message"=>"please enter valid Details"]; 			
							echo json_encode($response);
				  		}
		 			}
		 		
		 		// if (!empty($fName) && !empty($lName) ) {
					// echo "first name is {$fName} and my last name is {$lName}";
		 		// }else{
		 		// 	echo "please refill all required input";
		 		// }	
		
	

?>