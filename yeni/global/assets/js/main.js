// $("button").remove()
const tarih = new Date()
const yaz = console.log
const length = $("button").length
if (length < 1) {
    // navbar resmi ortalama    
    $("nav img").parent().parent().addClass("w-100 justify-content-center")
}
// card içindeki resimlerin yuksekliğini ayarlama


let cards = {
    0: {
        resim: "./assets/img/JavaScript-Course-Title-Pic2.jpg",
        acıklama: "Yazılım geliştirici yetiştirme kampı (javascript)",
        yazi: "1,5 ay sürecek Yazılım Geliştirici Yetiştirme Kampımızın takip, döküman ve duyurularını<span class='d-none d-md-inline-block' >...</span> buradan yapacağız.",
        egitmenAdi: "Engin Demirog",
        egitmenFotografi: "./assets/img/1022806_b87b_6.jpg",
        ucret: "ÜCRETSİZ",
        link: "yazilim-gelistirici-yetistirme-kampi-javascript"
    },
    1: {
        resim: "./assets/img/online-courses-computer-programming.jpg",
        acıklama: "Yazılım Geliştirici Yetiştirme Kampı (C# + ANGULAR)",
        yazi: "2 ay sürecek Yazılım Geliştirici Yetiştirme Kampımızın takip, döküman ve duyurularını<span class='d-none d-md-inline-block' >...</span> buradan yapacağız.",
        egitmenAdi: "Engin Demirog",
        egitmenFotografi: "./assets/img/1022806_b87b_6.jpg",
        ucret: "ÜCRETSİZ",
        link: "yazilim-gelistirici-yetistirme-kampi"
    },
    2: {
        resim: "assets/img/ab1bcc51d88e17c92874c3772631b1e3.jpg",
        acıklama: "Yazılım Geliştirici Yetiştirme Kampı (JAVA + REACT)",
        yazi: "2 ay sürecek Yazılım Geliştirici Yetiştirme Kampımızın takip, döküman ve duyurularını<span class='d-none d-md-inline-block' >...</span> buradan yapacağız.",
        egitmenAdi: "Engin Demirog",
        egitmenFotografi: "./assets/img/1022806_b87b_6.jpg",
        ucret: "ÜCRETSİZ",
        link: "yazilim-gelistirici-yetistirme-kampi2"
    },
    3: {
        resim: "./assets/img/BG_artsy_workspace.jpg",
        acıklama: "Programlamaya Giriş için Temel Kurs",
        yazi: "PYTHON, JAVA, C# gibi tüm programlama dilleri için temel programlama mantığını anlaşılır<span class='d-none d-md-inline-block'>...</span> örneklerle öğrenin.",
        egitmenAdi: "Engin Demirog",
        egitmenFotografi: "./assets/img/1022806_b87b_6.jpg",
        ucret: "ÜCRETSİZ",
        link: "programlamaya-giris"
    }
}

const card = "./partitions/cards.html";
const recaptcha = "./partitions/recaptcha.html";
const header = "./partitions/header.html";
const header2 = "./partitions/header.html";
const footer = "./partitions/footer/footer.html";
const footer2 = "./partitions/footer/footer2.html";
const head = "./partitions/head.html";
const column = "./partitions/column.html";
// get index
$.get(card, function(data) {
    let inner;

    for (let i = 0; i < Object.keys(cards).length; i++) {
        $(".cardSection").append(data);

        $(".cardSection .col-12:last-child .card-img-top").attr("src", cards[i].resim)
        $(".cardSection .col-12:last-child .card-title").text(cards[i].acıklama)
        $(".cardSection .col-12:last-child .card-text").html(cards[i].yazi)
        $(".cardSection .col-12:last-child .card-footer img").attr("src", cards[i].egitmenFotografi)
        $(".cardSection .col-12:last-child .card-footer .egitmen-adi").text(cards[i].egitmenAdi)
        $(".cardSection .col-12:last-child .card-footer .ucret").text(cards[i].ucret)
        $(".cardSection .col-12:last-child .card").attr("data-link", cards[i].link)

    }





})

$.get(header, function(data) {
    $("#index").prepend(data)
})
$.get(footer, function(data) {
    $("#index").append(data)
})
$.get(head, function(data) {
    $("#index").before(data)
})

// get kampa hazırlık
let column = {
    0: {
        resim: "./assets/img/BG_artsy_workspace.jpg",
        açıklama: "İki ekranda takip etmeye çalışın",
        paragraf: "Bu ekranlardan birinde beni izlerken diğerinde kod yazıp, soru cevap platformumuzdan destek alabilirsiniz. Yardımcı ekran tablet, monitör veya evdeki HDMI destekli TV olabilir."
    },
    1: {
        resim: "./assets/img/BG_coding.jpeg",
        açıklama: "İkinci ekran yoksa",
        paragraf: "Bu durumda bilgisayar ekranınızı ikiye bölebilirsiniz. Windows + Sol Yön tuşuyla mevcut ekranı sola, Windows + sağ yön tuşu ikilisiyle de mevcut diğer ekranı sağa atabilirsiniz. Öncesinde deneyiniz :)"
    },
    2: {
        resim: "./assets/img/BG_coding.jpeg",
        açıklama: "ne kurayım",
        paragraf: 'Eğitimin ilk günü için bir şey kurmanız gerekmiyor. Online editör kullanacağız.ilinci gün itibariyle visual studio kullanacağız<a href="https: //www.repl.it/" class="text-decoration-none text-purple" target="_blank" rel="noopener noreferrer">Repl.it</a> sitesinden bir hesap açmanız yeterlidir<a href="https://www.youtube.com/watch?v=kOnAP3fT_Vs&t=187s" class="text-decoration-none text-purple" target="_blank" rel="noopener noreferrer">sizin için bir kurulum videosu hazırladım'
    }
}

$.get(head, data => $("#kampaHazirlik").before(data));
$.get(header, function(data) {
    $("#kampaHazirlik").prepend(data)
        // $("#kampaHazirlik header nav").addClass("bg-brand-secondary")
    $("#kampaHazirlik .navbar").toggleClass("navbar-expand-lg py-md-0 navbar-expand-md")
        // $("#kampaHazirlik .navbar .nav-link").addClass("mt-md-0")
        // $("#kampaHazirlik .navbar-nav").toggleClass("ms-lg-auto ms-md-auto")
});

$.get(card, function(data) {
    $("#kampaHazirlik .oneri .row").append(data);
    $("#kampaHazirlik .oneri .card-img-top").attr("src", cards[3].resim)
    $("#kampaHazirlik .oneri .card-title").text(cards[3].acıklama)
    $("#kampaHazirlik .oneri .card-text").html(cards[3].yazi)
    $("#kampaHazirlik .oneri .card-footer img").attr("src", cards[3].egitmenFotografi)
    $("#kampaHazirlik .oneri .card-footer .egitmen-adi").text(cards[3].egitmenAdi)
    $("#kampaHazirlik .oneri .card-footer .ucret").text(cards[3].ucret)
    $("#kampaHazirlik .oneri .card").attr("data-link", cards[3].link)
    $("#kampaHazirlik .oneri .card").parent().toggleClass("col-md-6 col-md-4")
    $("#kampaHazirlik .oneri .card").addClass("rounded-0")
    $("#kampaHazirlik .oneri .card").removeClass("border-primary")

})
$.get(column, function(data) {
    let inner;
    for (let i = 0; i < Object.keys(column).length; i++) {
        $("#kampaHazirlik .blockColumn .row").append(data);
        $("#kampaHazirlik .blockColumn .col-md:last-child img").attr("src", column[i].resim)
        $("#kampaHazirlik .blockColumn .col-md:last-child .div-title").text(column[i].açıklama)
        $("#kampaHazirlik .blockColumn .col-md:last-child p").html(column[i].paragraf)


    }
})
$.get(footer2, function(data) {
    $("#kampaHazirlik").append(data)

})

$("#sorular main a").attr("target", "_blank")
$("#sorular main a").attr("rel", "noopener noreferrer")

//get sorular html
$.get(head, data => $("#sorular").before(data));
$.get(header, function(data) {
    $("#sorular").prepend(data)
        // $("#sorular header").addClass("bg-brand-secondary")
    $("#sorular .navbar").toggleClass("navbar-expand-lg py-md-0 navbar-expand-md")
        // $("#sorular .navbar .nav-link").addClass("mt-md-0")
        // $("#sorular .navbar-nav").toggleClass("ms-lg-auto ms-md-auto")
});

$.get(footer2, function(data) {
    $("#sorular").append(data)

})
$("#sorular .cevap a").addClass("text-decoration-none")


// get login 
$(".kayit input").prop("required", true)


$(".fa-stack").click(function() {
    $(".fa-slash").toggleClass("d-none")
    let typ = $(this).parent(".field").find("input").attr("type")
    typ == "password" ? $(this).parent(".field").find("input").attr("type", "text") :
        $(this).parent(".field").find("input").attr("type", "password")
})

$.get(head, function(data) {
    $("#kayit").before(data)

});

$.get(header, function(data) {
    $("#kayit").prepend(data)
        // $("#kayit header").addClass("bg-brand-secondary")


    // $("#kayit nav button").remove()
    // $("#kayit #navbarNav").remove()
    // $("#kayit nav .container-lg").addClass("justify-content-center")
    $("#kayit header").addClass("mh-60")
    $("#kayit .navbar.py-lg-0").toggleClass("py-lg-0 py-lg-2")

});
$.get(footer, function(data) {
    $("#kayit main").after(data)
        // $("#kayit footer .mt-5").remove()
    $("#kayit footer .h5").removeClass("h5")
        // $("#kayit footer .container").addClass("justify-content-center")
    $("#kayit .yıl").text(tarih.getFullYear())

})

//get passwd unttum
$.get(head, function(data) {
    $("#unuttum").before(data)

});
$.get(header, function(data) {
    $("#unuttum").prepend(data)
    $("#unuttum nav button").remove()
    $("#unuttum #navbarNav").remove()
    $("#unuttum nav .container-lg").addClass("justify-content-center")
    $("#unuttum header").addClass("mh-60")
    $("#unuttum .navbar.py-lg-0").toggleClass("py-lg-0 py-lg-2")

});
$(function() {
    $("#unuttum input ").focus()

})
$("#unuttum input ").focusout(function() {
    let text = $(this).val().toString()
    let message = "";
    let et = text.split("").filter(x => x == "@");
    if (text == "") message = "this field is required"

    if (et.length == 1 && text.length < 3) message = "Please provide a valid email adress"
    if (et.length < 1) message = "Please provide a valid email adress"
    if (et.length > 1) message = "Please provide a valid email adress"
    if (text.indexOf(et) == text.length - 1) message = "Please provide a valid email adress"

    $(".message").text(message)
    message == "" ? $(".message").css("display", "none") :
        $(".message").css("display", "block")
})

$("#unuttum input").prop("required", true)
$.get(footer, function(data) {
    $("#unuttum main").after(data)
    $("#unuttum footer .mt-5").remove()
    $("#unuttum footer .h5").removeClass("h5")
    $("#unuttum footer .container").addClass("justify-content-center")
    $("#unuttum .yıl").text(tarih.getFullYear())
    $("#unuttum footer").addClass("position-fixed fixed-bottom")


})

//next
$.get(head, function(data) {
    $("#next").before(data)

});
$.get(header, function(data) {
    $("#next").prepend(data)

    $("#next nav button").remove()
    $("#next #navbarNav").remove()
    $("#next nav .container-lg").addClass("justify-content-center")
    $("#next header").addClass("mh-60")
    $("#next .navbar.py-lg-0").toggleClass("py-lg-0 py-lg-2")

});
$.get(footer, function(data) {
    $("#next main").after(data)
    $("#next footer .mt-5").remove()
    $("#next footer .h5").removeClass("h5")
    $("#next footer .container").addClass("justify-content-center")
    $("#next .yıl").text(tarih.getFullYear())
    $("#next footer").addClass("position-absolute bottom-0 w-100")

})

// sign-up
$.get(head, function(data) {
    $("#sign-up").before(data)

});
$.get(header, function(data) {
    $("#sign-up").prepend(data)



    $("#sign-up nav button").remove()
    $("#sign-up #navbarNav").remove()
    $("#sign-up nav .container-lg").addClass("justify-content-center")
    $("#sign-up header").addClass("mh-60")
    $("#sign-up .navbar.py-lg-0").toggleClass("py-lg-0 py-lg-2")

});
$.get(footer, function(data) {
    $("#sign-up main").after(data)
    $("#sign-up footer .mt-5").remove()
    $("#sign-up footer .h5").removeClass("h5")
    $("#sign-up footer ").removeClass("mt-5")
    $("#sign-up footer .container").addClass("justify-content-center")
    $("#sign-up .yıl").text(tarih.getFullYear())
    $("#sign-up footer").addClass("position-relative bottom-0 w-100")

})
$("#sign-up a").addClass("text-decoration-none")
$("#sign-up .card-footer a").addClass("text-brand-secondary")

// term get
$.get(head, data => $("#terms").before(data));
$.get(header, function(data) {
    $("#terms").prepend(data)
    $("#terms .navbar").toggleClass("navbar-expand-lg py-lg-0 navbar-expand-md")
    $("#terms .navbar .container-fluid").toggleClass("px-md-4 px-md-3 py-lg-0 container-lg ")
    $("#terms .navbar .nav-link").addClass("mt-md-0")
    $("#terms .navbar-nav").toggleClass("ms-lg-auto ms-md-auto")
});
$("footer *").addClass("text-decoration-none text-white")


// privacy get
$.get(head, data => $("#privacy").before(data));




//card getirme inputa yazı yazzıldıgında( index)

//recptcha get
$.get(recaptcha, data => $("#kayit footer").before(data));
$.get(recaptcha, data => $("#sign-up footer").before(data));

// $(".recaptcha").hover(function() {
//     $(this).animate({ "width": "300px" }, 500)
// }, function() { $(this).css("width", "70px") })


$(document).on("mouseover", ".recaptcha", function() {
    $(this).animate({ "width": "300px" }, 500)
});
$(document).on("mouseleave", ".recaptcha", function() {
    $(this).css("width", "70px")

})










$("#index form input").keyup(function() {
    let val = $(this).val().toString().toLowerCase()
    let arr = []
    for (let i = 0; i < Object.keys(cards).length; i++) {
        if (cards[i].acıklama.toLowerCase().indexOf(val) == -1)
            arr.push(i)
    }
    $(".card").each(function(i, _) {
        if (arr.includes(i))
            $(this).parent().addClass("d-none")
        else {
            $(this).parent().removeClass("d-none")
        }
    })
})
$("#index form").submit(function() {
    return false;
})
$(document).on("click", "#index .card", function() {
    $(".trigger").attr("href", $(this).attr("data-link"))[0].click()
})













// footer tarih ekleme