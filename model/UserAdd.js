$(document).ready(function () {
    $('.btn-add-user').mousedown(function () {

        //очищення модального вікна при відкритті модалки верхня кнопка (бекдроп едіт)
        $('.btn-add-user').mouseup(function () {
            $('#first-name').val('');
            $('#last-name').val('');
            $('#modal-status').prop('checked', false);
            $('#modal-role').val('-Please Select-');
        })

//очищення модального вікна при відкритті модалки нижня кнопка (бекдроп едіт)
        $('.btn-add-user-bottom').mouseup(function () {
            $('#first-name').val('');
            $('#last-name').val('');
            $('#modal-status').prop('checked', false);
            $('#modal-role').val('-Please Select-');
        })


        $('.modal-content').attr('data-mode', 'add');
        //зміна заголовка модального вікна на форму дадавання "Add user" (одна модалка на едд і едіт)
        $('.modal-header').html('<h5 class="modal-title" id="UserModalLabel">Add user</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');

    });
//нижній блок кнопок і селекторів
    $('.btn-add-user-bottom').click(function () {
        $('.modal-content').attr('data-mode', 'add');
        $('.modal-header').html('<h5 class="modal-title" id="UserModalLabel">Add user</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');

    });

//підтвердження на збереження

    $("#modal-btn-save").click(function () {
        let mode = $('.modal-content').attr('data-mode');


//формування даних для бази даних
        if (mode === 'add') {
            let firstName = $('#first-name').val();
            let lastName = $('#last-name').val();
            let status = $('#modal-status').is(':checked') ? 'on' : 'off';
            let role = $('#modal-role').val();
//валідація і вивід інфо
            if (firstName && lastName && status && role) {
                //якщо поля заповнені, то закриваємо модалку
                $('.modal').modal('hide');

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
                        let res = jQuery.parseJSON(response);
                        return res;
                    }
                })
//очистка модального вікна
                $('#first-name').val('');
                $('#last-name').val('');
                $('#modal-status').prop('checked', false);
                $('#modal-role').val('');
            } else {
 //при наявності незаповнених полів висвічується повідомлення
                $('#message-empty-fields').html('<span style="color:red">Please, fill all fields...</span>')
            }
        }
    });
//знімає надпис про успішність/неуспішність із модалки
    $('#modal-btn-close').click(function () {
        $('#message-empty-fields').html('<span></span>');
    });
    $('#modal-x-close').click(function () {
        $('#message-empty-fields').html('<span></span>');
    });

});





