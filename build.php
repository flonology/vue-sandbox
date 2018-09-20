#!/usr/bin/env php
<?php
$template = file_get_contents('index.tpl.html');

$template = str_replace(
    '[[component.login.html]]',
    file_get_contents('js/component.login.html'),
    $template
);

$template = str_replace(
    '[[component.select_list.html]]',
    file_get_contents('js/component.select_list.html'),
    $template
);

$template = str_replace(
    '[[component.add_entry.html]]',
    file_get_contents('js/component.add_entry.html'),
    $template
);

$template = str_replace(
    '[[component.list_entry.html]]',
    file_get_contents('js/component.list_entry.html'),
    $template
);

file_put_contents('index.html', $template);
