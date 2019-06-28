
    $(".menu > li > a").click(function () {
        $('ul.sub-menu').not($(this).siblings()).slideUp();
        $(this).siblings("ul.sub-menu").slideToggle();
        });
    
    (function() {
        var burger = document.querySelector('.burger');
        var nav = document.querySelector('#' + burger.dataset.target);
                
        burger.addEventListener('click', function() {
            burger.classList.toggle('is-active');
            nav.classList.toggle('is-active');
        });
    })();
    
        $('#divSvg').drawWaves({
            speed: .15,
            color: 'url(#grad1)'
        });
        $('#divSvg2').drawWaves({
            speed: .25,
            color: 'url(#grad2)'
        });
        $('#divSvg3').drawWaves({
            speed: .45,
            color: 'url(#grad3)'
        });
       
      $(document).ready(function(){
        $(function(){
            $(document).on( 'scroll', function(){
                if ($(window).scrollTop() > 100) {
                    $('.scroll-top-wrapper').addClass('show');
                } else {
                    $('.scroll-top-wrapper').removeClass('show');
                }
            });
            $('.scroll-top-wrapper').on('click', scrollToTop);
        });
      function scrollToTop() {
          verticalOffset = typeof(verticalOffset) != 'undefined' ? verticalOffset : 0;
          element = $('body');
          offset = element.offset();
          offsetTop = offset.top;
          $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
      }
      });
        $('a[href*="#"]')
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
             event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { 
                return false;
                } else {
                $target.attr('tabindex','-1'); 
                $target.focus(); 
                };
            });
            }
        }
        });
    
    
       $(function() {
            $('a[href*=#]').on('click', function(e) {
                e.preventDefault();
                $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
            });
        });
  
            $(document).ready(function() {
                var carousels = bulmaCarousel.attach();
                CarouselInstance.on('carousel:ready', function(item) {});
            });
