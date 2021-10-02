var imgSrc;
var images = ["./assets/img/1.jpg", "./assets/img/2.jpg", "./assets/img/3.jpg", "./assets/img/4.jpg", "./assets/img/5.jpg", "./assets/img/6.jpg"]
$(document).ready(function() {
    $(window).resize(function() {
        $("header nav").removeClass(" bg-light")
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
$("#portfolio .times .icon-canc").click(function() {
    $(".position-absolute:first-child").addClass("d-none")
})

//kapatma butonu genişlik
$("#portfolio .times").width($(".slider-img").innerWidth())

var sliderHeight = $("#portfolio .slider-container img").height();
var windowHeight = $(window).outerHeight();

// slider yukseklik olayı
$("#portfolio .slider-container").css("margin-top", (windowHeight - sliderHeight) / 2)

$("#portfolio .buttons").css("top", parseInt($("#portfolio .slider-container").css("margin-top")) + $(".slider-img").height() / 2)






// hover olayı
$("#portfolio button").hover(function() {
    $(this).toggleClass("text-light text-muted")
}, function() {
    $(this).toggleClass("text-light text-muted")

})


// ana sayfa resim kısmı container yukseklik duzenlemesi
$("#portfolio abbr").parent().height($(".project-image").height())

$(".slider-container:first-child").height($(window).height())

// slider gosterme
$(".image-container").click(function() {
    $(".slider-img").attr("src", $(this).find("img").attr("src"))
    $("div:first-child").removeClass("d-none")
    $("#portfolio .buttons").css("top", parseInt($("#portfolio .slider-container").css("margin-top")) + $(".slider-container img").height() / 2)
    $("#portfolio .times").width($(".slider-img").innerWidth())
    $("#portfolio .slider-container").css("margin-top", (windowHeight - sliderHeight) / 2)
    $(".slider-container:first-child").height($(window).height())
    $(".left").removeClass("d-none")
    imgSrc = $(".slider-img").attr("src").split("/")[3][0]
    imgSrc = parseInt(imgSrc);

})


$(window).resize(function() {
    $("#portfolio .times").width($(".slider-img").innerWidth())
    $("#portfolio .buttons").css("top", $(".slider-container img").height() / 2 + parseFloat($(".slider-container").css("margin-top")))

    $("#portfolio abbr").parent().height($(".project-image").height())
    $("#portfolio .slider-container").css("margin-top", (windowHeight - sliderHeight) / 2)
    $(".slider-container:first-child").height($(window).height())


});

function buttonClickLeft() {
    imgSrc = parseInt(imgSrc)
    imgSrc -= 1;
    $(".slider-img").attr("src", images[imgSrc - 1])

    if (imgSrc == 0)
        imgSrc = 6
}


function buttonClickRight() {
    imgSrc = parseInt(imgSrc)
    imgSrc += 1;
    $(".slider-img").attr("src", images[imgSrc - 1])
    if (imgSrc == 6)
        imgSrc = 0
}