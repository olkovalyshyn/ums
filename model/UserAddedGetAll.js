function getAll(){
    $.ajax({
        url: "./model/UserAddedGetAll.php",
        type: "GET",
        dataType: "json",
        success: function (response) {
            response = jQuery.parseJSON(response);
            // console.log("!!!response",response);
            $('#items-table').html(displayData(response));
        },
        error: function (xhr, status, error) {
            let res = jQuery.parseJSON(error);
            return res;
        }

    });
}
//при запуску скрипта разово заносить дані на фронт із бека
getAll();

//заносить дані, що отримані із бека у форму
function displayData(dataAll) {
    // console.log("!!!dataAll",dataAll);

    let html = '';
    dataAll.user.forEach((item, index) => {

        html += '<tr data-id="' + item.id + '" id="tblrow">\
        <td class="align-middle">\
            <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">\
                <input type="checkbox" name="child" value="' + item.id + '" class="select-option custom-control-input" id="item-' + item.id + '">\
                <label class="custom-control-label" for="item-' + item.id + '"></label>\
            </div>\
        </td>\
        <td class="user-name text-nowrap align-middle">' + item.first_name + ' ' + item.last_name + '</td>\
        <td class="user-role text-nowrap align-middle"><span>' + item.role + '</span></td>\
        <td class="text-center align-middle"><i id="statusMark" class="fa fa-circle status ' + (item.status === "1" ? "active-circle" : "not-active-circle") + '"></i></td>\
        <td class="text-center align-middle">\
            <div class="btn-group align-top">\
                <button type="button" class="btn btn-sm btn-outline-secondary badge btn-edit-user"  data-toggle="modal" data-target="#user-form-modal" data-id="' + item.id + '">Edit</button>\
                <button type="button" class="btn btn-sm btn-outline-secondary badge btn-del-user"><i class="fa fa-trash"></i></button>\
            </div>\
        </td>\
    </tr>';
    });
    return html;
}