
$('.btn-edit-user').on('click', function () {
    $('.modal-content').attr('data-mode', 'edit');
    let mode = $('.modal-content').attr('data-mode');
    // console.log("!!!mode", mode);
    let id = $(this).closest('tr').data('id');
    $('.modal-content').attr('data-id', id);

    // console.log("!!!id", id);
    $('.modal-header').html('<h5 class="modal-title" id="UserModalLabel">Edit user</h5>');

    if (mode === 'edit') {
        let name = $('tr[data-id="' + id + '"] .user-name').text();
        let firstName = name.split(" ")[0];
        let lastName = name.split(" ")[1];
        let role = $('tr[data-id="' + id + '"] .user-role').text();


        if (firstName && lastName && role) {
            // $('#message-empty-fields').html('<span style="color:green">Succesfull added!!!</span>')

            // console.log("firstName", firstName);
            // console.log("lastName", lastName);
            // console.log("role", role);
            // console.log("!!!id", id);

            $('#first-name').val(firstName);
            $('#last-name').val(lastName);
            $('#modal-status').prop("checked", false);
            $('#modal-role').val(role);
        }
    }
})
$("#modal-btn-save").click(function (){
    let mode = $('.modal-content').attr('data-mode');
    let id = $(this).closest('div.modal-content').data('id');
    let name = $('tr[data-id="' + id + '"] .user-name').text();
    // console.log("In edit mode is", mode);
    // console.log("!!!id", id);
    // console.log("name", name);


    if (mode === 'edit') {
        // let firstName = name.split(" ")[0];
        // let lastName = name.split(" ")[1];
        // let role = $('tr[data-id="' + id + '"] .user-role').text();

        let firstName = $('#first-name').val();
        let lastName = $('#last-name').val();
        let role = $('#modal-role').val();

        // console.log("!!!!!!!firstName", firstName)
        // console.log("!!!!!!!lastName", lastName)
        // console.log("!!!!!!!role", role)

        // console.log("name", name);
        // console.log("firstName", firstName);
        // console.log("lastName", lastName);
        // console.log("role", role);
        // console.log("!!!id", id);

        if (firstName && lastName && role) {
            $('#message-empty-fields').html('<span style="color:green">Succesfull edited!!!</span>')

            // console.log("firstName", firstName);
            // console.log("lastName", lastName);
            // console.log("role", role);
            // console.log("!!!id", id);


            $.ajax({
                url: '../model/UserEdit.php',
                method: 'POST',
                data: {
                    id: id,
                    firstName: firstName,
                    lastName: lastName,
                    role: role,
                },
                success: function (response){
                    let res = JSON.parse(response);
                    console.log(res);
                }
            })
            $('#first-name').val('') ;
            $('#last-name').val('');
            $('#modal-status').prop('checked', false);
            $('#modal-role').val('');
        }
    }
});
