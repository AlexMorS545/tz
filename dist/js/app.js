$(window).resize(function() {
    if($(window).width() < 980) {
        $('div.header-wrp__user-wrp').replaceWith($('.top-search__wrp'))
        // var el = $('.top-search__wrp').html()
        // var elem = $('.header__wrp').html()
        // console.log('<980px');
        // console.log(el);
    } else {
        console.log('>980px');
    }
})

$('.burger-menu').on('click', function() {
    $(this).toggleClass('active')
})