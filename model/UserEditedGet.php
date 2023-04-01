<?php
include_once("../connect/connect.php");

$id = $_GET['id'];

class UserEditedGet extends ConnectionDb
{
    public function get($id)
    {

        $sql = "SELECT * FROM `users` WHERE `id` = :id";
        $result = $this->connect()->prepare($sql);
        $params = ['id' => $id];
        $result->execute($params);
        return $result->fetchAll();
    }

}
$user = new UserEditedGet();
$dataEdited = $user->get($id);
echo json_encode($dataEdited);


