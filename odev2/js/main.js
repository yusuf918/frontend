 //giris animasyonu yok etme
 function animasyonYokEt() {
     var i;
     setTimeout(() => {
         document.getElementsByTagName("nav")[0].style.display = "none";
         var y = document.getElementsByClassName("icerik");
         y[0].style.display = "block";
     }, 1000);
 }

 function sayfaAc(x) {
     var y = document.getElementsByClassName(x);
     var i;

     for (i = 1; i < y.length; i++) {
         y[i].style.display = "block";

     }
 }

 // dugme  kısmını buraya yazdım
 var tiklamaDugmesi = '<span id="hamburger-btn-align" class="pl-2" onclick="tanitimAsagiKaydir()" > <span class="line" > </span> <span class="line"> </span > <span class="line" > </span></span > <span class="pl-2 fas fa-times fa-lg" id="hamburger-btn-times" style="display:none;" onclick="tanitimAsagiKaydirKapat()" > </span > ';

 document.getElementsByClassName("hamburger-btn")[0].innerHTML = tiklamaDugmesi;




 //bennet bolumu
 var bennetYazisi = "bennet";
 document.getElementsByClassName("bennetBolumu")[0].innerHTML = " <div class = 'nav-link   h3 pr-4 font-weight-normal pr-0 py-0 pt-lg-3 ' > bennett </div>";









 //header en son içerik
 document.getElementsByClassName("baslikEnSon")[0].innerHTML = "<a class='nav-link p-0' href='#'><span class='material-icons ' style='font-size:36px; '>shopping_bag</span><span class='d-inline-block turuncuRenk mb-1 rounded-circle' style='padding: 13px;'></span><span class='d-inline-block position-relative text-white' style='left: -27%;top: -0.7rem;' id='headerSayi'></span></a>";
 // header turuncu dairedeki sayi icin
 var headerSayi = document.getElementById("headerSayi");
 var sayi = 0;


 function sayiYazdir(x) {
     headerSayi.innerHTML = x;

 }
 sayiYazdir(sayi);






 function tanitimAsagiKaydir() {
     document.getElementById("hamburger-btn-align").style.display = "none";
     document.getElementById("hamburger-btn-times").style.display = "block";
     document.getElementById("tanitimKucukOrtaCihaz").style.display = "block";
     document.getElementById("tanitimVarsayilan").style.display = "none";
     document.getElementsByClassName("teaStoreLink")[0].innerHTML = " <div class='teaStore'>tea store</div> ";
     document.getElementsByClassName("aboutLink")[0].innerHTML = " <div class='about'>about</div> ";
     document.getElementsByClassName("contactLink")[0].innerHTML = " <div class='contact'>contact</div>";

 }

 // document.getElementsByClassName("teaStore")[0].innerHTML = "Tea store";
 // document.getElementsByClassName("contact")[0].innerHTML = "Contact";
 // document.getElementsByClassName("about")[0].innerHTML = "About";

 function tanitimAsagiKaydirKapat() {
     document.getElementById("hamburger-btn-align").style.display = "block";
     document.getElementById("hamburger-btn-times").style.display = "none";
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