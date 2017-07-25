<?php 
	header("Content-Type:text/html;   charset=utf-8");
	include("conn.php");
	$username=$_POST['$username'];
	$true_name=$_POST['$true_name'];
	$nickname=$_POST['$nickname'];
	$gender=$_POST['$gender'];
	$birthday=$_POST['$birthday'];
	$provinceid=$_POST['$provinceid'];
	$city_id=$_POST['$city_id'];
	$occupation=$_POST['$occupation'];
	$introduction=$_POST['$introduction'];
	$sql="USE test";
	mysql_query($sql);
	
    	$sql1='update user set true_name="'.$true_name.'",nickname="'.$nickname.'",gender="'.$gender.'",birthday="'.$birthday.'",provinceid="'.$provinceid.'",city_id="'.$city_id.'",occupation="'.$occupation.'",introduction="'.$introduction.'" where username='.$username;
	    $res=mysql_query($sql1);
		if($res){
		    echo true;
		}else{
		    echo false;
		} 
?>