$(document).ready(function () {
    $('body').mousedown(function () {
        $('.btn-del-user').click(function () {
            let id = $(this).closest('tr').data('id');

 //виклик модального вікна для підтвердження видалення
            let isDeleteUser;
            $('#modalConfirmDelete').modal('show');

            $('#modal-btn-yes').on("click", function () {
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
                        }
                    });

                    //видаляє рядок на фронті
                    $('tr[data-id="' + id + '"]').remove();
                }
            });
            $('#modal-btn-no').click(function () {
                //закриває модалку
                $('#modalConfirmDelete').modal('hide');

                isDeleteUser = "no";

                //ставить select options в початкову позицію після виконання дії по option Delete
                $('#selectedOption').val('-Please Select-');

                //знімає виділення із чекбоксів після виконання дії
                $('input[type="checkbox"]').each(function () {
                    $(this).prop('checked', false);
                })


            });

        });
    })
});

