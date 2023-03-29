//нижній блок кнопок і селекторів
$(document).ready(function () {

    //button OK
    $('#btnOKBottom').mousedown(function () {

        let selectedOptionBottom = $('select[id="selectedOptionBottom"] option:selected').attr('id');

        //робота з різними опціями селекта
        if (selectedOptionBottom === 'setActiveBottom') {
            $('input[type="checkbox"]:checked').each(function () {
                let id = $(this).closest('tr').data('id');
                $('tr[data-id="' + id + '"] #statusMark').removeClass('not-active-circle ').addClass('active-circle');

                $.ajax({
                    url: '../model/UserSelectOption.php',
                    method: 'POST',
                    data: {
                        id: id,
                        status: 'on',
                    },
                    success: function (response) {
                        let res = jQuery.parseJSON(response);
                        return res;
                    }
                })
            })
        }

//робота з різними опціями селекта
        if (selectedOptionBottom === 'setNotActiveBottom') {
            $('input[type="checkbox"]:checked').each(function () {
                let id = $(this).closest('tr').data('id');
                $('tr[data-id="' + id + '"] #statusMark').removeClass('active-circle ').addClass('not-active-circle');

                $.ajax({
                    url: '../model/UserSelectOption.php',
                    method: 'POST',
                    data: {
                        id: id,
                        status: 'off',
                    },
                    success: function (response) {
                        let res = jQuery.parseJSON(response);
                        return res;
                    }
                })
            })
        }

//робота з різними опціями селекта
        if (selectedOptionBottom === 'delete-optionBottom') {
//виклик модального вікна для підтвердження видалення
            $('#modalConfirmDelete').modal('show');
            let isDeleteUser;

            $('#modal-btn-yes').on("click", function () {
                isDeleteUser = "yes";
                $('#modalConfirmDelete').modal('hide');

                if (isDeleteUser == "yes") {
                    $('input[type="checkbox"]:checked').each(function () {
                        let id = $(this).closest('tr').data('id');

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
                        })
                    })
                }
            })
            $('#modal-btn-no').on("click", function () {
                $('#modalConfirmDelete').modal('hide');
                isDeleteUser = "no";
            });

        }

//вікно попередження, що обраний користувач, натиснута кнопка «ОК», але не вибрано дію в селектбоксі
        let countChecked = $('input[type="checkbox"]:checked').length;
        if (selectedOptionBottom === 'unselectedBottom' && countChecked > 0) {
            $('#modalWarning').modal('show');
            $('.warning-text').html('No action selected. Please make a choice');
        }

        //вікно попередження, що не обрані користувачі, а в селектбоксі обрана опція та натиснута кнопка «ОК»

        if (selectedOptionBottom !== 'unselectedBottom' && countChecked == 0) {
            $('#modalWarning').modal('show');
            $('.warning-text').html('No users selected! Please choose users.');
        }

        $('#btnOKBottom').mouseup(function () {
 //знімає виділення із чекбоксів після виконання дії

            $('input[name="child"]').each(function () {
                $(this).prop('checked', false);
            })
 //ставить select options в початкову позицію після виконання дії
            $('#selectedOptionBottom').val('-Please Select-')

        });
    })
});
