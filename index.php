<?php

$database = require 'bootstrap.php';
$tasks = $database->selectAll('todos','Task');

require 'index.view.php';