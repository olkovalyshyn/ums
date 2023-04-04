<?php
include_once("../connect/connect.php");

$id = $_POST['id'];
$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$role = $_POST['role'];
$status = $_POST['status'];

class UserEdit extends ConnectionDb
{
    public function edit($id, $firstName, $lastName, $role, $status)
    {
        if (isset($firstName) && $firstName != '' && isset($lastName) && $lastName != ''){
            $sql = "UPDATE `users` SET `first_name`= :firstName, `last_name`= :lastName, `role`= :role, `status`= :status WHERE `id` = :id";
            $params = [':firstName' => $firstName, ':lastName' => $lastName, ':role' => $role, ':status' => $status, ':id' => $id];
            $result = $this->connect()->prepare($sql);

            if($result->execute($params)){

                //обробка інтового значення "ролі" із бека
                $roles = [1 => 'Admin', 2 => 'User'];
                if (array_key_exists($role, $roles)) {
                    $role = $roles[$role];
                } else $role = "";

                $response = array('status' => true, 'error' => null, 'user' => array('id' => $id, 'first_name' => $firstName, 'last_name' => $lastName, 'role' => $role, 'status' => $status));;
            } else {
                $response = array('status' => false, 'error' => array('code' => 100, 'message' => 'not edit user'));
            }
            echo json_encode($response);
        }
    }
}

$userEdit = new UserEdit();
$userEdit->edit($id, $firstName, $lastName, $role, $status);