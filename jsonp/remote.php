<?php
//通过设置content-type能够指明返回的内容类型
header('Contetn-type:application/json');

$callbackFunction = htmlspecialchars($_GET['callback']);
$data = 'data from remote1111';
echo $callbackFunction.'("'.$data.'")';