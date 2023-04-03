<?php
include_once("../connect/connect.php");

class UserAddedGetSingle extends ConnectionDb
{
    public function getSingle()
    {
        $conn = $this->connect();
        $sql = "SELECT * FROM `users` ORDER BY id DESC LIMIT 1";
        $result = $conn->prepare($sql);
        $row = array();

        if ($result->execute()) {
            $row = $result->fetchAll();
            $id = $row[0]['id'];
            $response = array('status' => true, 'error' => null, 'id' => $id);
        } else {
            $response = array('status' => false, 'error' => array('code' => 100, 'message' => 'not found user'));
        }

        $data['resp'] = $response;
        $data['arr'] = $row;

        return $data;
    }
}

$user = new UserAddedGetSingle();
$data = $user->getSingle();
echo json_encode($data);


