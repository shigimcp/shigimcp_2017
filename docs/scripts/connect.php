<?php

    $dbname = 'shigimcpDB_2019';
	$dbuser = 'shigimcp';
	$dbpass = 'sh1g1mcp';
	$dbhost = 'localhost';

	$con = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname) or die("Unable to Connect to '$dbhost'");


	if (mysqli_connect_errno()) {
		echo "echo PING!!! Failed to connect to MySQL: " . mysqli_connect_error();
		echo "echo Failed to connect to MySQL: " . mysqli_connect_error();
		echo mysqli_connect_error();
	}

?>