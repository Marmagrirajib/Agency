
$(document).ready(function () {
 
// skill section js coding start    
// skill section js coding start    
// skill section js coding start    
$('svg.radial-progress').each(function( index, value ) { 
    $(this).find($('circle.complete')).removeAttr( 'style' );
});




$('svg.radial-progress').each(function( index, value ) { 
    $(this).find($('circle.complete')).removeAttr( 'style' );
});

// Activate progress animation on scroll
$(window).scroll(function(){
    $('svg.radial-progress').each(function( index, value ) { 
        // If svg.radial-progress is approximately 25% vertically into the window when scrolling from the top or the bottom
        if ( 
            $(window).scrollTop() > $(this).offset().top - ($(window).height() * 0.75) &&
            $(window).scrollTop() < $(this).offset().top + $(this).height() - ($(window).height() * 0.25)
        ) {
            // Get percentage of progress
            percent = $(value).data('percentage');
            // Get radius of the svg's circle.complete
            radius = $(this).find($('circle.complete')).attr('r');
            // Get circumference (2πr)
            circumference = 2 * Math.PI * radius;
            // Get stroke-dashoffset value based on the percentage of the circumference
            strokeDashOffset = circumference - ((percent * circumference) / 100);
            // Transition progress for 1.25 seconds
            $(this).find($('circle.complete')).animate({'stroke-dashoffset': strokeDashOffset}, 1250);
        }
    });
}).trigger('scroll');



// project counter up js coding start
// project counter up js coding start
// project counter up js coding start
$('.counter').counterUp({
    delay: 10,
    time: 1000
});


// sticky menu
// sticky menu
// sticky menu
$(".js-about-section").waypoint(function(valu){
   if(valu == "down"){
       $("nav").addClass("sticky");
   }else{
   $("nav").removeClass("sticky")
   }

 

});




});


// responsive menu js
// responsive menu js
// responsive menu js

var togglebtn=document.querySelector(".toggle-btn");
var togglemenu=document.querySelector(".header-menu");

    togglebtn.addEventListener("click",function(){
        togglemenu.style.left='0%';
        
      });

    togglemenu.addEventListener("click",function(){
        togglemenu.style.left='-100%';
        
      });
     

    

