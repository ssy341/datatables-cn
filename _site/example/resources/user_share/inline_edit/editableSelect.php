<?php
    /**
     * 编辑下拉框
     */
    $id = $_POST['id'];
    $value = $_POST['value'];
    list($td, $oldValue, $dbid) = explode('_', $id);
    try {
        //连接数据库
        $db = new SQLite3('curd.sqlite3');
    } catch (Exception $e) {
        echo "数据库连接出错" . $e->getMessage;
    }
    $update = "update user set job = '" . $value . "' where id = " . $dbid;
    $resultQ = $db->query($update);
    if ($resultQ) {
        //$array['selected'] =  $value;
        echo $value;
        //print  json_encode($array);
    } else {
        echo $oldValue;
    }
    $db->close();
?>