console.log("dfghj")
$(".dLetter").text("d");
$(".date").each(function(index) {
    index == 0 ? $(this).text("AUG 20") :
        $(this).text("JAN 20");
});

// .news header animation
let percent = 0;
let headerAnimation = setInterval(function() {
    $(".dLetter").css("left", (percent++) + "%");
    if (percent >= 50) {
        $("a:contains('BACK')").parent().toggleClass("d-none")
        clearInterval(headerAnimation)
    }
}, 10);






const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
})
$(".fa-expand,.fa-compress").click(function() {
    $(".fa-expand,.fa-compress").toggleClass("d-none")
})
$(".fa-expand").click(function() {
    var viewer = $(".fa-expand")[0];
    var rFS = viewer.mozRequestFullScreen || viewer.webkitRequestFullscreen || viewer.requestFullscreen;
    rFS.call(viewer);
})
$(".fa-compress").click(function() {
    document.exitFullscreen()

    return false;
})