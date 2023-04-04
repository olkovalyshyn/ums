<?php
include_once("../connect/connect.php");

class UserAddedGetAll extends ConnectionDb
{
    public function getAll()
    {
        $conn = $this->connect();
        $sql = "SELECT * FROM `users`";
        $result = $conn->prepare($sql);

        if ($result->execute()) {

            $users = $result->fetchAll();
            $response = array('status' => true, 'error' => null, 'user' => array());;

            foreach ($users as $user) {
                $id = $user['id'];
                $firstName = $user['first_name'];
                $lastName = $user['last_name'];
                $status = $user['status'];

                //обробка інтового значення "ролі" із бека
                $role = $user['role']; // 1 || 2
                $roles = [1 => 'Admin', 2 => 'User'];
                if (array_key_exists($role, $roles)) {
                    $role = $roles[$role];
                } else $role = "";

                $response['user'][] = array('id' => $id, 'first_name' => $firstName, 'last_name' => $lastName, 'role' => $role, 'status' => $status);
            }
        } else {
            $response = array('status' => false, 'error' => array('code' => 100, 'message' => 'not found user'));
        }

        return json_encode($response);
    }
}

$user = new UserAddedGetAll();
$dataAll = $user->getAll();
echo json_encode($dataAll);




//include_once("../connect/connect.php");
//
//class UserAddedGetAll extends ConnectionDb
//{
//    public function getAll()
//    {
//        $conn = $this->connect();
//        $sql = "SELECT * FROM `users`";
//        $result = $conn->prepare($sql);
//
//        if ($result->execute()) {
//            $id = $conn->lastInsertId();
//            $response = array('status' => true, 'error' => null, 'id' => $id);
//        } else {
//            $response = array('status' => false, 'error' => array('code' => 100, 'message' => 'not found user'));
//        }
//        $data['resp'] = $response;
//        $data['arr'] = $result->fetchAll();
//
//        return $data;
//    }
//}
//
//$user = new UserAddedGetAll();
//$dataAll = $user->getAll();
//echo json_encode($dataAll);