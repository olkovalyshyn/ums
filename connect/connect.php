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
