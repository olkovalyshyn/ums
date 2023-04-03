<?php
include_once("../connect/connect.php");

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
$status = $_POST['status'];
$role = $_POST['role'];

class UserAdd extends ConnectionDb
{
    public function add($firstName, $lastName, $status, $role = 'User', $selection = 'off')
    {
        if (isset($firstName) && $firstName != '' && isset($lastName) && $lastName != '') {
            $conn = $this->connect();
            $sql = "INSERT INTO `users` (`selection`, `first_name`, `last_name` ,`role`, `status`) VALUE (:selection, :first_name, :last_name, :role, :status)";
            $result = $conn->prepare($sql);
            $params = ['selection' => $selection, 'first_name' => $firstName, 'last_name' => $lastName, 'role' => $role, 'status' => $status];

            if ($result->execute($params)) {
                $id = $conn->lastInsertId();
                $response = array('status' => true, 'error' => null, 'user' => array('id' => $id, 'name_first' => $firstName, 'name_last' => $lastName, 'status' => $status));;
            } else {
                $response = array('status' => false, 'error' => array('code' => 100, 'message' => 'not add user'));
            }

            echo json_encode($response);
        }
    }
}

$user = new UserAdd();
$user->add($firstName, $lastName, $status, $role);

