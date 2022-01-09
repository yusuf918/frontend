// $("button").remove()

var length = $("button").length
if (length < 1) {
    // navbar resmi ortalama    
    $("nav img").parent().parent().addClass("w-100 justify-content-center")
}
// card içindeki resimlerin yuksekliğini ayarlama


var cards = {
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

var cardHtml = "./partitions/cards.html";
var headerHtml = "./partitions/header.html";
var footerHtml = "./partitions/footer.html";
var headHtml = "./partitions/head.html";
var columnHtml = "./partitions/column.html";
// get index
$.get(cardHtml, function(data) {
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

$.get(headerHtml, function(data) {
    $("#index").prepend(data)
})
$.get(footerHtml, function(data) {
    $("#index").append(data)
})
$.get(headHtml, function(data) {
    $("#index").before(data)
})

// get kampa hazırlık
var column = {
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
$.get(headHtml, data => $("#kampaHazirlik").before(data));
$.get(headerHtml, function(data) {
    $("#kampaHazirlik").prepend(data)
    $("#kampaHazirlik .navbar").toggleClass("navbar-expand-lg py-md-0 navbar-expand-md")
    $("#kampaHazirlik .navbar .nav-link").addClass("mt-md-0")
    $("#kampaHazirlik .navbar-nav").toggleClass("ms-lg-auto ms-md-auto")
});
$.get(cardHtml, function(data) {
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
$.get(columnHtml, function(data) {
    let inner;
    for (let i = 0; i < Object.keys(column).length; i++) {
        $("#kampaHazirlik .blockColumn .row").append(data);
        $("#kampaHazirlik .blockColumn .col-md:last-child img").attr("src", column[i].resim)
        $("#kampaHazirlik .blockColumn .col-md:last-child .div-title").text(column[i].açıklama)
        $("#kampaHazirlik .blockColumn .col-md:last-child p").html(column[i].paragraf)


    }
})
$.get(footerHtml, function(data) {
    $("#kampaHazirlik").append(data)
    $("#kampaHazirlik footer").addClass("bg-extra-info")
    $("#kampaHazirlik footer .fw-light").toggleClass("fw-light fw-400")
    $("#kampaHazirlik footer .mt-5").toggleClass("mt-3 mt-5")
    $("#kampaHazirlik footer .container").addClass("justify-content-between")
    $("#kampaHazirlik footer .mx-auto").toggleClass("mx-auto ms-auto")
})



//card getirme inputa yazı yazzıldıgında( index)
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
let tarih = new Date()
$(".yıl").text(tarih.getFullYear())