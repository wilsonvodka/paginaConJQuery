$(document).ready(function(){
   // https://github.com/harvesthq/chosen/releases
//    $('.chosen-select').chosen({no_results_text:"no hay que diga: "});

    // $('.chosen-select').chosen({disable_search_threshold:11})

    // $('.chosen-select').chosen({max_selected_options:3})
    // $('.chosen-select').chosen({rtl:true,max_selected_options:3})
    $('.chosen-select').chosen().change(function(){
        alert($(this).val())
    })


});


