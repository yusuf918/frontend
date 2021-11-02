$("img").addClass("mb-4")

const source = "./assets/img/";
$("img").each(function() {
    $(this).attr("src", source + $(this).attr("src"))
})