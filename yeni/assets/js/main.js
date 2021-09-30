$(document).ready(function() {
    $(window).resize(function() {
        $("header nav").removeClass(" bg-light")
    });
});
$(".field input ,textarea").focus(function() {
    $(this).parent().find("label").css({
        "line-height": "20px",
        "font-size": "12px",
        "top": "-4px",
        "color": "#6c757d"
    });
    $(".small").addClass("d-none")

})


$(".field input,textarea").focusout(function() {
        let text = $(this).val()
        text.replace(" ", "");
        if ($(this).attr("type") == "email") {
            if (text.search("@gmail.com") < 0) {
                let a = $(this).parent().next();
                a.removeClass("d-none");
            } else {
                $(this).parent().find("div").eq(1).addClass("d-none")

            }
        }

        if (text.length < 1) {
            $(this).parent().find("label").css({
                "line-height": "42px",
                "font-size": "20px",
                "top": 0
            })
            $(this).parent().find("hr").css("background-color", "red")
            $(this).parent().find("span").removeClass("d-none")
            $(this).parent().after('<div class="small text-danger">' + $(this).attr("type") + ' is required!</div>')

        } else {
            $(this).parent().find("hr").css("background-color", "#6c757d")
            $(this).parent().find("span").addClass("d-none")
            $(this).parent().remove(".small")


        }

        // buton Aktifleştirme
        $("#fullname").val().length > 2 &&
            $("#email").val().search("@gmail.com") > 0 &&
            $("#telephoneNumber").val().length > 8 &&
            $("#textarea").val().length > 3 ? $("button").removeClass("disabled") : $("button").addClass("disabled");


    })
    // portfolio slider kapatma dugmesi
$("#portfolio .times").click(function() {
    $(this).parent().addClass("d-none")
})

//kapatma butonu genişlik
$("#portfolio .times").width($("img").innerWidth())

var sliderHeight = $("#portfolio .col-12").height();
var windowHeight = $(window).height();

// slider yukseklik olayı
$("#portfolio .col-12").css("margin-top", (windowHeight - sliderHeight) / 2)

$("#portfolio .buttons").
css("top", $(".col-12").height() / 2 + parseInt($("#portfolio .col-12").css("margin-top")))


$(window).resize(function() {
    $("#portfolio .times").width($("img").innerWidth())
    $("#portfolio .buttons").
    css("top", $(".col-12").height() / 2 + parseInt($("#portfolio .col-12").css("margin-top")))
})

// hover olayı
$("#portfolio button").hover(function() {
    $(this).toggleClass("text-dark text-muted")
}, function() {
    $(this).toggleClass("text-dark text-muted")

})