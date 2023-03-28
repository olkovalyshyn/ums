
$(document).ready(function() {
    //отримання даних із бека
    function loadData() {
        $.ajax({
            url: "./model/serverToClientGet.php",
            type: "GET",
            dataType: "json",
            success: function(data) {
                $('#items-table').html(displayData(data));
            }
        });
    }
    //інтервал підключки до бази для оновлення інфо на клієнті
    setInterval(function (){
        loadData();
    },10000);
    loadData();
//заносить дані, що отримані із бека у форму
    function displayData(data) {
        let html = '';
        data.forEach((item, index) => {

            html += '<tr data-id="' + item.id + '" id="tblrow">\
        <td class="align-middle">\
            <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">\
                <input type="checkbox" name="selectionInCheckbox[' + item.id + ']" value="' + item.id + '" class="select-option custom-control-input" id="item-' + item.id + '">\
                <label class="custom-control-label" for="item-' + item.id + '"></label>\
            </div>\
        </td>\
        <td class="user-name text-nowrap align-middle">' + item.first_name + ' ' + item.last_name + '</td>\
        <td class="user-role text-nowrap align-middle"><span>' + item.role + '</span></td>\
        <td class="text-center align-middle qwe"><i id="statusMark" class="fa fa-circle status ' + (item.status === "on" ? "active-circle" : "not-active-circle") + '"></i></td>\
        <td class="text-center align-middle">\
            <div class="btn-group align-top">\
                <button id="btnEdit" class="btn btn-sm btn-outline-secondary badge btn-edit-user" type="button" data-toggle="modal" data-target="#user-form-modal" data-id="' + item.id + '">Edit</button>\
                <button class="btn btn-sm btn-outline-secondary badge btn-del-user" type="button"><i class="fa fa-trash"></i></button>\
            </div>\
        </td>\
    </tr>';
        });
        return html;
    }


});



