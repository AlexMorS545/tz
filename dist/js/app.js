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

$(document).ready(function() {
    $('.header-wrp__phone-link').magnificPopup({
        items: {
            src: `<div id="popup" class="white-popup">
                        <span id="popup-title" class="popup__title">Обратный звонок</span>
                        <form class="popup__form" action="#">
                            <div class="popup__form-name" ><input id="name" type="text" placeholder="Ваше имя" required/></div>
                            <div class="popup__form-tel"><input id="phone" type="text" placeholder="+7 (___) ___ - ____" required/></div>
                            <span class="popup__text">Удобное время для звонка</span>
                            <div class="time">
                                <div class="time__select">
                                    <select>
                                        <option value="9" selected="selected">9:00</option>														
                                        <option value="10">10:00</option>														
                                        <option value="11">11:00</option>														
                                        <option value="12">12:00</option>														
                                        <option value="13">13:00</option>														
                                        <option value="14">14:00</option>														
                                        <option value="15">15:00</option>														
                                        <option value="16">16:00</option>														
                                        <option value="17">17:00</option>														
                                        <option value="18">18:00</option>														
                                        <option value="19">19:00</option>														
                                        <option value="20">20:00</option>
                                    </select>
                                </div>
                                <div class="time__dash">-</div>
                                <div class="time__select">
                                    <select>
                                        <option value="9">9:00</option>														
                                        <option value="10">10:00</option>														
                                        <option value="11">11:00</option>														
                                        <option value="12">12:00</option>														
                                        <option value="13">13:00</option>														
                                        <option value="14">14:00</option>														
                                        <option value="15">15:00</option>														
                                        <option value="16">16:00</option>														
                                        <option value="17">17:00</option>														
                                        <option value="18">18:00</option>														
                                        <option value="19">19:00</option>														
                                        <option value="20" selected="selected">20:00</option>
                                    </select>
                                </div>
                            </div>
                            <div class="popup__form-btn"><button type="submit">Заказать звонок</button></div>
                        </form>
                    </div>`,
            type: 'inline',
            },
        type: 'inline',
        removalDelay: 400,
        callbacks: {
            beforeOpen: function () {
                this.st.mainClass = this.st.el.attr('data-effect');
            }
        },
        midClick: true
    });
})


$('#phone').mask('+9(999)9999999')
