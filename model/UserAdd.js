$('.btn-add-user').click(function(){
    $('.modal-content').attr('data-mode', 'add');
    $('.modal-header').html('<h5 class="modal-title" id="UserModalLabel">Add user</h5><button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>');

});

$("#modal-btn-save").click(function (){
    let mode = $('.modal-content').attr('data-mode');

    if(mode === 'add'){
        let firstName = $('#first-name').val();
        let lastName = $('#last-name').val();
        let status = $('#modal-status').is(':checked') ? 'on' : 'off';
        let role = $('#modal-role').val();

        if(firstName && lastName && status && role){
            $('#message-empty-fields').html('<span style="color:green">Succesfull added!!!</span>')

            $.ajax({
                url: '../model/UserAdd.php',
                method: 'POST',
                data: {
                    firstName: firstName,
                    lastName: lastName,
                    status: status,
                    role: role,
                },
                success: function (response) {
                    let res = json_decode(response);
                    console.log(res);
                }
            })

            $('#first-name').val('') ;
            $('#last-name').val('');
            $('#modal-status').prop('checked', false);
            $('#modal-role').val('');
        } else {
            $('#message-empty-fields').html('<span style="color:red">Please, fill all fields...</span>')
        }

    }
});

//знімає надпис про успішність/неуспішність із модалки
$('#modal-btn-close').click(function (){
    $('#message-empty-fields').html('');
});
$('#modal-x-close').click(function (){
    $('#message-empty-fields').html('');
});



