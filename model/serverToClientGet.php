<?php
include_once("../connect/connect.php");

class UserGetDB extends ConnectionDb
{
    public function get()
    {
        $sql = "SELECT * FROM `users`";
        $result = $this->connect()->prepare($sql);
        $result->execute();
        return $result->fetchAll();
    }
}
$user = new UserGetDB();
$data = $user->get();
echo json_encode($data);
