<?php

include ("./connect/connect.php");

class UserGet extends ConnectionDb
{
    public function get()
    {
        $sql = "SELECT * FROM `users`";
        $result = $this->connect()->prepare($sql);
        $result->execute();
        return $result->fetchAll();
    }
}
