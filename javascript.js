$(document).ready(function(){
    $('#boton').addClass('btn-danger');
    $('#boton').removeClass('btn-primary');

    $('#subcontenedor').append('<button type="button" class="btn btn-danger">agregado con append</button>');
    $('#subcontenedor').prepend('<button type="button" class="btn btn-danger">agregado con prepend</button>');

    // $('#boton').css('color', 'blue');
    // $('#boton').css('background-color', 'yellow');

    $('#boton').css({'color' : 'blue', 'background-color' : 'yellow'});
    // $('#boton').css('background-color', 'yellow');
    
});


