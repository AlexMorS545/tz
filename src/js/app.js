$(window).resize(function() {
    if($(this).width() < 980) {
        $('.header-wrp__user-wrp .top-search__wrp').remove();
        var $el = $('.top-search__wrp');
        $('.header-wrp__user-wrp').append($el.clone());
    } else {
        $('.header-wrp__user-wrp .top-search__wrp').remove();
    }
});

$('.burger-menu').on('click', function() {
    $(this).toggleClass('active')
    if($('.burger-menu .active')) {
        $('.top-menu__wrp').toggleClass('show')
    }
})

$('.top-menu__menu-list ul').hide();
$('.top-menu__menu-list').click(function() {
    $(this).toggleClass('action')
    if($('.top-menu__menu-list action')) {
        $(this).find($('.top-menu__menu-list ul')).slideToggle(200)
    }
});

$('.fa-times').click(function() {
    $('.banner').slideUp(300)
})

// $(document).ready(function() {
//     $('.image-link').magnificPopup({type:'image'});
// });