<?php
	$output = array(
		"aaData" => array()
	);

    try {
        //连接数据库
        $db = new SQLite3('curd.sqlite3');
    } catch (Exception $e) {
        fatal(
            "数据库连接出错" . $e->getMessage()
        );
    }
$sql = "select * from user";
$result = $db->query($sql);
while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
    $row = array(
        "id" => $row['id'],
        "name" => $row['name'],
        "job" => $row['job'],
        "date" => $row['start_date'],
        "note" => $row['note']

    );
    $output['aaData'][] = $row;
}
$db->close();
echo json_encode( $output );

function fatal($msg)
{
    echo json_encode(array(
        "error" => $msg
    ));
    exit(0);
}

?>