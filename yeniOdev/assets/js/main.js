function alertDisplay(display) {
    if (display == "block") {
        document.getElementById("sayfayiKarart").style.display = "block";
        document.getElementById("aramaCubugu").style.display = "block";

    }
    if (display == "none") {
        document.getElementById("aramaCubugu").style.display = "none";
        document.getElementById("sayfayiKarart").style.display = "none";

    }
}

var x = 0;

function satinAlmalariYazdir(sayi) {

    document.getElementById("satinAlmaSayisi").innerHTML = sayi;
}

satinAlmalariYazdir(x);


var pdf = document.getElementsByClassName("pdf");
for (let i = 0; i < pdf.length; i++) {
    pdf[i].className = "badge pdf bg-danger small float-end mt-1 text-uppercase ";
    pdf[i].innerHTML = "PDF";
}
var arkaPlansızPdf = document.getElementsByClassName("ArkaPLansızpdf");
for (let i = 0; i < arkaPlansızPdf.length; i++) {
    arkaPlansızPdf[i].className = "badge pdf bg-danger small float-end mt-1 text-uppercase ";
    arkaPlansızPdf[i].innerHTML = "PDF";
}

//document.getElementsByClassName("")[0].className =

$(function() {
    $("").click(function() {
        $(".byFamilyAcilim").toggle(1000);
    });
});