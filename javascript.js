$(document).ready(function(){
    // $(".slider").bxSlider();
    $(".bxslider").bxSlider({
        auto: true,
        speed:100, //velocidad del cambio de imagen
        autoControls:true, //bototes de reproduccion
        stopAutoOnClick: true, // se detiene la imagen al dar click en los botones con forma de circulos
        pager: true,
        pagerType: 'short', //opciones : full, short
        // slideWidth:500, //cambia el tamaño del slider
        mode:'horizontal', //opciones: vertical , horizontal
        // randomStart: true,
        infiniteLoop:true,// si esta en false se detiene al final
        
    });



});

// https://bxslider.com/

