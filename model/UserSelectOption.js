//верхній блок кнопок і селекторів
$(document).ready(function () {

    //button OK (mousedown для основних дій, а mouseup для зняття чекбоксів)
    $('#btnOK').mousedown(function () {


        let selectedOption = $('select[id="selectedOption"] option:selected').attr('id');
        //робота з різними опціями селекта
        if (selectedOption === 'setActive') {
            $('input[type="checkbox"]:checked').each(function () {
                let id = $(this).closest('tr').data('id');
                $('tr[data-id="' + id + '"] #statusMark').removeClass('not-active-circle ').addClass('active-circle');

                //для респонсу
                let name = $('tr[data-id="' + id + '"] .user-name').text();
                let firstName = name.split(" ")[0];
                let lastName = name.split(" ")[1];
                let role = $('tr[data-id="' + id + '"] .user-role ').text();
                switch (role) {
                    case 'Admin':
                        role = 1;
                        break;
                    case 'User':
                        role = 2;
                        break;
                    default:
                        role = "-Please Select-";
                }
                // console.log("!!!",role);
                let status = $('tr[data-id="' + id + '"] #statusMark').hasClass('active-circle') ? '1' : '0';

                $.ajax({
                    url: '../model/UserSelectOption.php',
                    method: 'POST',
                    data: {
                        id: id,
                        firstName: firstName,
                        lastName: lastName,
                        status: '1',
                        role: role,
                    },
                    success: function (response) {
                        let res = jQuery.parseJSON(response);
                        return res;
                    },
                    error: function (xhr, status, error) {
                        let res = jQuery.parseJSON(error);
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

                let name = $('tr[data-id="' + id + '"] .user-name').text();
                let firstName = name.split(" ")[0];
                let lastName = name.split(" ")[1];
                let role = $('tr[data-id="' + id + '"] .user-role ').text();
                switch (role) {
                    case 'Admin':
                        role = 1;
                        break;
                    case 'User':
                        role = 2;
                        break;
                    default:
                        role = "-Please Select-";
                }
                let status = $('tr[data-id="' + id + '"] #statusMark').hasClass('active-circle') ? '1' : '0';

                $.ajax({
                    url: '../model/UserSelectOption.php',
                    method: 'POST',
                    data: {
                        id: id,
                        firstName: firstName,
                        lastName: lastName,
                        status: '0',
                        role: role,
                    },
                    success: function (response) {
                        let res = jQuery.parseJSON(response);
                        return res;
                    },
                    error: function (xhr, status, error) {
                        let res = jQuery.parseJSON(error);
                        return res;
                    }
                })
            })
        }

//робота з різними опціями селекта (при умові, що є checked, щоб уникнути show modal на видалення)
        if (selectedOption === 'delete-option' && $('input[type="checkbox"]:checked').length > 0) {

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
                            },
                            error: function (xhr, status, error) {
                                let res = jQuery.parseJSON(error);
                                return res;
                            }

                        })

                        //видаляє рядок на фронті
                        $('tr[data-id="' + id + '"]').remove();

                        //ставить select options в початкову позицію після виконання дії по option Delete
                        $('#selectedOption').val('-Please Select-');
                    })
                }
            })
            //дії по кнопці ні модалки
            $('#modal-btn-no').click(function () {
                $('#modalConfirmDelete').modal('hide');
                isDeleteUser = "no";

                //ставить select options в початкову позицію після виконання дії по option Delete
                $('#selectedOption').val('-Please Select-');

                //знімає виділення і чекбоксів, якщо була відмова по видаленню
                $('input[type="checkbox"]:checked').each(function () {
                    $(this).prop('checked', false);
                });
            });
        }

        //встановлює назву модального Warning
        $('.modal-title').html('Warning!');

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
            $('#selectedOption').val('-Please Select-');

        });
    })
});
