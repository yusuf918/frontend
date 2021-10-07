var imgSrc;
var images = ["./assets/img/1.jpg", "./assets/img/2.jpg", "./assets/img/3.jpg", "./assets/img/4.jpg", "./assets/img/5.jpg", "./assets/img/6.jpg"]
$(document).ready(function() {
    $(window).resize(function() {
        $("header nav").removeClass(" bg-light")
    });

    $("label").dblclick(function() {

        $(this).css({
            "line-height": "20px",
            "font-size": "12px",
            "top": "-4px",
            "color": "#6c757d"
        });
        $(this).parent().find("#input").focus()
        $(this).parent().find("#input").addClass("outline")

        $(this).parent().parent().find(".alertFullName").remove()
        $(this).parent().parent().find(".alertEmail").remove()
        $(this).parent().parent().find(".alertPhone").remove()
        $(this).parent().parent().find(".alertMessage").remove()

    })

    $("label").click(function() {

        $(this).css({
            "line-height": "20px",
            "font-size": "12px",
            "top": "-4px",
            "color": "#6c757d"
        });
        $(this).parent().find("#input").focus()


        $(this).parent().parent().find(".alertFullName").remove()
        $(this).parent().parent().find(".alertEmail").remove()
        $(this).parent().parent().find(".alertPhone").remove()
        $(this).parent().parent().find(".alertMessage").remove()

    })
    $("#input").click(function() {
        $(this).parent().find("label").css({
            "line-height": "20px",
            "font-size": "12px",
            "top": "-4px",
            "color": "#6c757d"
        });
        $(this).parent().find("#input").focus()
        $(this).parent().parent().find(".alertFullName").remove()
        $(this).parent().parent().find(".alertEmail").remove()
        $(this).parent().parent().find(".alertPhone").remove()
        $(this).parent().parent().find(".alertMessage").remove()
    })
    $(".field input ,textarea").focus(function() {
        $(this).parent().find("label").css({
            "line-height": "20px",
            "font-size": "12px",
            "top": "-4px",
            "color": "#6c757d"
        });

        $(this).parent().css("border-color", "#dc3545")
        $(this).parent().css("outline", "2px solid #d63384")

        // uyarı mesajı silme işlemi
        $(this).parent().parent().find(".alertFullName").remove()
        $(this).parent().parent().find(".alertEmail").remove()
        $(this).parent().parent().find(".alertPhone").remove()
        $(this).parent().parent().find(".alertMessage").remove()

    })
})

$(".field").find("label").css({
    "line-height": "42px",
    "font-size": "20px",
    "top": 0
})
$(".field input").focusout(function() {
    let text = $(this).val().replace(" ", "");

    let type = $(this).attr("type");

    if (type == "email") {
        if (text.search("@gmail.com") < 0) {
            $(this).parent().after('<div class="text-danger alertEmail">email is not valid</div>');
        }
        if (text.length < 1) {
            $(this).parent().find("label").css({
                "line-height": "42px",
                "font-size": "20px",
                "top": 0
            })
            $(this).parent().after('<div class="text-danger alertEmail">an email is required</div>');
            $(this).parent().css({ "border-color": "#dc3545", "outline": "0" })

        } else {
            $(this).parent().css({ "border-color": "#ced4da", "outline": "0" })

        }
    } else if (type == "tel") {
        if (text.length < 1) {
            $(this).parent().find("label").css({
                "line-height": "42px",
                "font-size": "20px",
                "top": 0
            })
            $(this).parent().after('<div class="text-danger alertPhone">an phone number is required</div>');
            $(this).parent().css({ "border-color": "#dc3545", "outline": "0" })

        } else {
            $(this).parent().css({ "border-color": "#ced4da", "outline": "0" })

        }

    } else {
        if (text.length < 1) {
            $(this).parent().find("label").css({
                "line-height": "42px",
                "font-size": "20px",
                "top": 0
            })
            $(this).parent().after('<div class="text-danger alertMessage">a name is required</div>');
            $(this).parent().css({ "border-color": "#dc3545", "outline": "0" })



        } else {
            $(this).parent().css({ "border-color": "#ced4da", "outline": "0" })

        }


    }


    formCheck();





})
$("#textarea").focusout(function() {
    let text = $("#textarea").val().replace(" ", "");
    if (text.length < 1) {
        $("#textarea").parent().find("label").css({
            "line-height": "42px",
            "font-size": "20px",
            "top": 0
        })
        console.log(text)

        $(this).parent().css({ "border-color": "#dc3545", "outline": "0" })


    } else {
        $(this).parent().css({ "border-color": "#ced4da", "outline": "0" })

    }


    formCheck();

})

function formCheck() {
    $(".field input").eq(0).val() != "" &&
        $(".field input").eq(1).val() != "" && $(".field input").eq(1).val().search("@gmail.com") > 1 &&
        $(".field input").eq(2).val().length > 8 &&
        $("textarea").val() != "" ?
        $("button").removeClass("disabled") : $("button").addClass("disabled")
}







// portfolio slider kapatma dugmesi
$("#portfolio .times .icon-canc").click(function() {
    $(".position-absolute:first-child").addClass("d-none")
})

//kapatma butonu genişlik
$("#portfolio .times").width($(".slider-img").innerWidth())
    // slider ve pencere yuksekliği alma
var sliderHeight = $("#portfolio .slider-container img").height();
var windowHeight = $(window).outerHeight();

// slider yukseklik olayı
$("#portfolio .slider-container").css("margin-top", (windowHeight - sliderHeight) / 2)
    //slider button yuksklik
$("#portfolio .buttons").css("top", parseInt($("#portfolio .slider-container").css("margin-top")) + $(".slider-img").height() / 2)






// slider button hover olayı
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
// slider sola tıklama
function buttonClickLeft() {
    imgSrc = parseInt(imgSrc)
    imgSrc -= 1;
    $(".slider-img").attr("src", images[imgSrc - 1])

    if (imgSrc == 0)
        imgSrc = 6
}

// slider saga tıklama
function buttonClickRight() {
    imgSrc = parseInt(imgSrc)
    imgSrc += 1;
    $(".slider-img").attr("src", images[imgSrc - 1])
    if (imgSrc == 6)
        imgSrc = 0
}

$(document).ready(function() {
    // iframe boyut ayarlama
    function resizeIFrameToFitContent(iFrame) {

        iFrame.width = iFrame.contentWindow.document.body.scrollWidth;
        iFrame.height = iFrame.contentWindow.document.body.scrollHeight;
    }

    window.addEventListener('DOMContentLoaded', function(e) {

        var iFrame = document.getElementById('iFrame1');
        resizeIFrameToFitContent(iFrame);

        // or, to resize all iframes:
        var iframes = document.querySelectorAll("iframe");
        for (var i = 0; i < iframes.length; i++) {
            resizeIFrameToFitContent(iframes[i]);
        }
    });
})