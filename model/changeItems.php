

<?php

//$option = $_POST["selectedOption"];
//
//echo "<pre>";
//print_r($_POST);
//echo "</pre>";
//
//
//echo $option;
//echo "<pre>";
//print_r($_POST["selectionInCheckbox"]);
//echo "</pre>";

//foreach ($_POST["selectionInCheckbox"] as $key => $value){
//    echo $key . " - " .$value;
//};

// формує масив із id, які відзначені у checkbox
//$checkedIdArray = [];
//foreach ($_POST["selectionInCheckbox"] as $key => $value) {
//    array_push($checkedIdArray, $key);
//}

//вибирає зі списку лише чекнуті дані і цей checked записує в БД
//include("./userSet.php");
//foreach ($_POST["listUsers"] as $key => $value) {
//    if (in_array($key, $checkedIdArray)) {
//        echo "Об'єкт із індексом $key чекнутий." . "<br>";
//
//        $nameChecked = $_POST["selectionInCheckbox"][$key];
//        $id = $key;
//
//        $user = new UserSet();
//        $user->setSelection($nameChecked, $id);
//    }
//}
