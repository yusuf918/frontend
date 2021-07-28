let number = 200;

let timer = setInterval(function() {
    number++;
    $("main").text(number);
    $(".progress-bar").css("width", Math.ceil(number / 10) + "%")
    if (number > 998) {
        $("header").toggleClass("text-white text-dark")
        $("header > div").text("dillinger");
        $("main").text("");
        $(".progress").remove();
        $("footer").addClass("bgdark")
        $("footer").animate({
            height: "100vh"
        }, 1000, function() {
            // Animation complete.
        });
        setTimeout(function() {
            $(".content").removeClass("d-none");
        }, 1000);

        clearTimer();
    }

}, 1);

function clearTimer() {
    clearTimeout(timer);

}
$(".fw-bold").hover(function() {
    setInterval(function() {
        $(".fw-bold").css("font-size")
    })
})
const cursor = $(".cursor");

document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";

})