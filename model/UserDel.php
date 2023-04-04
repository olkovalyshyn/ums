<?php
include_once("../connect/connect.php");
$id = $_POST['id'];

class UserDelete extends ConnectionDb
{
    public function getUserById($id)
    {
        $sql = "SELECT * FROM `users` WHERE `id` = $id";
        $result = $this->connect()->query($sql);
        if ($result !== false) {
            $row = $result->fetch(PDO::FETCH_ASSOC);
            if ($row) {
                $user = array(
                    'id' => $row['id'],
                    'first_name' => $row['first_name'],
                    'last_name' => $row['last_name'],
                    'role' => $row['role'],
                    'status' => $row['status'],
                );
                return $user;
            }
        }
        return false;
    }

    public function delete($id)
    {
        $user = $this->getUserById($id);

        if ($user) {
            $sql = "DELETE FROM `users` WHERE `id` = '$id'";
            if ($this->connect()->query($sql)) {
                $response = array('status' => true, 'error' => null, 'user' => $user);
            } else {
                $response = array('status' => false, 'error' => array('code' => 100, 'message' => 'not found user'));
            }
        } else {
            $response = array('status' => false, 'error' => array('code' => 100, 'message' => 'not found user'));
        }
        echo json_encode($response);
    }
}

$user = new UserDelete();
$user->delete($id);