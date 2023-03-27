$(document).ready(function(){
    $('#btnOK').click(function (){
        let checkedRows = $('input[type="checkbox"]:checked');
        checkedRows.closest('#statusMark').addClass('not-active-circle');
    })


    // $('input[type="checkbox"]').is(':checked')(function(){
    //     $('#statusMark').addClass('not-active-circle');
    // })

    // $('#btnOK').click(function (){
        // $('#tblrow').each(function(){
        //     if($(this).find('input[type="checkbox"]').is(':checked')){
        //         $('#statusMark').addClass('active-circle').removeClass('not-active-circle');
        //     }
        //     else{
        //         $('#statusMark').addClass('not-active-circle').removeClass('active-circle');
        //     }
        // })
    // })

    // $('input[type="checkbox"]').change(function (){
    //     alert((this).value);
    // })
})