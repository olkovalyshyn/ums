<?php
include_once("../connect/connect.php");

class UserAddedGetAll extends ConnectionDb
{
    public function getAll()
    {
        $response = [];
        $conn = $this->connect();

        try {
            $conn->beginTransaction();
            $sql = "SELECT * FROM `users`";
            $result = $conn->prepare($sql);

            if ($result->execute()) {

                $users = $result->fetchAll();
//                $response = array('status' => true, 'error' => null, 'user' => array());;

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

                    $response[] = array('status' => true, 'error' => null, 'user' =>  array('id' => $id, 'first_name' => $firstName, 'last_name' => $lastName, 'role' => $role, 'status' => $status));
                }
            }
            $conn->commit();
        } catch (PDOException $e) {

            $response = array('status' => false, 'error' => array('code' => $e->getCode(), 'message' => $e->getMessage()));

        }


        return json_encode($response);
    }
}

$user = new UserAddedGetAll();
$dataAll = $user->getAll();
echo json_encode($dataAll);



//ДО ЗМІН
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
//
//            $users = $result->fetchAll();
//            $response = array('status' => true, 'error' => null, 'user' => array());;
//
//            foreach ($users as $user) {
//                $id = $user['id'];
//                $firstName = $user['first_name'];
//                $lastName = $user['last_name'];
//                $status = $user['status'];
//
//                //обробка інтового значення "ролі" із бека
//                $role = $user['role']; // 1 || 2
//                $roles = [1 => 'Admin', 2 => 'User'];
//                if (array_key_exists($role, $roles)) {
//                    $role = $roles[$role];
//                } else $role = "";
//
//                $response['user'][] = array('id' => $id, 'first_name' => $firstName, 'last_name' => $lastName, 'role' => $role, 'status' => $status);
//            }
//        } else {
//            $response = array('status' => false, 'error' => array('code' => 100, 'message' => 'not found user'));
//        }
//
//        return json_encode($response);
//    }
//}
//
//$user = new UserAddedGetAll();
//$dataAll = $user->getAll();
//echo json_encode($dataAll);


