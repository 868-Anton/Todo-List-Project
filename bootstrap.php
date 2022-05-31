<?php
require 'database/connection.php';
require 'database/QueryBuilder.php';


$query = new QueryBuilder(Connection::make());
