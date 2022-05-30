<?php

require 'Task.php';



function selectAll($pdo){
  $statement = $pdo->prepare('select * from todos');

  $statement->execute();

  return $statement->fetchAll(PDO::FETCH_CLASS,'Task');
  
}

