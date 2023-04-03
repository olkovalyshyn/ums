<?php
include_once("../connect/connect.php");
$id = $_POST['id'];

class UserDelete extends ConnectionDb
{
    public function delete($id)
    {
        $sql = "DELETE FROM `users` WHERE `id` = '$id'";
        if ($this->connect()->query($sql)) {
            $response = array('status' => true, 'error' => null, 'id' => $id);
        } else {
            $response = array('status' => false, 'error' => array('code' => 100, 'message' => 'not found user'));
        }
        echo json_encode($response);
    }
}

$user = new UserDelete();
$user->delete($id);
