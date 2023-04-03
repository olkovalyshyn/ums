$(document).ready(function () {

//для формування об'єкта едіт
    $('body').on('mousedown', function () {

//виклик модалки для редагування юзера
        $('.btn-edit-user').click(function () {

            //знімає виділення із чекбоксів перед редагуванням юзера (якщо попередньо були натиснуті)
            $('input[type="checkbox"]').each(function () {
                $(this).prop('checked', false);
            })

            //модальному вікну надається дата-режим "edit"
            $('.modal-content').attr('data-mode', 'edit');
            let mode = $('.modal-content').attr('data-mode');

            //визначаєтсья поточний рядок для подальшого діставання id саме із того рядка, де був клік на кнопці
            let currentRow = $(this).closest('tr');
            let id = currentRow.data('id');

            // модальній кнопці дає поточний рядок натиснутого рядка
            $('#modal-btn-save').data('currentRow', currentRow);

            //знімає виділення із option перед редагуванням юзера (якщо попередньо були натиснуті і не викорстані)
            $('#selectedOption, #selectedOptionBottom').val('-Please Select-');

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
                $('#first-name').val(firstName);
                $('#last-name').val(lastName);
                $('#modal-status').prop("checked", statusBool);
                $('#modal-role').val(role);
            }

            //очищення модального вікна при закритті модалки (на х) . .btn-edit-user призначає обробник на клік
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

//збереження змін
        $('#modal-btn-save').click(function () {
            let mode = $('.modal-content').attr('data-mode');

            // для уникнення помилок при використанні цієї ж модалки mode add
            if (mode === 'edit') {
                let id = $(this).data('currentRow').data('id');

                //зміна класу і відповідно кольору даних стовпця Status
                let status = $('#modal-status').prop('checked');
                if (status) {
                    $('tr[data-id="' + id + '"] .status').removeClass('not-active-circle ').addClass('active-circle');
                } else {
                    $('tr[data-id="' + id + '"] .status').removeClass('active-circle').addClass('not-active-circle');
                }
            }

            if (mode === 'edit') {
                //заносить редаговані дані у змінні
                let id = $(this).data('currentRow').data('id');
                let firstName = $("#first-name").val();
                let lastName = $("#last-name").val();
                let role = $("#modal-role").val();
                let status = $("#modal-status").prop('checked') ? 'on' : 'off';

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
                        ajaxSuccessHandlerEdit();
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

                //очищення модального вікна
                $('#first-name').val('');
                $('#last-name').val('');
                $('#modal-status').prop('checked', false);
                $('#modal-role').val('-Please Select-');

                //закриває модальне вікно
                $('.modal').modal('hide');
            }

            function ajaxSuccessHandlerEdit() {
                let id = $('#modal-btn-save').data('currentRow').data('id');

                //отримання даних із бека
                $.ajax({
                    url: "./model/UserEditedGet.php",
                    type: "GET",
                    dataType: "json",
                    data: {id: id},
                    success: function (response) {
                        //вставлення редагованих даних у відповідний рядок
                        $('tr[data-id="' + id + '"]').html(displayDataEdited(response['arr']));

                        if (response['resp']) {
                            return response['resp'];
                        }
                    },
                    error: function (xhr, status, error) {
                        return error;
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
    })
//очистка модального вікна при кліку на бекдроп (mousedown - бо при click при тестуванні юзер може ЛКМ виділивши інпут вилізти за межі модалки, доклікнути на бекдропі і форма очищається, що не правильно)
    $('#user-form-modal').on('mousedown', function(event) {
        if(event.target.id === 'user-form-modal'){
            $('#first-name').val('');
            $('#last-name').val('');
            $('#modal-status').prop('checked', false);
            $('#modal-role').val('-Please Select-');
        }
    });
});


