$('.btn-add-user').click(function(){
    $('.modal-content').attr('data-mode', 'add');
    $('.modal-header').html('<h5 class="modal-title" id="UserModalLabel">Add user</h5>');

});

// $('.btn-edit-user').click(function(){
//     $('.modal-content').attr('data-mode', 'edit');
    // console.log("!!!mode", mode);
    // if(mode === 'edit'){
    //     let id = $('.btn-edit-user').data('id');
    //     let name = $('tr[data-id="' + id + '"] .user-name').text();
    //     let firstName = name.split(" ")[0];
    //     let lastName = name.split(" ")[1];
    //     let status = $('tr[data-id="' + id + '"] #modal-status').text();
    //     let role = $('tr[data-id="' + id + '"] .user-role').text();
    //
    //     if(firstName && lastName && status && role){
    //         $('#message-empty-fields').html('<span style="color:green">Succesfull added!!!</span>')
    //
    //         $('#first-name').val(firstName);
    //         $('#last-name').val(lastName);
    //         $('#modal-status').prop("checked", false);
    //         $('#modal-role').val(role);
    //
    //     }
    // }
// });


$("#modal-btn-save").off().click(function (){
    // event.preventDefault();
    let mode = $('.modal-content').attr('data-mode');
    // console.log("!!!mode", mode);

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
                    let res = JSON.parse((response));
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

// $('.btn-edit-user').click(function (){
//     let mode = $('.modal-content').attr('data-mode');
//     console.log("!!!mode", mode);
//     if(mode === 'edit'){
//         let id = $('.btn-edit-user').data('id');
//         let name = $('tr[data-id="' + id + '"] .user-name').text();
//         let firstName = name.split(" ")[0];
//         let lastName = name.split(" ")[1];
//         let status = $('tr[data-id="' + id + '"] #modal-status').text();
//         let role = $('tr[data-id="' + id + '"] .user-role').text();
//
//         if(firstName && lastName && status && role){
//             $('#message-empty-fields').html('<span style="color:green">Succesfull added!!!</span>')
//
//             $('#first-name').val(firstName);
//             $('#last-name').val(lastName);
//             $('#modal-status').prop("checked", false);
//             $('#modal-role').val(role);
//
//         }
//     }
// })


$('#modal-btn-close').click(function (){
    $('#message-empty-fields').html('');
});



