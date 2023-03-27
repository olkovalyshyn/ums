
<!--Виводимо над та під таблицею блок з наступними елементами:-->
<!--a. кнопка add-->
<!--b. селектбокс з першим пунктом -Please Select-,-->
<!--який має такі функціональні елементи (1. Set active, 2. Set not active, 3. Delete)-->
<!--c. кнопку OK		-->


<form action="" >
    <button data-toggle="modal" data-target="#user-form-modal" type="button" class="btn btn-primary btn-add-user">Add</button>
    <select name="selectedOption">
        <option selected disabled>-Please Select-</option>
        <option id="setActive" value="active" >1. Set active</option>
        <option id="setNotActive" value="notActive">2. Set not active</option>
        <option value="delete">3. Delete</option>
    </select >

    <button type="submit" id="btnOK" class="btn btn-primary" >OK</button>

    <?php include ("item.php")?>

</form>

<!--class="form-control"-->