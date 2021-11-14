// times
function timesAlignAppend() {

    $(".w-30").append($("<div>").addClass("bg-seaGreen h-3"))
}
timesAlignAppend();
timesAlignAppend();
timesAlignAppend();
$(".nav-link,.navbar-brand").addClass("py-3")
$(window).scroll(function() {
        let height = $(this).scrollTop();

        if (height > 100) {
            $(".navbar").css("background-color", "white")
            $(".nav-item .nav-link").css("color", "black")
            $(".navbar .navbar-brand").css("color", "black")
        } else {
            $(".navbar").css({ "background-color": "transparent", })
            $(".nav-item .nav-link").css("color", "rgba(255,255,255,0.5)")
            $(".navbar .navbar-brand").css("color", "rgba(255,255,255,0.5)")

        }
    })
    // times bitti
    // $("header p,header button").wrap()
    //.container center