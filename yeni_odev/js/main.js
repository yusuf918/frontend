// dugme  kısmını buraya yazdım
var tıklamaDugmesi = "<i class='fas fa-lg fa-align-justify d- py-1' id='fa-align' onclick='tanitimAsagiKaydir()'></i> <i class='fas fa-lg fa-times py-1 pr-1 ' style='display: none;' id='fa-times' onclick='tanitimAsagiKaydirKapat()'></i>";
document.getElementsByClassName("d-lg-none")[0].innerHTML = tıklamaDugmesi;

//bennet bolumu
var bennetYazisi = "bennet";
document.getElementsByClassName("bennetBolumu")[0].innerHTML = " <div class = 'nav-link   h3 pr-4 font-weight-normal pr-0 py-0 pt-lg-3 ' > bennett </div>";







document.getElementsByClassName("about")[0].innerHTML = "About";
document.getElementsByClassName("teaStore")[0].innerHTML = "Tea store";
document.getElementsByClassName("contact")[0].innerHTML = "Contact";
//header en son içerik
document.getElementsByClassName("baslikEnSon")[0].innerHTML = "<a class='nav-link p-0' href='#'><span class='material-icons ' style='font-size:36px; '>shopping_bag</span><span class='d-inline-block turuncuRenk mb-1 rounded-circle' style='padding: 13px;'></span><span class='d-inline-block position-relative text-white' style='left: -27%;top: -0.7rem;' id='headerSayi'></span></a>";
// header turuncu dairedeki sayi icin
var headerSayi = document.getElementById("headerSayi");
var sayi = "0";
headerSayi.innerHTML = sayi;


function tanitimAsagiKaydir() {
    document.getElementById("fa-align").style.display = "none";
    document.getElementById("fa-times").style.display = "block";
    document.getElementById("tanitimKucukOrtaCihaz").style.display = "block";
    document.getElementById("tanitimVarsayilan").style.display = "none";
    document.body.style.backgroundColor = "#f9c5d1";
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