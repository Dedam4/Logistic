$(function(){


    /* NavToggle Burger */
    let navToggle = $('#navToggle');
    let nav = $('#nav');
    navToggle.on('click', function(event){
        event.preventDefault();

        nav.toggleClass('show');


    })



let intro = $('#intro');
let header = $('#header');
let introH = intro.innerHeight();
let headerH = header.innerHeight();
let scrollTop = $(window).scrollTop();

$(window).on('scroll resize load', function(){
    headerScroll();
   
  

});


function headerScroll() {
    introH = intro.innerHeight();
    headerH = header.innerHeight();
    let scrollTop = $(this).scrollTop();
   if(scrollTop >= introH  - headerH) {
       header.addClass('header--dark');

   } else {
    header.removeClass('header--dark');
   }

}







$('[data-scroll]').on('click', function(event){
    event.preventDefault();
    
    let scrollEl = $(this).data('scroll');
    let scrollElPos = $(scrollEl).offset().top;


    $('html, body').animate({
        scrollTop: scrollElPos -  headerH
    }, 500)

});


let windowH = $(window).height();

scrollSpy(scrollTop);
$(window).on('scroll', function(){
    scrollTop = $(this).scrollTop();
 
    scrollSpy(scrollTop);

});



function scrollSpy(scrollTop) {
    $('[data-scrollspy]').each(function(){
        let sectionId = $(this).data('scrollspy');
        let sectionOffset = $(this).offset().top;
        sectionOffset = sectionOffset - (windowH * 0.3);

        if(scrollTop >= sectionOffset) {
            $('.nav [data-scroll]').removeClass('active');
            $('.nav [data-scroll="' + sectionId + '"]').addClass('active');
        }
        if(scrollTop ===0) {
            $('.nav [data-scroll]').removeClass('active');

        }

    });


}



});

