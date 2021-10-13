$("input").focusout()
$("input").keyup(function() {
    if ($(this).val().length > 0) {
        $(this).removeClass("form")
        $(".required-email,.invalid-email").addClass("d-none")
        if ($(this).val().search("@gmail.com") === -1) {
            $(".invalid-email").removeClass("d-none")
            $(this).parent().find("button").addClass("disabled")

        } else {
            $(this).parent().find("button").removeClass("disabled")
        }


    } else {
        $(this).addClass("form")
        if ($(this).val().trim() === "") {
            $(".required-email,.invalid-email").removeClass("d-none")
        }


    }



})
$(".form-submit").click(function() {
    $(this).parent().find("input").addClass("disabled")
    $(".form-link,success-message").removeClass("d-none")
    $(".required-email,.invalid-email").addClass("d-none")
})