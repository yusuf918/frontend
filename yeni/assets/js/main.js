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
$(".scroll-to-top").click(function() {
    $("html").animate({
        scrollTop: 0
    })
})
$(".row .col-11").hover(
    function() {
        $(this).find("img").animate({
            "width": "90%"
        })

        $(this).find(".caption-content").animate({ "margin-top": 36 })


    },
    function() {
        $(this).find("img").animate({ "width": "100%" });
        $(this).find(".caption-content").animate({ "margin-top": 0 })

    }


)