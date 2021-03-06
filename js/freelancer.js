
function clearform() { var frm = document.getElementById('contactForm'); frm.submit(); frm.reset(); return false; }

// jQuery Easing - page scrolling
$(function() {
    $('.page-scroll a').bind('click', function(e) {
        var a = $(this);
        $('html, body').stop().animate({scrollTop: $(a.attr('href')).offset().top}, 1500, 'easeInOutExpo');
        e.preventDefault();
    });
});

// Floating label headings for the contact form
$(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !! $(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({target: '.navbar-fixed-top'});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {$('.navbar-toggle:visible').click();});

var cbpAnimatedHeader = (function() {
    var docElem = document.documentElement,
        header = document.querySelector( '.navbar-fixed-top' ),
        didScroll = false,
        changeHeaderOn = 300;
    function init() {
        window.addEventListener( 'scroll', function( event ) {
            if( !didScroll ) {didScroll = true; setTimeout( scrollPage, 250 );}
        }, false );
    }
    function scrollPage() {
        var sy = scrollY();
        if ( sy >= changeHeaderOn ) classie.add( header, 'navbar-shrink' );
        else classie.remove( header, 'navbar-shrink' );
        didScroll = false;
    }
    function scrollY() {return window.pageYOffset || docElem.scrollTop;}
    init();
})();
