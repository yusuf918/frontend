// sidebar acılma animasyon
$(".menu-toggle").click(function() {
    $("ul.sidebar").toggleClass("active")
    $(this).find("span").toggleClass("active")

})

$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {
        $(".scroll-to-top").css("display", "flex")


    } else {
        $(".scroll-to-top").css("display", "none")

    }
})