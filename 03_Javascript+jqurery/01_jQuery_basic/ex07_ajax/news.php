<?php
   $ch=curl_init(); //초기화
   curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
   curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
   curl_setopt($ch, CURLOPT_HEADER, 0);
   curl_setopt($ch, CURLOPT_URL, "https://www.chosun.com/arc/outboundfeeds/rss/category/politics/?outputType=xml");
   $url_source=curl_exec($ch);
   curl_close($ch);
   
   echo $url_source;
?>