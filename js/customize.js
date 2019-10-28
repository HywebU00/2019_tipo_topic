// 自行加入的JS請寫在這裡
$(function() {
    // 首頁輪播
    $('.mpSlider').slick({
        mobileFirst: true,
        dots: false,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease'
    });
    $('.mp_block ul.link').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        arrow: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 1200,
            settings: {
                slidesToShow: 3
            }
        },{
            breakpoint: 768,
            settings: {
                slidesToShow: 3
            }
        },{
            breakpoint: 575,
            settings: {
                slidesToShow: 2
            }
        }]
    });
    $('.video ul').slick({
        mobileFirst: true,
        dots: true,
        arrow: true,
        infinite: true,
        speed: 500,
        autoplay: false,
        fade: true,
        lazyLoaded: true,
        lazyLoad: 'ondemand',
        ease: 'ease'
    });
    //燈箱slick+lightBox組合
    $('.cp_slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        pauseOnHover: true,
        pauseOnFocus: true,
        focusOnSelect: true,
        accessibility: true,
        lazyLoad: 'ondemand',
        ease: 'ease',
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        }, {
            breakpoint: 545,
            settings: {
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }]
    });
    $('.cp_slider').slickLightbox({
        caption: 'caption',
        lazyLoad: 'ondemand',
        useHistoryApi: 'true',
        ease: 'ease',
        lazy: true
    });
     // cp_photo
     $('.Slider-for').on('init reInit afterChange', function(event, slick, currentSlide) {
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('.controls').html(i + '/' + slick.slideCount);
    });
     $('.Slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        swipeToSlide: false,
        lazyLoad: 'ondemand',
        asNavFor: '.Slider-nav',
        infinite: true
    });
     $('.Slider-nav').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        asNavFor: '.Slider-for',
        dots: true,
        arrows: true,
        lazyLoad: 'ondemand',
        focusOnSelect: true,
        infinite: true
    });
 });
