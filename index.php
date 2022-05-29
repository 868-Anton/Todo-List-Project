<?php

require 'functions.php';

$pdo = connectToDb();

$tasks = selectAll($pdo);

require 'index.view.php';