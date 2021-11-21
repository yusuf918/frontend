$("header nav, main section, footer").wrapInner($("<div>").addClass("container"))
$("p").addClass("text-center")
$(".container-fluid h3").append($("hr").attr("width", 50))

function nav() {
    var href = ["about", "projects", "contact"];

    for (var i = 0; i < href.length; i++) {
        $(".navbar-nav").append(
            $("<li>").addClass("nav-item").html($("<a>")
                .text(href[i]).addClass("nav-link").attr({ "href": "#" + href[i] })))


    }


}
nav();

// times
function timesAlignAppend() {

    $(".w-30").append($("<div>").addClass("bg-seaGreen h-3"))
}
timesAlignAppend();
timesAlignAppend();
timesAlignAppend();
$(".nav-link,.navbar-brand").addClass("py-4");
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

// $(".nav-link,.navbar-brand").click(function() {
//     $("html").animate({
//         scrollTop: 0
//     }, 100)
//     $(this).css({ "color": "var(--seaGreen)", "border-bottom": "2px solid var(--seaGreen)" })
//     var url = window.location.href;
//     url = url.split("#")[0]
//     window.location.href = url
// })
// @g.co
$("input").keyup(function() {
    if ($(this).val().indexOf("@g.co") > 0) {
        $(this).parent().find("button").removeClass("disabled")
    } else {
        $(this).parent().find("button").addClass("disabled")

    }
})