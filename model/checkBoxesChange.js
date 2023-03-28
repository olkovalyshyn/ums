$(document).ready(function() {
    let checkboxes = $("tbody input[type='checkbox']");
    $('#all-items').click(function(){
        let isCheckedHeader = $(this).is(':checked');
        checkboxes.prop('checked', isCheckedHeader);
    });

    checkboxes.click(function(){
        let isChecked = true;
        checkboxes.each(function (){
            isChecked = isChecked && $(this).is(':checked');
        })
        $('#all-items').prop('checked', isChecked);
    })
})


