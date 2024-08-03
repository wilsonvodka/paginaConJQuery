$(document).ready(function(){
    $('#boton').click(function (e) { 
        e.preventDefault();
        $('img').attr('src', 'logo2.png');
    });
    $('#subcontenedor button:nth-child(1)').click(function (e) { 
        e.preventDefault();
        $('img').attr('width', '100px');
        
    });
    $('#subcontenedor button:nth-child(2)').click(function (e) { 
        e.preventDefault();
        let margen = $('img').css('margin-left');
        margen = parseInt( margen.replace('px', ''));
        margen = margen+30;
        $('img').css('margin-left', margen + 'px');
        
    });
    $('#subcontenedor button:nth-child(3)').click(function (e) { 
        e.preventDefault();
        $('img').toggleClass('d-none');
        
    });
    $('#subcontenedor button:nth-child(4)').click(function (e) { 
        e.preventDefault();
        $('img').hide('slow');
        
    });
    $('#subcontenedor button:nth-child(5)').click(function (e) { 
        e.preventDefault();
        $('img').show('slow');
        
    });
    $('#subcontenedor button:nth-child(6)').click(function (e) { 
        e.preventDefault();
        $('img').toggle('fast');
        
    });
    $('#subcontenedor button:nth-child(7)').click(function (e) { 
        e.preventDefault();
        $('img').fadeIn(300);
        
    });
    $('#subcontenedor button:nth-child(8)').click(function (e) { 
        e.preventDefault();
        $('img').fadeOut(300);
        
    });
    $('#subcontenedor button:nth-child(9)').click(function (e) { 
        e.preventDefault();
        $('img').slideDown(300);
        
    });
    $('#subcontenedor button:nth-child(10)').click(function (e) { 
        e.preventDefault();
        $('img').slideUp(300);
        
    });
    $('#subcontenedor button:nth-child(11)').click(function (e) { 
        e.preventDefault();
        $('img').slideToggle(300);
        
    });
    $('#subcontenedor button:nth-child(12)').click(function (e) { 
        e.preventDefault();
        $('img').animate({'margin-left': '+=100px',
            'opacity' : '0.5',
            'width': '+=150px'
        },2000,
        function(){
            $('img').animate({'margin-left': '-=100px',
                'opacity' : '1',
                'width': '200px'
            }, 2000);  
        }
    );
        
    });
    $('#subir').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop:0},500)
    })
    $('#bajar').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop: $(document).height()-$(window).height()},500) // baja el scroll
    })
    let textoUI =$('#texto');
    textoUI.keyup(function (e) { 
        
        $('#saludo').html("Hola "+ $('#texto').val());
    });
    $('form').submit(function (e) { 
        alert('hola');
        e.preventDefault();
        
    });


});

///https://www.youtube.com/watch?v=e-WpE3slYvU&list=PLCTD_CpMeEKSYJ1J15M8PknOMwOpeqsXz&index=8
