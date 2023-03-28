<?php

class ConnectionDb
{
    private $host = "localhost";
    private $dbname = "ums";
    private $username = "root";
    private $password = "";


    protected function connect()
    {
        $dsn = "mysql:host=$this->host; dbname=$this->dbname";

        try{
            $pdo = new PDO($dsn, $this->username, $this->password);
            $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
//    echo "Connected successfully";
            return $pdo;

        }catch (PDOException $e){
            echo "Connection failed: " . $e->getMessage();
        }
    }
}
class UserGetDB extends ConnectionDb
{
    public function get()
    {
        $sql = "SELECT * FROM `users`";
        $result = $this->connect()->prepare($sql);
        $result->execute();
        return $result->fetchAll();
    }
}
$user = new UserGetDB();
$data = $user->get();
echo json_encode($data);
