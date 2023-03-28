$(document).ready(function() {

$('#btnEdit').click(function () {
        console.log("CLICK on btn-edit-user");
        //модальному вікну присвоює режим "edit"
        $('.modal-content').data('mode', 'edit');

        let mode = $('.modal-content').attr('data-mode');

        let id = $(this).data('id');

        // модальному вікну дає id натиснутого рядка
        $('#modal-btn-save').data('id', id);
        //змінює назву модального вікна відповідно до режиму
        $('.modal-header').html('<h5 class="modal-title" id="UserModalLabel">Edit user</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');
//отримання даних із відповідного рядка
        if (mode === 'edit') {
            let name = $('tr[data-id="' + id + '"] .user-name').text();
            let firstName = name.split(" ")[0];
            let lastName = name.split(" ")[1];
            let role = $('tr[data-id="' + id + '"] .user-role').text();
            let statusBool = $('tr[data-id="' + id + '"] #statusMark').hasClass('active-circle');
//занесення даних відповідного рядка в модальне вікно для редагування
            if (firstName && lastName && role) {
                $('#first-name').val(firstName);
                $('#last-name').val(lastName);
                $('#modal-status').prop("checked", statusBool);
                $('#modal-role').val(role);
            }
        }
    })
//збереження змін
    $("#modal-btn-save").click(function (){
        let mode = $('.modal-content').attr('data-mode');
        let id = $(this).data('id');
        let name = $('tr[data-id="' + id + '"] .user-name').text();

//зміна класу і відповідно кольору даних стовпця Status
        let status = $('#modal-status').prop('checked');
        if(status){
            $('tr[data-id="' + id + '"] .status').removeClass('not-active-circle ').addClass('active-circle');
        } else {
            $('tr[data-id="' + id + '"] .status').removeClass('active-circle').addClass('not-active-circle');
        }
//отримання даних для занесення в базу даних
        if (mode === 'edit') {
            let firstName = $('#first-name').val();
            let lastName = $('#last-name').val();
            let role = $('#modal-role').val();
            // let isActive = $('#modal-status').prop('checked') ? 'on' : 'off';
            let status = $('#modal-status').prop('checked') ? 'on' : 'off';
//валідація
            if (firstName && lastName && role) {
                $('#message-empty-fields').html('<span style="color:green">Succesfull edited!!!</span>')

                $.ajax({
                    url: '../model/UserEdit.php',
                    method: 'POST',
                    data: {
                        id: id,
                        firstName: firstName,
                        lastName: lastName,
                        role: role,
                        status: status,
                    },
                    success: function (response){
                        if(response){
                            let res = json_decode(response);
                            console.log(res);
                        }
                    }
                })
 //очищення модального вікна
                $('#first-name').val('') ;
                $('#last-name').val('');
                $('#modal-status').prop('checked', false);
                $('#modal-role').val('');
            }
        }
    });


});




