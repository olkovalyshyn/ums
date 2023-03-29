$(document).ready(function () {
    let parentCheckbox = $('input[name="parent"]');

    // при натисканні чекбокса в шапці виділяютсья усі чекбокси в таблиці
    parentCheckbox.click(function () {
        let childCheckboxes = $('input[name="child"]');
        if ($(this).is(':checked')) {
            childCheckboxes.prop('checked', true)
        } else {
            childCheckboxes.prop('checked', false)
        }
    })

//якщо хоча б один із чекбоксів таблиці знятий, то чекбокс в шапці теж знімає checked
    $('body').mousedown(function () {
        let childCheckboxes = $('input[name="child"]');
        childCheckboxes.click(function () {
            let isCheckedAllChild = true;
            $(childCheckboxes).each(function () {
                isCheckedAllChild = isCheckedAllChild && $(this).is(':checked');
            })
            parentCheckbox.prop('checked', isCheckedAllChild)
        })
    })
})


