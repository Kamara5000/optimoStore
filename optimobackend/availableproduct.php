<?php
 
 header("Access-Control-Allow-Origin: *");
 header("Access-Control-Allow-Methods:GET,POST");
 header("Access-Control-Allow-Headers: *");


 $conn = mysqli_connect('localhost','root','', 'optimo');

 	if (mysqli_connect_errno()) {
 		echo "Failed to connect to Database". mysqli_connect_errno();
 	};


 	$query = 'SELECT * FROM adminpost';

 	$result = mysqli_query($conn, $query);


 	$products = mysqli_fetch_all($result, MYSQLI_ASSOC);


 			//var_dump($products);

 			echo json_encode($products);

 	mysqli_free_result($result);

 	mysqli_close($conn);


	

	
	

?>