<?php
       header("Content-type:text/html;charset=utf-8");//设置中文字符编码
  //    登录mysql
  $link = @mysql_connect("localhost:3306","root","root");
  if(!$link){
   echo "no";
   echo "<br>";
   echo mysql_error($link);
}
//	选择数据库
$db = mysql_select_db("test",$link);
if(!$db){
   echo "no";
   echo "<br>";
   echo mysql_error($link);
}
//	设置字符集
$query = mysql_query("set names utf8");
if(!$query){
   echo "no";
   echo "<br>";
   echo mysql_error($link);
}
$a=$_REQUEST["user"];//接收前端发送的数据
$t=$_REQUEST["tel"];
$e=$_REQUEST["email"];
$s=$_REQUEST["subject"];
$tex=$_REQUEST["tex"];
//插入数据

$q=mysql_query("INSERT INTO `message` (`name`, `tel`, `email`, `project`,`text`) VALUES ('".$a."', '".$t."', '".$e."', '".$s."', '".$tex."')")
   
?>