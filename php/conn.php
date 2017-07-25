<?php
	header('Content-type:text/html;charset=utf-8');
	$link = mysql_connect('localhost','root','root');
	mysql_select_db('test',$link);
	mysql_query("set names utf8");
?>