<?php
    $id = $_POST['id'];
    try {
        //连接数据库
        $db = new SQLite3('curd.sqlite3');
    } catch (Exception $e) {
        fatal(
            "数据库连接出错" . $e->getMessage()
        );
    }

    $query = "delete from user where id = " . $id;
    $resultQ = $db->query($query);
    if ($resultQ) {
        echo 1;
    } else {
        echo 0;
    }
    $db->close();
?>