<?php
/**
 * Created by PhpStorm.
 * User: dt.thxopen.com
 * Date: 2014/12/7
 * Time: 11:13
 */
try {
    //连接数据库
    $db = new SQLite3('datatables.sqlite3');
} catch (PDOException $e) {
    fatal(
        "数据库连接出错" . $e->getMessage()
    );
}

//获取Datatables发送的参数 必要
$draw = $_POST['draw'];//这个值作者会直接返回给前台

//排序
$order_column = $_POST['order']['0']['column'];//那一列排序，从0开始
$order_dir = $_POST['order']['0']['dir'];//ase desc 升序或者降序

//拼接排序sql
$orderSql = "";
if(isset($order_column)){
    $i = intval($order_column);
    switch($i){
        case 0;$orderSql = " order by first_name ".$order_dir;break;
        case 1;$orderSql = " order by last_name ".$order_dir;break;
        case 2;$orderSql = " order by position ".$order_dir;break;
        case 3;$orderSql = " order by office ".$order_dir;break;
        case 4;$orderSql = " order by start_date ".$order_dir;break;
        case 5;$orderSql = " order by salary ".$order_dir;break;
        default;$orderSql = '';
    }
}
//搜索
$search = $_POST['search']['value'];//获取前台传过来的过滤条件

//分页
$start = $_POST['start'];//从多少开始
$length = $_POST['length'];//数据长度
$limitSql = '';
$limitFlag = isset($_POST['start']) && $length != -1 ;
if ($limitFlag ) {
    $limitSql = " LIMIT ".intval($start).", ".intval($length);
}

//定义查询数据总记录数sql
$sumSql = "SELECT count(id) as sum FROM DATATABLES_DEMO";
//条件过滤后记录数 必要
$recordsFiltered = 0;
//表的总记录数 必要
$recordsTotal = 0;
$recordsTotalResult = $db->query($sumSql);
while ($row = $recordsTotalResult->fetchArray(SQLITE3_ASSOC)) {
    $recordsTotal =  $row['sum'];
}
//定义过滤条件查询过滤后的记录数sql
$sumSqlWhere =" where first_name||last_name||position||office||start_date||salary LIKE '%".$search."%'";
if(strlen($search)>0){
    $recordsFilteredResult = $db->query($sumSql.$sumSqlWhere);
    while ($row = $recordsFilteredResult->fetchArray(SQLITE3_ASSOC)) {
        $recordsFiltered =  $row['sum'];
    }
}else{
    $recordsFiltered = $recordsTotal;
}

//query data
$totalResultSql = "SELECT first_name,last_name,position,office,start_date,salary FROM DATATABLES_DEMO";
$infos = array();
if(strlen($search)>0){
    //如果有搜索条件，按条件过滤找出记录
    $dataResult = $db->query($totalResultSql.$sumSqlWhere.$orderSql.$limitSql);
    while ($row = $dataResult->fetchArray(SQLITE3_ASSOC)) {
        $obj = array($row['first_name'], $row['last_name'], $row['position'], $row['office'], $row['start_date'], $row['salary']);
        array_push($infos,$obj);
    }
}else{
    //直接查询所有记录
    $dataResult = $db->query($totalResultSql.$orderSql.$limitSql);
    while ($row = $dataResult->fetchArray(SQLITE3_ASSOC)) {
        $obj = array($row['first_name'], $row['last_name'], $row['position'],$row['office'], $row['start_date'], $row['salary']);
        array_push($infos,$obj);
    }
}

/*
 * Output 包含的是必要的
 */
echo json_encode(array(
    "draw" => intval($draw),
    "recordsTotal" => intval($recordsTotal),
    "recordsFiltered" => intval($recordsFiltered),
    "data" => $infos
),JSON_UNESCAPED_UNICODE);


function fatal($msg)
{
    echo json_encode(array(
        "error" => $msg
    ));
    exit(0);
}
