<?php
	$first_name = $_POST['first_name'];
	$last_name = $_POST['last_name'];
	$username = $_POST['username'];
	$usertype = $_POST['usertype'];
	$account_balance = $_POST['account_balance'];
	$email = $_POST['email'];
	$password = $_POST['password'];

	// Database connection
	$conn = new mysql('localhost','root','','test');
	if($conn->connect_error){
		echo "$conn->connect_error";
		die("Connection Failed : ". $conn->connect_error);
	} else {
		$stmt = $conn->prepare("insert into registration(first_name, last_name, username, usertype, account_balance, email, password) values(?, ?, ?, ?, ?, ?, ?)");
		$stmt->bind_param("ssssdss", $first_name, $last_name, $username, $usertype, $account_balance, $email, $password);
		$execval = $stmt->execute();
		echo $execval;
		echo "Registration successfully...";
		$stmt->close();
		$conn->close();
	}
?> 