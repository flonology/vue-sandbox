#!/usr/bin/env php
<?php
function build_index()
{
    $template = file_get_contents('index.tpl.html');
    $parts = scandir('parts');

    foreach ($parts as $file) {
        if ($file === '.')      continue;
        if ($file === '..')     continue;

        // echo "Processing {$file}…" . PHP_EOL;

        $template = str_replace(
            "[[{$file}]]",
            file_get_contents("parts/{$file}"),
            $template
        );
    }

    $bytes_written = file_put_contents('index.html', $template);
    return ceil($bytes_written / 1024);
}

echo "Building every 5 seconds…" . PHP_EOL;
while (true) {
    build_index();
    sleep(5);
}
