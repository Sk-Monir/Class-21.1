$(function(){
    // Slick Slider js Start
    $('.banner_slider').slick({
        prevArrow: '<i class="banner_slider_icon fa-solid fa-chevron-left"></i>',
        nextArrow: '<i class="banner_slider_icon fa-solid fa-chevron-right"></i>',
        autoplay: true,
        autoplaySpeed:3000,
        speed:1000,
        dots:true,
        dotsClass:'banner_slider_dots',

    });
    // Slick Slider  js End
    // Back to top Start
    $(window).on('scroll',function(){
        var scrollTop= $(this).scrollTop();

        if(scrollTop > 500){
            $('.back_to_top').fadeIn(500);
        }else{
            $('.back_to_top').fadeOut(500);
        }
    });
    $('.back_to_top').on('click',function(){
        $('html , body').animate({
            scrollTop: 0,
        },500);
    });
    // Back to top End
    // Preloader Start
    $(window).on('load',function(){
        $('.preloader').fadeOut(3000)
    });
    // Preloader End
    // Smooth scroll Start
    $('a').on('click',function(e){
        e.preventDefault();//off Defult behavior

        var hash=this.hash;

        if(this.hash !== ' '){
            $(' html ,body ').animate({
                scrollTop: $(hash).offset().top
            },800)
        }
    
    });
    //Smooth Scroll End
    //Sticky Menu Start
    $(window).on('scroll',function(){

        var scrollTop = $(window).scrollTop();
        var height = $('#nav').height();
        
        if(scrollTop > height){
            $('#nav').addClass('menu_scroll_animate')
        }else{
            $('#nav').removeClass('menu_scroll_animate')

        }

    });
    //Sticky Menu End
    // filterizr js start
    $('.gallery_filter').filterizr();

    $('.featured_menu li').on('click',function(){
        $(this).addClass('active')
        $(this).siblings('.active').removeClass('active')
    })
    // filterizr js End
    // countdown js Start
    $('.count_down').countdown('2023/06/06', function(event) {
        var $this = $(this).html(event.strftime(''
          + '<div class="count_down_item"><span>%D</span><span>Day</span></div> '
          + '<div class="count_down_item"><span>%H</span><span>hours</span></div> '
          + '<div class="count_down_item"><span>%M</span><span>Mins</span></div> '
          + '<div class="count_down_item"><span>%S</span><span>sec</span></div> '
         ));
      });
    // countdown js End
});
 // Venobox js Start
 new VenoBox();   
 // Venobox js End  
//   aos js start
AOS.init();
// aos js End