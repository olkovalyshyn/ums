$('.btn-del-user').on('click', function() {
    let id = $(this).closest('tr').data('id');
    console.log("!!!ID ", id);

    if(confirm('Are you sure want to delete this user?')){
        console.log("Yes, delete user.");
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
    }else{
        console.log("Do not delete user!");
    }
})

