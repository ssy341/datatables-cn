<?php
/**
 * Created by PhpStorm.
 * User: dt.thxopen.com
 * Date: 2014/12/7
 * Time: 11:13
 */
try {
    //连接数据库
    $db = new SQLite3('dt.sqlite3');
} catch (PDOException $e) {
    fatal(
        "数据库连接出错" . $e->getMessage()
    );
}

//获取Datatables发送的参数 必要
$draw = @$_GET['draw'];//这个值作者会直接返回给前台

//排序
$order_column = @$_GET['orderColumn'];//排序列名称
$order_dir = @$_GET['orderDir'];//ase desc 升序或者降序

//拼接排序sql
$orderSql = "";
if(isset($order_column)){
    $orderSql = " order by ".$order_column." ".$order_dir;
}
//搜索
$fuzzy = @$_GET['fuzzySearch'];//是否模糊查询
if($fuzzy == 'true'){
    $searchValue = @$_GET['fuzzy'];//模糊查询关键字
    $sumSqlWhere = " where name||position||salary||start_date||office||extn||status||role LIKE '%".$searchValue."%'";
}else{
    $searchParams=array();//创建详细查询条件数组
    $name = @$_GET['name'];
    if(strlen($name)>0){
        array_push($searchParams," name like '%".$name."%'");
    }
    $position = @$_GET['position'];
    if(strlen($position)>0){
        array_push($searchParams," position like '%".$position."%'");
    }
    $office = @$_GET['office'];
    if(strlen($office)>0){
        array_push($searchParams," office like '%".$office."%'");
    }
    $extn = @$_GET['extn'];
    if(strlen($extn)>0){
        array_push($searchParams," extn like '%".$extn."%'");
    }
    $role = @$_GET['role'];
    if($role != ''){
        array_push($searchParams," role = '".$role."'");
    }
    $status = @$_GET['status'];
    if($status != ''){
        array_push($searchParams," status = '".$status."'");
    }

    $sumSqlWhere = "";
    $count = count($searchParams);
    if($count > 0){
        $sumSqlWhere = " where".join(' and ',$searchParams);
    }
}

//分页
$start = @$_GET['startIndex'];//从多少开始
$length = @$_GET['pageSize'];//数据长度
$limitSql = '';
$limitFlag = isset($start) && $length != -1 ;
if ($limitFlag ) {
    $limitSql = " LIMIT ".intval($start).", ".intval($length);
}

//定义查询数据总记录数sql
$sumSql = "SELECT count(*) as sum FROM user";
//条件过滤后记录数 必要
$recordsFiltered = 0;
//定义过滤条件查询过滤后的记录数sql
$recordsFilteredResult = $db->query($sumSql.$sumSqlWhere);
while ($row = $recordsFilteredResult->fetchArray(SQLITE3_ASSOC)) {
    $recordsFiltered =  $row['sum'];
}

//query data
$totalResultSql = "SELECT name,position,salary,start_date,office,extn,status,role FROM user";
$infos = array();
//如果有搜索条件，按条件过滤找出记录
$dataResult = $db->query($totalResultSql.$sumSqlWhere.$orderSql.$limitSql);
while ($row = $dataResult->fetchArray(SQLITE3_ASSOC)) {
    $obj = array("name" => $row['name'],
        "position" => $row['position'],
        "salary" => $row['salary'],
        "start_date" => $row['start_date'],
        "office" => $row['office'],
        "extn" => $row['extn'],
        "status" => $row['status'],
        "role" => $row['role']);
    array_push($infos,$obj);
}

/*
 * Output 包含的是必要的
 */
echo json_encode(array(
    "draw" => intval($draw),
    "total" => intval($recordsFiltered),
    "pageData" => $infos
),JSON_UNESCAPED_UNICODE);


function fatal($msg)
{
    echo json_encode(array(
        "error" => $msg
    ));
    exit(0);
}