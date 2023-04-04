<?php
include_once("../connect/connect.php");

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$status = $_POST['status'];
$role = $_POST['role'];

class UserAdd extends ConnectionDb
{
    public function add($firstName, $lastName, $status, $role)
    {
        if (isset($firstName) && $firstName != '' && isset($lastName) && $lastName != '') {
            $conn = $this->connect();
            $sql = "INSERT INTO `users` (`first_name`, `last_name` ,`role`, `status`) VALUE (:first_name, :last_name, :role, :status)";
            $result = $conn->prepare($sql);
            $params = ['first_name' => $firstName, 'last_name' => $lastName, 'role' => $role, 'status' => $status];

            if ($result->execute($params)) {
                $id = $conn->lastInsertId();

                //обробка інтового значення "ролі" із бека
                $roles = [1 => 'Admin', 2 => 'User'];
                if (array_key_exists($role, $roles)) {
                    $role = $roles[$role];
                } else $role = "";

                $response = array('status' => true, 'error' => null, 'user' => array('id' => $id, 'first_name' => $firstName, 'last_name' => $lastName, 'role' => $role, 'status' => $status));;
            } else {
                $response = array('status' => false, 'error' => array('code' => 100, 'message' => 'not add user'));
            }
            echo json_encode($response);
        }
    }
}

$user = new UserAdd();
$user->add($firstName, $lastName, $status, $role);

