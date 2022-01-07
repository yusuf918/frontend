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
// get index
$.get(cardHtml, function(data) {
    let inner;

    for (var i = 0; i < Object.keys(cards).length; i++) {
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
$.get(headHtml, data => $("#kampaHazirlik").before(data));
$.get(headerHtml, function(data) {
    $("#kampaHazirlik").prepend(data)
    $("#kampaHazirlik .navbar").toggleClass("navbar-expand-lg py-md-0 navbar-expand-md")
    $("#kampaHazirlik .navbar .nav-link").addClass("mt-md-0")
    $("#kampaHazirlik .navbar-nav").toggleClass("ms-lg-auto ms-md-auto")
});




//card getirme inputa yazı yazzıldıgında
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