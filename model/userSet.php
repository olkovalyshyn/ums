<?php

include("../connect/connect.php");

class UserSet extends ConnectionDb
{
    public function setSelection($selectionInCheckbox, $id)
    {
        $sql = "UPDATE `users` SET `selection` = '$selectionInCheckbox' WHERE `id` = '$id';";
        //        $sql = "INSERT INTO users (`selection`) VALUE ('$selectionInCheckbox')";
        $result = $this->connect()->prepare($sql);
        $result->execute();
        return $result->fetchAll();
    }
}
