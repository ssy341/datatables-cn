<?php
$con = mysql_connect("112.213.99.149", "a1212180158", "e87d2d20");
mysql_select_db("a1212180158", $con);
//$con = mysql_connect("localhost", "root", "");
//mysql_select_db("test", $con);
if (!$con) {
    //数据库连接则失败显示demo数据
    die('{"data":[{"id":"1","username":"demo","name":"\u59d3\u540d","phone":"13882500000"},{"id":"2","username":"user","name":"\u540d\u5b57","phone":"0731-8888888"}]}');
}
$result = mysql_query("SELECT id,username,name,phone FROM user");
$data = array();
while ($row = mysql_fetch_array($result)) {
    array_push($data, $row);
}
$json['data'] = $data;
echo json_encode($json);
mysql_close($con);
?>