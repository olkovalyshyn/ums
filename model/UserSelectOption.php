<?php
include_once("../connect/connect.php");

$id = $_POST['id'];
$status = $_POST['status'];

class UserSelectOption extends ConnectionDb
{
    public $response = array('status' => false, 'error' => array('code' => 100, 'message'=> 'not found user'));

    public function editStatus($id, $status)
    {
        $sql = "UPDATE `users` SET `status`= :status WHERE `id` = :id";
        $params = [':status' => $status, ':id' => $id];
        $result = $this->connect()->prepare($sql);
        if ($result->execute($params)) {
            $this->response['status'] = true;
        }
        echo json_encode($this->response);
    }

}

$userEdt = new UserSelectOption();
$userEdt->editStatus($id, $status);