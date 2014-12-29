<?php
    /**
     * jeditable 服务器处理方法
     * 编辑昵称
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
    $update = "update  user set name = '" . $value . "' where id = " . $dbid;
    $resultQ = $db->query($update);
    if ($resultQ) {
        echo $value;
    } else {
        echo $oldValue;
    }
    $db->close();
?>