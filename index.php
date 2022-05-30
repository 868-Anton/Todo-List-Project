<?php

require 'functions.php';

require 'database/connection.php';

$pdo = Connection::make();

$tasks = selectAll($pdo);

require 'index.view.php';