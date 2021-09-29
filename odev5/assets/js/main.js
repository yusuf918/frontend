"use strict";

$("border.rounded-5").click(function() {
    $(this).removeClass("border-0")


})
$("border.rounded-5").click(function() {
    $(this).addClass("border-0")


})
$(function() {

    $(document).on("scroll",
        function() {
            $("header").css("top", $(this).scrollTop())
            let portfolio = $(".start-bootstrap").outerHeight() + $(".portfolio").outerHeight() + $(".portfolioGrid").outerHeight();
            let aboutheight = $(".start-bootstrap").outerHeight() + $(".portfolio").outerHeight() + $(".portfolioGrid").outerHeight()
            let contactheight = $(".start-bootstrap").outerHeight() + $(".portfolio").outerHeight() + $(".portfolioGrid").outerHeight() + $("#abot").outerHeight()
            console.log($(".start-bootstrap").height() + $(".portfolio").height())
            console.log($(".start-bootstrap").height())
            console.log($(this).height(), portfolio);
            if ($(this).scrollTop() > $("start-bootstrap").height()) {
                $("#portfolio").css("background-color", "green")
            } else if ($(this).scrollTop()) {}

        })

});
$(".card").append('<center><i class="fas fa-plus"></i></center>')

var a, item, temp;
const images = ["./assets/img/cabin.png", "./assets/img/cake.png", "./assets/img/circus.png", "./assets/img/game.png", "./assets/img/safe.png", "./assets/img/submarine.png"];

const cardTemplate = document.getElementById("cardTemplate");
var item = document.querySelector(".portfolioGrid");

for (a in images) {
    temp = document.importNode(cardTemplate.content, true); //şablon örneği

    temp.querySelector(".bgImage").style.backgroundImage = "url(" + images[a] + ")";
    item.appendChild(temp);
}
$(".portfolioGrid ").on("mouseenter", ".bgImage", function() {
    let temp = document.importNode(div.content, true); //şablon örneği
    $(this).parent().append(temp)
        // $(this).find(".bgLightGreen").css("display", "none");
        // console.log("asdf")
});
$(".portfolioGrid").on("mouseleave", ".bgImage", function() {

    $("body").find(".bgLightGreen").not("#abot").remove()

});
$("center button").mouseover(function() {
    $(this).css("background-color", "white");
    $(this).find("a").css("color", "black")
    $(this).find("i").css("color", "black")
}).mouseleave(function() {
    $(this).css("background-color", "#1abc9c")
    $(this).find("a").css("color", "white")
    $(this).find("i").css("color", "white")


})

$(".field input ,textarea").focus(function() {
    $(this).parent().find("label").css({
        "line-height": "20px",
        "font-size": "12px",
        "top": "-20px"
    });
    $(this).parent().find("hr").css("background-color", "green")
})


$(".field input,textarea").focusout(function() {
    let text = $(this).val()
    text.replace(" ", "");
    if ($(this).attr("type") == "email") {
        if (text.search("@gmail.com") < 0) {
            $(this).parent().find("div").eq(1).removeClass("d-none")
        } else {
            $(this).parent().find("div").eq(1).addClass("d-none")

        }
    }

    if (text.length < 1) {
        $(this).parent().find("label").css({
            "line-height": "41px",
            "font-size": "12px",
            "top": 0
        })
        $(this).parent().find("hr").css("background-color", "red")
        $(this).parent().find("span").removeClass("d-none")
        $(this).parent().find(".small").first().removeClass("d-none")

    } else {
        $(this).parent().find("hr").css("background-color", "#6c757d")
        $(this).parent().find("span").addClass("d-none")
        $(this).parent().find("div").first().addClass("d-none")


    }

    // buton Aktifleştirme
    $("#fullname").val().length > 2 &&
        $("#email").val().search("@gmail.com") > 0 &&
        $("#telephoneNumber").val().length > 8 &&
        $("#textarea").val().length > 3 ? $("button").removeClass("disabled") : $("button").addClass("disabled");


})