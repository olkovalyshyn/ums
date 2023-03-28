$(document).ready(function () {
    let checkboxes = $('table input[type="checkbox"]');

    // при натисканні чекбокса в шапці виділяютсья усі чекбокси в таблиці
    $('.all-items').click(function () {
        checkboxes = $(this).closest('table').find('input[type="checkbox"]');
        let isCheckedHeader = $(this).is(':checked');
        checkboxes.each(function () {
            $(this).prop('checked', isCheckedHeader)
        })

    });


//якщо хоча б один із чекбоксів таблиці знятий, то чекбокс в шапці теж знімає checked
//     let count = 0;
//     $('input[type="checkbox"]').click(function () {
//         console.log($(this).length);
//
//         $('input[type="checkbox"]:checked').each(function () {
//             let id = $(this).closest('tr').data('id');
//             count = count + $('tr[data-id="' + id + '"] .select-option ').data("count");
//             console.log(count);
//         })
//     })

})

