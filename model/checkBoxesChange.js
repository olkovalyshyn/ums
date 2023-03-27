let checkboxes = $("tbody input[type='checkbox']");
console.log(checkboxes)

$('#all-items').click(function(){
    let isCheckedHeader = $(this).is(':checked');
    checkboxes.prop('checked', isCheckedHeader);
})

checkboxes.click(function(){
    let isChecked = true;
    checkboxes.each(function (){
        isChecked = isChecked && $(this).is(':checked');
    })
    $('#all-items').prop('checked', isChecked);
})


// let mainCheckboxEl = document.getElementById("all-items");
// let singleCheckboxesEl = document.querySelectorAll(".select-option");
//
// function selectAllCheckboxes(){
//     const isChecked = mainCheckboxEl.checked;
//     for(let i = 0; i < singleCheckboxesEl.length; i++){
//         singleCheckboxesEl[i].checked = isChecked;
//     }
// }
//
// function changeSingleCheckbox(){
//     for(let i = 0; i < singleCheckboxesEl.length; i++){
//         if (!singleCheckboxesEl[i].checked){
//             mainCheckboxEl.checked = false
//         }
//     }
// }
