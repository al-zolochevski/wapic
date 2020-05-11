//burger
$('.burger').click(function () {
    animateBurger()
});


$('.navigation-link').on("click", function (event) {
    menuScrollDown(event);
    animateBurger();
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
