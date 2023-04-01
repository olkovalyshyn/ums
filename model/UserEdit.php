<?php
include_once("../connect/connect.php");

$id = $_POST['id'];
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$role = $_POST['role'];
$status = $_POST['status'];

class UserEdit extends ConnectionDb
{
    public $response = array('status' => false, 'error' => array('code' => 100, 'message'=> 'not found user'));

    public function edit($id, $firstName, $lastName, $role, $status)
    {
        if (isset($firstName) && $firstName != '' && isset($lastName) && $lastName != '' && isset($status) && $status != '' && isset($role) && $role != ''){
            $sql = "UPDATE `users` SET `first_name`= :firstName, `last_name`= :lastName, `role`= :role, `status`= :status WHERE `id` = :id";
            $params = [':firstName' => $firstName, ':lastName' => $lastName, ':role' => $role, ':status' => $status, ':id' => $id];
            $result = $this->connect()->prepare($sql);

            if($result->execute($params)){
                $this->response['status'] = true;
            }
        }
        return json_encode($this->response);
    }
}

$userEdit = new UserEdit();
$userEdit->edit($id, $firstName, $lastName, $role, $status);