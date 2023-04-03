<?php
include_once("../connect/connect.php");

class UserAddedGetAll extends ConnectionDb
{
    public function getAll()
    {
        $conn = $this->connect();
        $sql = "SELECT * FROM `users`";
        $result = $conn->prepare($sql);

        if ($result->execute()) {
            $id = $conn->lastInsertId();
            $response = array('status' => true, 'error' => null, 'id' => $id);
        } else {
            $response = array('status' => false, 'error' => array('code' => 100, 'message' => 'not found user'));
        }
        $data['resp'] = $response;
        $data['arr'] = $result->fetchAll();

        return $data;
    }
}

$user = new UserAddedGetAll();
$dataAll = $user->getAll();
echo json_encode($dataAll);

