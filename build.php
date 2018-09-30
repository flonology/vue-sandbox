#!/usr/bin/env php
<?php
include('builder.php');

$destination = 'build/index.html';
$bytes_written = file_put_contents($destination, build_index());
$kbytes = ceil($bytes_written / 1024);

echo "Wrote {$kbytes} to {$destination}." . PHP_EOL;
