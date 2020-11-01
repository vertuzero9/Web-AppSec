<?php
    $dt = $_GET['c'];//json_encode($_GET['c'], JSON_PRETTY_PRINT);
    if(!empty($dt))
    {
        $logfile = fopen('cafesuatradabuncha.txt', 'a+');
        if($logfile != null)
            fwrite($logfile, $dt . PHP_EOL . PHP_EOL);
        fclose($logfile);
    }
?>
