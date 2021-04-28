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

$('.fa-times').on('click', function() {
    $('.banner').slideUp(300)
})

$('.header-wrp__phone-link').magnificPopup({
    items: {
        src: `<div id="popup" class="white-popup">
                    <form class="popup__form" action="#">
                        <div class="popup__form-name" ><input id="name" type="text" placeholder="Ваше имя" required/></div>
                        <div class="popup__form-tel"><input id="phone" type="text" placeholder="+9(999)99999999" required/></div>
                        <span>Удобное время для звонка</span>
                        <div><input type="popup__form-btn" value="Отправить"></div>
                    </form>
                </div>`,
        type: 'inline'
    }
});

$('#phone').mask('+9(999)99999999')