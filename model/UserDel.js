$(document).ready(function () {
    $('body').off('mousedown').on('mousedown', function () {
        $('.btn-del-user').off('click').on('click',function () {
            let id = $(this).closest('tr').data('id');

            //знімає виділення із option перед редагуванням юзера (якщо попередньо були натиснуті і не викорстані)
            $('#selectedOption, #selectedOptionBottom').val('-Please Select-');

            //знімає виділення із чекбоксів після виконання дії
            $('input[type="checkbox"]').each(function () {
                $(this).prop('checked', false);
            })

            //встановлює назву модального Warning
            $('.modal-title').html('Warning!');

            //встановлює текст модального повідомлення
            $('.warning-text').html('Do you confirm delete of the user?');

            //виклик модального вікна для підтвердження видалення
            let isDeleteUser;
            $('#modalConfirmDelete').modal('show');

            $('#modal-btn-yes').off("click").on("click", function () {
                isDeleteUser = "yes";
                $('#modalConfirmDelete').modal('hide');

                if (isDeleteUser == "yes") {

                    $.ajax({
                        url: '../model/UserDel.php',
                        method: 'POST',
                        data: {
                            id: id,
                        },
                        success: function (response) {
                            let res = jQuery.parseJSON(response);
                            return res;
                        },
                        error: function (xhr, status, error) {
                            let res = jQuery.parseJSON(error);
                            return res;
                        }
                    });

                    //видаляє рядок на фронті
                    $('tr[data-id="' + id + '"]').remove();
                }
            });

            $('#modal-btn-no').off("click").on('click',function () {
                //закриває модалку
                $('#modalConfirmDelete').modal('hide');

                isDeleteUser = "no";

            });
        });
    })


});

