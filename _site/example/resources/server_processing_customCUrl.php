<?php
    $curl = curl_init();
    // POST数据
    curl_setopt($curl, CURLOPT_POST, 1);
    curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($_GET));
    curl_setopt($curl, CURLOPT_URL, 'http://util.thxopen.com/datatables/server_processing_custom.php');
    curl_setopt($curl, CURLOPT_HEADER, 1);
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($curl, CURLOPT_HEADER, false);
    $returnData = curl_exec($curl);
    curl_close($curl);
    echo $returnData;
?>
