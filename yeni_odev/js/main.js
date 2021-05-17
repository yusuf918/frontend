// header turuncu dairedeki sayi icin
var headerSayi = document.getElementById("headerSayi");
var sayi = "0";
headerSayi.innerHTML = sayi;


//header en son içerik
var kutu1 = document.getElementsByClassName("teaStore");
var kutu2 = document.getElementsByClassName("contact");
var kutu3 = document.getElementsByClassName("about");

kutu1[0].innerHTML = "teaStore";
kutu2[0].innerHTML = "Contact";
kutu3[0].innerHTML = "About";

function tanitimAsagiKaydir() {
    // document.write("asagi kaydir");
    document.getElementById("fa-align").style.display = "none";
    document.getElementById("fa-times").style.display = "block";
    document.getElementById("tanitimKucukOrtaCihaz").style.display = "block";
    document.getElementById("tanitimVarsayilan").style.display = "none";


}
//jquery ile aşagı kaydırma


function tanitimAsagiKaydirKapat() {
    document.getElementById("fa-align").style.display = "block";
    document.getElementById("fa-times").style.display = "none";
    document.getElementById("tanitimKucukOrtaCihaz").style.display = "none";
    document.getElementById("tanitimVarsayilan").style.display = "block";

}