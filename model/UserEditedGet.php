<?php
include_once("../connect/connect.php");

$id = $_GET['id'];

class UserEditedGet extends ConnectionDb
{
    public function get($id)
    {
        $conn = $this->connect();
        $sql = "SELECT * FROM `users` WHERE `id` = :id";
        $result = $conn->prepare($sql);
        $params = ['id' => $id];

        if ($result->execute($params)) {
            $response = array('status' => true, 'error' => null, 'id' => $id);
        } else {
            $response = array('status' => false, 'error' => array('code' => 100, 'message' => 'not found user'));
        }
        $data['resp'] = $response;
        $data['arr'] = $result->fetchAll();

        return $data;
    }
}

$user = new UserEditedGet();
$data = $user->get($id);
echo json_encode($data);


