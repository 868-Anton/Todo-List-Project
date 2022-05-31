<?php


require 'database/connection.php';
require 'database/QueryBuilder.php';

$pdo = Connection::make();

$query = new QueryBuilder($pdo);

$tasks = $query->selectAll('todos');

require 'index.view.php';