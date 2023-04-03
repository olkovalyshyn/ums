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

//робота з різними опціями селекта (при умові, що є checked, щоб уникнути show modal на видалення)
        if (selectedOptionBottom === 'delete-optionBottom' && $('input[type="checkbox"]:checked').length > 0) {

//виклик модального вікна для підтвердження видалення
            $('#modalConfirmDelete').modal('show');

            //встановлює текст модального повідомлення
            $('.warning-text').html('Do you confirm delete of the user?');

            let isDeleteUser;

            //дії по кнопці так модалки
            $('#modal-btn-yes').click(function () {
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

                        //ставить select options в початкову позицію після виконання дії по option Delete
                        $('#selectedOptionBottom').val('-Please Select-');
                    })
                }
            })
            //дії по кнопці ні модалки
            $('#modal-btn-no').click(function () {
                $('#modalConfirmDelete').modal('hide');
                isDeleteUser = "no";

                //ставить select options в початкову позицію після виконання дії по option Delete
                $('#selectedOptionBottom').val('-Please Select-');

                //знімає виділення і чекбоксів, якщо була відмова по видаленню
                $('input[type="checkbox"]:checked').each(function () {
                    let id = $(this).closest('tr').data('id');
                    $(this).prop('checked', false);
                });
            });
        }

        //встановлює назву модального Warning
        $('.modal-title').html('Warning!');

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

            $('input[type="checkbox"]').each(function () {
                $(this).prop('checked', false);
            })

            //ставить select options в початкову позицію після виконання дії
            $('#selectedOptionBottom').val('-Please Select-')
        });
    })
});
