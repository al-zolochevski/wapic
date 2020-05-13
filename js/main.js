//burger
$('.burger').click(function () {
    animateBurger()
});


$('.navigation-link').on("click", function (event) {
    menuScrollDown(event);
    if ($(window).width() < 1023) {
        animateBurger();
    }

});


function menuScrollDown(event) {
    var targetId = $(event.target).attr('href');
    var targetValueOffsetTop = $(targetId).offset().top;
    $('html,body').animate({scrollTop: targetValueOffsetTop}, 800);
}

function animateBurger() {
    $('.burger').toggleClass('open');
    $(".navigation-list").toggleClass("active");
}

$(window).resize(function () {
    if ($(window).width() > 1023) {
        $('.burger').removeClass('open');
        $(".navigation-list").removeClass("active");
    }
});

$(window).scroll(function () {
    $('.burger').removeClass('open');
    $(".navigation-list").removeClass("active");
})


//accordion

$('.accordion').on('click', '.heading', function (e) {
    if (window.outerWidth < 767) {
        e.preventDefault();
        $(this).next('.accordion-panel').not(':animated').slideToggle();
    }
});

