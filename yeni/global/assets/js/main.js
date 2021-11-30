// $(".layout").click(function() {
//     $(this).find("span").toggleClass("active")
//     $(this).find("ul").toggleClass("active")
// })
$(".sidebar ul").addClass("list-unstyled ps-4")

$(".float-end").parent().click(function() {

})
$(".sidebarToggle").click(function() {
    $(".sidebar").toggleClass("d-none")
})