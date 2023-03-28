$(document).ready(function() {
    $('.btn-del-user').on('click', function () {
        let id = $(this).closest('tr').data('id');

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
                        let res = json_decode(response);
                        console.log(res);
                    }
                });
            }
        });
        $('#modal-btn-no').on("click", function () {
            $('#modalConfirmDelete').modal('hide');

            isDeleteUser = "no";
        });

    });

});

