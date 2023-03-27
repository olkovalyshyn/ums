<?php
include_once("../connect/connect.php");

$firstName = $_POST['firstName'];
$lastName = $_POST['lastName'];
//$name = $firstName . " " . $lastName;
$status = $_POST['status'];
$role = $_POST['role'];

//echo "<pre>";
//print_r($_POST);
//echo "</pre>";

class UserAdd extends ConnectionDb
{
    public $response = array('status' => false);
    public function add($firstName, $lastName, $status, $role, $selection = 'no')
    {
        if (isset($firstName) && $firstName != '' && isset($lastName) && $lastName != '' && isset($status) && $status != '' && isset($role) && $role != '') {
            $sql = "INSERT INTO `users` (`selection`, `first_name`, `last_name`,`role`, `status`) VALUE (:selection, :first_name, :last_name, :role, :status)";
            $result = $this->connect()->prepare($sql);
            $params = ['selection' => $selection, 'first_name' => $firstName, 'last_name' => $lastName, 'role' => $role, 'status' => $status];
            if($result->execute($params)){
                $this->response['status'] = true;
            }

        }
        echo json_encode($this->response);
    }
}

$user = new UserAdd();
$user->add($firstName, $lastName, $status, $role);

