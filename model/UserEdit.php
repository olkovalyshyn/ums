<?php
include_once("../connect/connect.php");

$id = $_POST['id'];
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$role = $_POST['role'];
class UserEdit extends ConnectionDb
{
    public $response = array('status' => false);

    public function edit($id, $firstName, $lastName, $role)
    {
        $sql = "UPDATE `users` SET `first_name`= :firstName, `last_name`= :lastName, `role`= :role WHERE `id` = :id";
        $params = [':firstName' => $firstName, ':lastName' => $lastName, ':role' => $role, ':id' => $id];
        $result = $this->connect()->prepare($sql);
        if($result->execute($params)){
        $this->response['status'] = true;
        }else {
            var_dump($result->errorInfo());
        }
        echo json_encode($this->response);
    }
}

$userEdt = new UserEdit();
$userEdt->edit($id, $firstName, $lastName, $role);