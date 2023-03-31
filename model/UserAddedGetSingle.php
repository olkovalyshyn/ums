<?php
include_once("../connect/connect.php");

class UserAddedGetSingle extends ConnectionDb
{
    public function getSingle()
    {
        $sql = "SELECT * FROM `users` ORDER BY id DESC LIMIT 1";
        $result = $this->connect()->prepare($sql);
        $result->execute();
        return $result->fetchAll();
    }

}
$user = new UserAddedGetSingle();
$dataSingle = $user->getSingle();
echo json_encode($dataSingle);


