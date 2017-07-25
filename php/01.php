<?php 
	header("Content-Type:text/html;   charset=utf-8");
	include("conn.php");
	$username=$_POST['$username'];
	$true_name=$_POST['$true_name'];
	$sql="USE test";
	mysql_query($sql);
	
    	$sql1="update user set true_name='".$true_name."' where username='".$username."'";
	    $res=mysql_query($sql1);
	    var_dump($sql1)
		// if($res){
		//     echo true;
		// }else{
		//     echo false;
		// } 
?>