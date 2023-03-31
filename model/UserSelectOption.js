//верхній блок кнопок і селекторів
$(document).ready(function () {

    //button OK
    $('#btnOK').mousedown(function () {

        let selectedOption = $('select[id="selectedOption"] option:selected').attr('id');
        //робота з різними опціями селекта
        if (selectedOption === 'setActive') {
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
        if (selectedOption === 'setNotActive') {
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
        if (selectedOption === 'delete-option') {
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
                        //видаляє рядок на фронті
                        $('tr[data-id="' + id + '"]').remove();

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
        if (selectedOption === 'unselected' && countChecked > 0) {
            $('#modalWarning').modal('show');
            $('.warning-text').html('No action selected. Please make a choice');
        }

 //вікно попередження, що не обрані користувачі, а в селектбоксі обрана опція та натиснута кнопка «ОК»
        if (selectedOption !== 'unselected' && countChecked == 0) {
            $('#modalWarning').modal('show');
            $('.warning-text').html('No users selected! Please choose users.');
        }

        $('#btnOK').mouseup(function () {
//знімає виділення із чекбоксів після виконання дії
            $('input[type="checkbox"]').each(function () {
                $(this).prop('checked', false);
            })
//ставить select options в початкову позицію після виконання дії
            $('#selectedOption').val('-Please Select-')

        });
    })
});

