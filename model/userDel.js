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
                }
            });
            $('#modal-btn-no').on("click", function () {
                $('#modalConfirmDelete').modal('hide');

                isDeleteUser = "no";
            });

        });
    })
});

