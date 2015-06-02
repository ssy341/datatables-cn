<?php
$con = mysql_connect("112.213.99.149", "a1212180158", "e87d2d20");
mysql_select_db("a1212180158", $con);
//$con = mysql_connect("localhost", "root", "");
//mysql_select_db("test", $con);
if( !$con ){
    die('数据库连接失败');
}
$id       = $_POST['id'];
$username = $_POST['username'];
$name     = $_POST['name'];
$phone    = $_POST['phone'];
$result=mysql_query("UPDATE user SET username = '".$username."',name = '".$name."',phone = '".$phone."' WHERE id = ".$id);
if($result){
    echo "修改成功";
}else{
    echo "修改失败";
}
mysql_close($con);
?>