// $(".layout").click(function() {
//     $(this).find("span").toggleClass("active")
//     $(this).find("ul").toggleClass("active")
// })
$(".sidebar ul").addClass("list-unstyled ps-4")

$(".float-end").click(function() {
    $(this).toggleClass("active")
    $(this).next().toggleClass("active")
    $(this).parent().siblings().find("ul").removeClass("active")
    $(this).parent().siblings().find("span").removeClass("active")

})
$(".sidebarToggle").click(function() {
    if (!$(".sidebar").hasClass("active")) {
        $(".sidebar > ul").animate({ "width": "15rem" }, 150)
    } else {
        console.log("ul kapat")
        $(".sidebar > ul").css("width", 0)

    }
    $(".sidebar").toggleClass("active")
})
$(".linkGroup li").click(function(event) {
    event.stopPropagation()
})