//giris animasyonu yok etme
function animasyonYokEt() {
    var i;
    setTimeout(() => {
        document.getElementsByTagName("nav")[0].style.display = "none";
        document.getElementsByClassName("icerik")[0].style.display = "block";

    }, 1000);
}

// dugme  kısmını buraya yazdım
var tıklamaDugmesi = "<i class='fas fa-lg fa-align-justify d- py-1' id='fa-align' onclick='tanitimAsagiKaydir()'></i> <i class='fas fa-lg fa-times py-1 pr-1 ' style='display: none;' id='fa-times' onclick='tanitimAsagiKaydirKapat()'></i>";
document.getElementsByClassName("tiklamaDugmesi")[0].innerHTML = tıklamaDugmesi;




//bennet bolumu
var bennetYazisi = "bennet";
document.getElementsByClassName("bennetBolumu")[0].innerHTML = " <div class = 'nav-link   h3 pr-4 font-weight-normal pr-0 py-0 pt-lg-3 ' > bennett </div>";








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
    document.getElementById("tanitimKucukOrtaCihaz").style.backgroundColor = "#f9c5d1";
    document.getElementsByClassName("teaStoreLink")[0].innerHTML = " <div class='teaStore'>tea store</div> ";
    document.getElementsByClassName("aboutLink")[0].innerHTML = " <div class='about'>about</div> ";
    document.getElementsByClassName("contactLink")[0].innerHTML = " <div class='contact'>contact</div>";

}

// document.getElementsByClassName("teaStore")[0].innerHTML = "Tea store";
// document.getElementsByClassName("contact")[0].innerHTML = "Contact";
// document.getElementsByClassName("about")[0].innerHTML = "About";

function tanitimAsagiKaydirKapat() {
    document.getElementById("fa-align").style.display = "block";
    document.getElementById("fa-times").style.display = "none";
    document.getElementById("tanitimKucukOrtaCihaz").style.display = "none";
    document.getElementById("tanitimVarsayilan").style.display = "block";

}
// refresh yourself yazısını ekrana yazdırma için
// var i;
// for (i = 0; i < icerik.length; i++) {
//     document.getElementsByClassName("icerik")[i].style.display = "none";

// }
// var refreshYourself = "refresh yourself with tea";
// document.getElementsByClassName("refreshYourself")[0].innerHTML = refreshYourself;