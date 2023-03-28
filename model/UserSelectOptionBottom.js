//нижній блок кнопок і селекторів
$(document).ready(function() {
    $('#btnOKBottom').click(function () {
        let selectedOptionBottom = $('select[id="selectedOptionBottom"] option:selected').attr('id');
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
                    success: function (response){
                        let res = JSON.parse(response);
                        console.log(res);
                    }
                })
            })
        }

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
                    success: function (response){
                        let res = JSON.parse(response);
                        console.log(res);
                    }
                })
            })
        }

        if (selectedOptionBottom === 'delete-optionBottom') {
            $('input[type="checkbox"]:checked').each(function () {
                let id = $(this).closest('tr').data('id');

                $.ajax({
                    url: '../model/UserDel.php',
                    method: 'POST',
                    data: {
                        id: id,
                    },
                    success: function (response){
                        let res = JSON.parse(response);
                        console.log(res);
                    }
                })
            })
        }

//вікно попередження, що обраний користувач, натиснута кнопка «ОК», але не вибрано дію в селектбоксі
        let countChecked = $('input[type="checkbox"]:checked').length;
        if(selectedOptionBottom === 'unselectedBottom' && countChecked > 0){
            $('#modalWarning').modal('show');
            $('.warning-text').html('No action selected. Please make a choice');
        }

        //вікно попередження, що не обрані користувачі, а в селектбоксі обрана опція та натиснута кнопка «ОК»

        if(selectedOptionBottom !== 'unselectedBottom' && countChecked == 0){
            $('#modalWarning').modal('show');
            $('.warning-text').html('No users selected! Please choose users.');
        }

    })


});
