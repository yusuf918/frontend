// $(".layout").click(function() {
//     $(this).find("span").toggleClass("active")
//     $(this).find("ul").toggleClass("active")
// })
$(".sidebar ul").addClass("list-unstyled ")
$(".sidebar li").addClass("ps-4 ")

$(".float-end").click(function() {
    $(this).toggleClass("active")
    $(this).next().toggleClass("active")
    $(this).parent().siblings().find("ul").removeClass("active")
    $(this).parent().siblings().find("span").removeClass("active")

})

$(document).on("click", ".nav-link", function() {
    if (!$(".sidebar").hasClass("active")) {
        $(".sidebar > ul").animate({ "width": "15rem" }, 150)
    } else {
        $(".sidebar > ul").css("width", 0)
    }
    $(".sidebar").toggleClass("active")
});



$(".linkGroup li").click(function(event) {
        event.stopPropagation()
    })
    // tum sayfalar icin head çagırma
$.get("../components/head.html", function(data, status) {
    $("head").html(data)
});
//  footer çagırma

$.get("../components/footer.html", function(data, status) {
    $(".footer").html(data)
});
//  header çagırma

$.get("../components/header.html", function(data, status) {
    $("header").html(data)
});

$(document).ready(function() {
    $('#myTable').DataTable();
});