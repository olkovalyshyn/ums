<?php
include_once("../connect/connect.php");
$data = $_POST['data'];

//$id = $_POST['id'];
//$firstName = $_POST['firstName'];
//$lastName = $_POST['lastName'];
//$role = $_POST['role'];
//$status = $_POST['status'];

class UserSelectOption extends ConnectionDb
{
    public function editStatus($items)
    {
        $response = [];
        $conn = $this->connect();

        try{
            $conn->beginTransaction();
            foreach ($items as $item) {
                $sql = "UPDATE `users` SET `status`= :status WHERE `id` = :id";
                $params = [':status' => $item['status'], ':id' => $item['id']];
                $result = $conn->prepare($sql);
                $result->execute($params);

                //обробка інтового значення "ролі" із бека
                $roles = [1 => 'Admin', 2 => 'User'];
                if (array_key_exists($item['role'], $roles)) {
                    $role = $roles[$item['role']];
                } else $role = "";

                $response[] = array('status' => true, 'error' => null, 'user' => array('id' => $item['id'], 'first_name' => $item['firstName'], 'last_name' => $item['lastName'], 'role' => $item['role'], 'status' => $item['status']));;
            }
            $conn->commit();

        } catch (PDOException $e){
            var_dump($e->getMessage());
            $response = array('status' => false, 'error' => array('code' => $e->getCode(), 'message' => $e->getMessage()));
        }
        echo json_encode($response);
    }
}

$userEdt = new UserSelectOption();
$userEdt->editStatus($data);




//ПЕРЕД РЕДАГУВАННЯМ
//include_once("../connect/connect.php");
//
//$id = $_POST['id'];
//$firstName = $_POST['firstName'];
//$lastName = $_POST['lastName'];
//$role = $_POST['role'];
//$status = $_POST['status'];
//
//class UserSelectOption extends ConnectionDb
//{
//    public function editStatus($id, $status, $role, $firstName, $lastName)
//    {
//        $sql = "UPDATE `users` SET `status`= :status WHERE `id` = :id";
//        $params = [':status' => $status, ':id' => $id];
//        $result = $this->connect()->prepare($sql);
//        if ($result->execute($params)) {
//
//            //обробка інтового значення "ролі" із бека
//            $roles = [1 => 'Admin', 2 => 'User'];
//            if (array_key_exists($role, $roles)) {
//                $role = $roles[$role];
//            } else $role = "";
//
//            $response = array('status' => true, 'error' => null, 'user' => array('id' => $id, 'first_name' => $firstName, 'last_name' => $lastName, 'role' => $role, 'status' => $status));;
//        } else {
//            $response = array('status' => false, 'error' => array('code' => 100, 'message' => 'not edit user'));
//        }
//        echo json_encode($response);
//    }
//}
//
//$userEdt = new UserSelectOption();
//$userEdt->editStatus($id, $status, $role, $firstName, $lastName);