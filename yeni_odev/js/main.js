// header turuncu dairedeki sayi icin
var headerSayi = document.getElementById("headerSayi");
var sayi = "0";
headerSayi.innerHTML = sayi;


//header en son içerik
document.getElementsByClassName("about")[0].innerHTML = "About";
document.getElementsByClassName("teaStore")[0].innerHTML = "Tea store";
document.getElementsByClassName("contact")[0].innerHTML = "Contact";

function tanitimAsagiKaydir() {
    // document.write("asagi kaydir");
    document.getElementById("fa-align").style.display = "none";
    document.getElementById("fa-times").style.display = "block";
    document.getElementById("tanitimKucukOrtaCihaz").style.display = "block";
    document.getElementById("tanitimVarsayilan").style.display = "none";
}

function tanitimAsagiKaydirKapat() {
    document.getElementById("fa-align").style.display = "block";
    document.getElementById("fa-times").style.display = "none";
    document.getElementById("tanitimKucukOrtaCihaz").style.display = "none";
    document.getElementById("tanitimVarsayilan").style.display = "block";

}
// refresh yourself yazısını ekrana yazdırma için
var refreshYourself = "refresh yourself with tea";
document.getElementsByClassName("refreshYourself")[0].innerHTML = refreshYourself;