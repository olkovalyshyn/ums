<?php
include_once("../connect/connect.php");

$id = $_POST['id'];
$status = $_POST['status'];

class UserSelectOption extends ConnectionDb
{
    public function editStatus($id, $status)
    {
        $sql = "UPDATE `users` SET `status`= :status WHERE `id` = :id";
        $params = [':status' => $status, ':id' => $id];
        $result = $this->connect()->prepare($sql);
        if ($result->execute($params)) {
            $response = array('status' => true, 'error' => null, 'id' => $id);
        }else {
            $response = array('status' => false, 'error' => array('code' => 100, 'message' => 'not selected'));
        }

        echo json_encode($response);
    }
}

$userEdt = new UserSelectOption();
$userEdt->editStatus($id, $status);