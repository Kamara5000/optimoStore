<?php


header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods:GET,POST");
header("Access-Control-Allow-Headers: *");



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
			$adminAddress= $_POST['user_address'];
			$adminPassword = $_POST['user_password'];
			$fName= $_POST['f_name'];

			$hashedPassword = password_hash($adminPassword, PASSWORD_DEFAULT);


		 	$checkDatabase = "SELECT * FROM admin_table WHERE  user_name = '$userName'";
		 	$confirm = $con->query($checkDatabase);

		 	if ($confirm->num_rows >0) {
		 		//echo "user already exist please choose another username";
		 		$response = ["invalid"=>true, "message"=>"Admin already exist please choose another username"]; 			
							echo json_encode($response);
		 	}else{
		 		$insertIntoDb="INSERT INTO admin_table(first_name, last_name, user_name, admin_address, admin_password) VALUES ('$fName', '$lName', '$userName', '$adminAddress', '$hashedPassword')";
		 		
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