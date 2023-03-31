function pushCheckboxes(){
    $('input[name="child"]').each(function (){
        let id = $(this).closest('tr').data('id')
        // console.log(id + " " + $(this).is(':checked'));
        // console.log($(this).is(':checked') ? 'on' : 'off');

        $.ajax({
            url: '../model/clientToServerCheckboxes.php',
            method: 'POST',
            data: {
                id: id,
                checked: $(this).is(':checked') ? 'on' : 'of',
            },
            success: function (response) {
                if (response) {
                    let res = jQuery.parseJSON(response);
                    return res;
                }
            }
        })


    })

}
    // setInterval(function (){pushCheckboxes()}, 500)

