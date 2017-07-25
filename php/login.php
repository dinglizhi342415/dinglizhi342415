<?php 
	header("Content-Type:text/html;   charset=utf-8");
	include("conn.php");
	$username=$_POST['username'];
	$password=$_POST['password'];
	$sql="USE test";
	mysql_query($sql);
	$sql1="select * from user where username='$username' and password='$password' ";
    $res=mysql_query($sql1);
    if(mysql_num_rows($res)){
    	echo true;
    }else{
    	echo false;
    }
?>