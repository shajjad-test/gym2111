$(document).ready(function(){
    'use strict';
    //banner slider;
    $('.banner-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
    });

    //about video pop up
    $('.venobox').venobox(); 

    //banner slider;
    $('.testimonial-slider').slick({
        arrows: false,
        dots: true,
        slidesToShow: 2,
    });

    //funfact counter
    $('.counter').counterUp();

    //
    $('.feedback-slider').slick({
        arrows: false,
        slidesToShow: 2,
    });

    $('.brand-slider').slick({
        arrows: false,
        slidesToShow: 5,
        centerMode: true,
        centerPadding: '0px',
    });

});