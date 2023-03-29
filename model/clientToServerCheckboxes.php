<?php
include_once("../connect/connect.php");

$id = $_POST['id'];
$checked = $_POST['checked'];

class checkboxesEdit extends ConnectionDb
{
    public $response = array('status' => false, 'error' => array('code' => 100, 'message' => 'not found user'));

    public function edit($id, $checked)
    {
        $sql = "UPDATE `users` SET `selection`= :selection WHERE `id` = :id";
        $params = [':selection' => $checked, ':id' => $id];
        $result = $this->connect()->prepare($sql);
        if ($result->execute($params)) {
            $this->response['status'] = true;
        }
        return json_encode($this->response);
    }

}

$userEdt = new checkboxesEdit();
$userEdt->edit($id, $checked);

