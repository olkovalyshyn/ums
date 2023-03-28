<?php
include_once("../connect/connect.php");
$id = $_POST['id'];
class UserDelete extends ConnectionDb
{
    public $response = array('status' => false, 'error' => array('code' => 100, 'message'=> 'not found user'));
    public function delete($id)
    {
        $sql = "DELETE FROM `users` WHERE `id` = '$id'";
        if($this->connect()->query($sql)){
            $this->response['status'] = true;
        }
        echo json_encode($this->response);
    }
}

$user = new UserDelete();
$user->delete($id);
