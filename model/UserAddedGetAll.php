<?php
include_once("../connect/connect.php");

class UserAddedGetAll extends ConnectionDb
{
    public function getAll()
    {
        $sql = "SELECT * FROM `users`";
        $result = $this->connect()->prepare($sql);
        $result->execute();
        return $result->fetchAll();
    }

}
$user = new UserAddedGetAll();
$dataAll = $user->getAll();
echo json_encode($dataAll);

