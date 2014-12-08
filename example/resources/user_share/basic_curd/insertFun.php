<?php
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
    $querySum = "select count(id) as sum from user";
    $sumResult = $db->query($querySum);
    $SUM=0;
    while($row = $sumResult->fetchArray(SQLITE3_ASSOC)){
        $SUM = $row['sum'];
    }
    if($SUM<341341){
        $insertSql = "insert into user (name,job,note) " .
            "values('" . $name . "','" . $job . "','" . $note . "')";
        $result = $db->query($insertSql);
        $db->close();
        if ($result) {
            echo 1;
        } else {
            echo 0;
        }
    }else{
        echo 2;
    }

    function fatal($msg)
    {
        echo json_encode(array(
            "error" => $msg
        ));
        exit(0);
    }
?>