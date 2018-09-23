#!/usr/bin/env php
<?php
$template = file_get_contents('index.tpl.html');
$parts = scandir('parts');

foreach ($parts as $file) {
    if ($file === '.')      continue;
    if ($file === '..')     continue;

    echo "Processing {$file}…" . PHP_EOL;

    $template = str_replace(
        "[[{$file}]]",
        file_get_contents("parts/{$file}"),
        $template
    );
}

file_put_contents('index.html', $template);
