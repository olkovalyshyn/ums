$(document).ready(function () {
    $('.btn-add-user, .btn-add-user-bottom').off().on('click', function () {
    // $('.btn-add-user, .btn-add-user-bottom').on('click', function () {

        //модальному вікну надається дата-режим "add"
        $('.modal-content').attr('data-mode', 'add');

        //зміна заголовка модального вікна на форму дадавання "Add user" (одна модалка на едд і едіт)
        $('.modal-header').html('<h5 class="modal-title" id="UserModalLabel">Add user</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');

        $('#modal-role').val('-Please Select-');

        //знімає виділення із чекбоксів перед додаванням юзера (якщо попередньо були натиснуті)
        $('input[type="checkbox"]').each(function () {
            $(this).prop('checked', false);
        })

        //знімає виділення із option перед додаванням юзера (якщо попередньо були натиснуті і не викорстані)
        $('#selectedOption, #selectedOptionBottom').val('-Please Select-');


    });

    $("#modal-btn-save").on('click', function () {
        let mode = $('.modal-content').attr('data-mode');

//формування даних для бази даних
        if (mode === 'add') {
            let firstName = $('#first-name').val();
            let lastName = $('#last-name').val();
            let status = $('#modal-status').is(':checked') ? 'on' : 'off';
            let role = $('#modal-role').val() ? $('#modal-role').val() : 'User';

//валідація і вивід інфо
            if (firstName && lastName) {
                $('.modal').modal('hide');

                //якщо поля заповнені, то передаємо в БД
                $.ajax({
                    url: '../model/UserAdd.php',
                    method: 'POST',
                    data: {
                        firstName: firstName,
                        lastName: lastName,
                        status: status,
                        role: role,
                    },
                    success: function (response) {
                        ajaxSuccessHandlerAdd();
                        if (response) {
                            let res = jQuery.parseJSON(response);
                            return res;
                        }
                    },
                    error: function (xhr, status, error) {
                        let res = jQuery.parseJSON(error);
                        return res;
                    }
                })

//очистка модального вікна
                $('#first-name').val('');
                $('#last-name').val('');
                $('#modal-status').prop('checked', false);
                $('#modal-role').val('');
            }
        }
    });

    function ajaxSuccessHandlerAdd() {
        //отримання даних із бека
        $.ajax({
            url: "./model/UserAddedGetSingle.php",
            type: "GET",
            dataType: "json",
            success: function (response) {
                $('#items-table').append(displayDataAdd(response['arr']));

                if (response['resp']) {
                    return response['resp'];
                }
            },
            error: function (xhr, status, error) {
                return error;
            }
        });

//заносить дані, що отримані із бека у форму
        function displayDataAdd(dataSingle) {
            let html = '';
            dataSingle.forEach((item, index) => {

                html += '<tr data-id="' + item.id + '" id="tblrow">\
        <td class="align-middle">\
            <div class="custom-control custom-control-inline custom-checkbox custom-control-nameless m-0 align-top">\
                <input type="checkbox" name="child" ' + (item.selection === "on" ? "checked" : "") + ' value="' + item.id + '" class="select-option custom-control-input" id="item-' + item.id + '">\
                <label class="custom-control-label" for="item-' + item.id + '"></label>\
            </div>\
        </td>\
        <td class="user-name text-nowrap align-middle">' + item.first_name + ' ' + item.last_name + '</td>\
        <td class="user-role text-nowrap align-middle"><span>' + item.role + '</span></td>\
        <td class="text-center align-middle"><i id="statusMark" class="fa fa-circle status ' + (item.status === "on" ? "active-circle" : "not-active-circle") + '"></i></td>\
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
    }
});





