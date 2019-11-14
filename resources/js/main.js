// Slick carousel

$(document).ready(function(){
    $('.carousel').slick({
         slidesToShow: 1,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 4000,
         arrows: false,
         draggable: false,
         pauseOnFocus: false,
         pauseOnHover: false
    });        
});

// Hide the navigation bar on scrolling

$(document).ready(function(){
    let originalScrollPosition = 0;

    $(window).scroll(function(){
        let verticalScrollAmt = $(this).scrollTop();
        console.log(verticalScrollAmt);
        if (verticalScrollAmt - originalScrollPosition > 50){
           let scrollDifference=$('.navbar').css('height');
           $('.navbar').animate({top: '-' + scrollDifference}, 150);
           originalScrollPosition = verticalScrollAmt;
       } 
       else if(originalScrollPosition - verticalScrollAmt > 50){
           $('.navbar').animate({top: 0}, 150);
           originalScrollPosition = verticalScrollAmt;
        }
    });
}); 
