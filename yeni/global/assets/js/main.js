$("img").addClass("mb-4")

const source = "./assets/img/";
$("img").each(function() {
    $(this).attr("src", source + $(this).attr("src"))
})
$(".appBadge").clone().appendTo(".header-6 .mt-4")
$(".nav-item img").removeClass("mb-4").addClass("me-2")
$(".topButton").click(function() {
    $("html").animate({}, 100)


})