<?php
    $id = $_POST['id'];
    $name = $_POST['name'];
    $job = $_POST['job'];
    $note = $_POST['note'];
    $data = array('id' => $id, 'name' => $name, 'job' => $job, 'note' => $note);
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_POSTFIELDS, $data);
    curl_setopt($curl, CURLOPT_URL, 'http://util.thxopen.com/datatables/editFun.php');
    curl_setopt($curl, CURLOPT_HEADER, 1);
    curl_setopt($curl, CURLOPT_POST, 1);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_HEADER, false);
    $returnData = curl_exec($curl);
    curl_close($curl);
    echo $returnData;
?>