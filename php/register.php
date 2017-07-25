<?php 
	header("Content-Type:text/html;   charset=utf-8");
	include("conn.php");
	$phone=$_POST['phone'];
	$username=$_POST['phone'];
	$sql="USE test";
	mysql_query($sql);
	$sql2="select * from user where phone='$phone'";
    $res1=mysql_query($sql2);
    if(mysql_num_rows($res1)){
    	echo false;
    }else{
    	$sql1="insert into user(phone,username) values ('$phone','$username')";
	    $res=mysql_query($sql1);
		if($res){
		    echo true;
		}else{
		    echo false;
		} 
    }
?>