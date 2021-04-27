$(window).resize(function() {
    if($(this).width() < 980) {
        $('.header-wrp__user-wrp .top-search__wrp').remove();
        var $el = $('.top-search__wrp');
        $('.header-wrp__user-wrp').append($el.clone());
        var list = $('.top-menu__menu-list')
        $('.top-menu__menu-list ul').hide();
        $(list).click( function() {
            $(list).toggleClass('action')
            if($('.top-menu__menu-list action')) {
                $(this).find($('.top-menu__menu-list ul')).slideToggle(200)
            }
        });
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

// function openMenu() {
//     $('.top-menu__menu-list ul').hide();
//     $('.top-menu__menu-list').on('click', function() {
//         $(this).toggleClass('action')
//         if($('.top-menu__menu-list action')) {
//             $(this).find($('.top-menu__menu-list ul')).slideToggle(200)
//         }
//     });
// }
// console.log($('.top-menu__menu-list ul'));
// $('.top-menu__menu-list ul').hide();
// $('.top-menu__menu-list').on('click', function() {
//     $(this).toggleClass('action')
//     if($('.top-menu__menu-list action')) {
//         $(this).find($('.top-menu__menu-list ul')).slideToggle(200)
//     }
// });

$('.fa-times').on('click', function() {
    $('.banner').slideUp(300)
})

// $(document).ready(function() {
//     $('.image-link').magnificPopup({type:'inline'});
// });