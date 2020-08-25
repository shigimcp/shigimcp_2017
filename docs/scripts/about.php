<?php

	require 'connect.php';

	$aboutArray = array();

	$queryResultabout = mysqli_query($con,"
		SELECT * 
		FROM about 
	");


	while($row = mysqli_fetch_array($queryResultabout)) {

		$aboutArray[] = array (
			'about_index'=>$row['about_index'], 
			'brain'=>$row['brain'], 
			'thought'=>$row['thought'], 
			'format'=>$row['format'], 
			'format_src'=>$row['format_src'], 
			'link'=>$row['link'],
			'aWidth'=>$row['aWidth'], 
			'aHeight'=>$row['aHeight']
		);
	}


	$encoded = json_encode($aboutArray);

	die($encoded);

	echo "$encoded = " + $encoded;
	echo "$aboutArray = " + $aboutArray;

	mysqli_close($con);
?>