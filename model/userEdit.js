$(document).ready(function () {

//для формування об'єкта едіт
    $('body').mousedown(function () {


//виклик модалки для редагування юзера
        $('.btn-edit-user').click(function () {
            //модальному вікну надається дата-режим "edit"
            $('.modal-content').attr('data-mode', 'edit');

            let mode = $('.modal-content').attr('data-mode');

            // let id = $(this).closest('tr').data('id');

            let currentRow = $(this).closest('tr');
            let id = currentRow.data('id');

            // модальній кнопці дає поточний рядок натиснутого рядка
            $('#modal-btn-save').data('currentRow', currentRow);

            // модальній кнопці дає id натиснутого рядка
            // $('#modal-btn-save').data('id', id);


            //змінює назву модального вікна відповідно до режиму
            $('.modal-header').html('<h5 class="modal-title" id="UserModalLabel">Edit user</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');


//отримання даних із відповідного рядка
            if (mode === 'edit') {
                let name = $('tr[data-id="' + id + '"] .user-name').text();
                let firstName = name.split(" ")[0];
                let lastName = name.split(" ")[1];
                let role = $('tr[data-id="' + id + '"] .user-role').text();
                let statusBool = $('tr[data-id="' + id + '"] #statusMark').hasClass('active-circle');


//занесення даних відповідного рядка в модальне вікно для редагування
                if (firstName && lastName && role) {
                    $('#first-name').val(firstName);
                    $('#last-name').val(lastName);
                    $('#modal-status').prop("checked", statusBool);
                    $('#modal-role').val(role);
                }
            }
        })

//збереження змін
        $('#modal-btn-save').mousedown(function () {
            let mode = $('.modal-content').attr('data-mode');

            // для уникнення помилок при використанні цієї ж модалки mode add
            if(mode === 'edit'){
                let id = $(this).data('currentRow').data('id');

                console.log("це поточний id", id);

//зміна класу і відповідно кольору даних стовпця Status
                let status = $('#modal-status').prop('checked');
                if (status) {
                    $('tr[data-id="' + id + '"] .status').removeClass('not-active-circle ').addClass('active-circle');
                } else {
                    $('tr[data-id="' + id + '"] .status').removeClass('active-circle').addClass('not-active-circle');
                }
            }


//отримання даних для занесення в базу даних
            $('#modal-btn-save').mouseup(function () {


                if (mode === 'edit') {
                    let id = $(this).data('currentRow').data('id');
                    let firstName = $("#first-name").val();
                    let lastName = $("#last-name").val();
                    let role = $("#modal-role").val();
                    let status = $("#modal-status").prop('checked') ? 'on' : 'off';
                    console.log('Цей ід записується в базу', id);
                    $.ajax({
                        url: '../model/UserEdit.php',
                        method: 'POST',
                        data: {
                            id: id,
                            firstName: firstName,
                            lastName: lastName,
                            role: role,
                            status: status,
                        },
                        success: function (response) {

                            if (response) {
                                let res = jQuery.parseJSON(response);
                                return res;
                            }
                            ajaxSuccessHandlerEdit()
                        }
                    })

                    //очищення модального вікна
                    $('#first-name').val('');
                    $('#last-name').val('');
                    $('#modal-status').prop('checked', false);
                    $('#modal-role').val('-Please Select-');

                    //закриває модальне вікно
                    $('.modal').modal('hide');


                }
            });


            function ajaxSuccessHandlerEdit() {
                let id = $('#modal-btn-save').data('currentRow').data('id');
                // console.log("from .ajaxSuccess()");
                //отримання даних із бека
                console.log('По цьому ід тягне ІЗ бази', id);
                $.ajax({
                    url: "./model/UserEditedGet.php",
                    type: "GET",
                    dataType: "json",
                    data: {id: id},
                    success: function (dataEdited) {
                        console.log("response from GET", dataEdited);
                        $('tr[data-id="' + id + '"]').html(displayDataEdited(dataEdited));

                    }
                });

                //заносить дані, що отримані із бека у форму
                function displayDataEdited(dataEdited) {
                    let html = '';
                    dataEdited.forEach((item, index) => {

                        html += '<td class="align-middle">\
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
                        ';
                    });
                    return html;
                }

            }


        });

//очищення модального вікна призакритті модалки (на х)
        $('.close').click(function () {

            $('#first-name').val('');
            $('#last-name').val('');
            $('#modal-status').prop('checked', false);
            $('#modal-role').val('-Please Select-');

        })

        //очищення модального вікна при закритті модалки (на кнопку)
        $('#modal-btn-close').click(function () {

            $('#first-name').val('');
            $('#last-name').val('');
            $('#modal-status').prop('checked', false);
            $('#modal-role').val('-Please Select-');

        })
    })
});




