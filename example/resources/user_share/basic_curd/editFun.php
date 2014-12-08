<?php
$id = $_POST['id'];
$name = $_POST['name'];
$job = $_POST['job'];
$note = $_POST['note'];
try {
    //连接数据库
    $db = new SQLite3('curd.sqlite3');
} catch (Exception $e) {
    fatal(
        "数据库连接出错" . $e->getMessage()
    );
}
$updateSql = "update user set name = '" . $name . "' , job = '" . $job . "', note = '" . $note . "' where id = " . $id;
$resultQ = $db->query($updateSql);
if ($resultQ) {
    echo 1;
} else {
    echo 0;
}
$db->close();

function fatal($msg)
{
    echo json_encode(array(
        "error" => $msg
    ));
    exit(0);
}

?>