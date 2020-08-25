<?php

	require 'connect.php';

	$albumArray = array();

	$queryResultAlbum = mysqli_query($con,"
		SELECT * 
		FROM album 
	");


	while($row = mysqli_fetch_array($queryResultAlbum)) {

		$albumArray[] = array (
			'album_index'=>$row['album_index'], 
			'album_id'=>$row['album_id'], 
			'employer'=>$row['employer'], 
			'title'=>$row['title'], 
			'date_start'=>$row['date_start'], 
			'date_end'=>$row['date_end'], 
			'info'=>$row['info'], 
			'logopath'=>$row['logopath'], 
			'slpath'=>$row['slpath'], 
			'thpath'=>$row['thpath'], 
			'flpath'=>$row['flpath'],
			'flpath_stage'=>$row['flpath_stage']
		);
	}

	$encoded = json_encode($albumArray);
	die($encoded);

	mysqli_close($con);
?>