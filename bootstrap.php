<?php
require 'database/connection.php';
require 'database/QueryBuilder.php';

$config = require 'config.php';

return new QueryBuilder(Connection::make($config['database']));
