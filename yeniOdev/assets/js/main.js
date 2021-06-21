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

function ucret(index) {
    return index < 15 ? "100" : index < 51 ? "75" : "50";
}


var issues = document.getElementById("issues");
var a = '<div class="linkliSolukYazi">show all</div>';
let issueLength = 69;
var sonunaPdfEklenecekler = [64, 65, 66, 67, 68, 69];
var sonunaUcretEklenecekler = [13, 14, 16, 18, 19, 21, 23, 26, 27, 41, 52, 53, 55, 63];
for (i = 1; i <= issueLength; i++) {
    if (sonunaPdfEklenecekler.includes(i)) {
        a += '<div class="linkliSolukYazi">' + 'issue' + " " + (i) + '<span class="pdf"></span>' + '</div>';
    } else if (sonunaUcretEklenecekler.includes(i)) {
        a += '<div class="linkliSolukYazi">' + 'issue' + " " + (i) + '<span class="float-end">' + "$" + ucret(i) + '.00' + '</span>' + '</div>';

    } else
        a += '<div class="linkliSolukYazi">' + 'issue' + " " + (i) + '</div>';

    issues.innerHTML = a;
}
var x = 0;

function satinAlmalariYazdir(sayi) {

    document.getElementById("satinAlmaSayisi").innerHTML = sayi;
}

satinAlmalariYazdir(x);

function yazdir() {
    document.getElementById("yazdir").innerHTML = "asdfg";
}

var linkliSolukYazi = document.getElementsByClassName("linkliSolukYazi")
for (let i = 0; i < linkliSolukYazi.length; i++) {
    linkliSolukYazi[i].className = "linkliSolukYazi text-muted border-bottom border-secondary text-capitalize col-10 mx-auto";
}

var pdf = document.getElementsByClassName("pdf");
for (let i = 0; i < pdf.length; i++) {
    pdf[i].className = "badge pdf bg-danger small float-end mt-1  ";
    pdf[i].innerHTML = "Pdf";
}

var arkaPlansizPdf = document.getElementsByClassName("arkaPlansizPdf");
for (let i = 0; i < arkaPlansizPdf.length; i++) {
    arkaPlansizPdf[i].className = "badge arkaPlansizPdf bg-gradient small float-end mt-1 text-uppercase ";
    arkaPlansizPdf[i].innerHTML = "Pdf";
}

var printedVersiyon = document.getElementsByClassName("printedVersiyon");
for (let i = 0; i < printedVersiyon.length; i++) {
    printedVersiyon[i].className = "badge printedVersiyon bg-secondary small float-end mt-1  me-1 ";
    printedVersiyon[i].innerHTML = "printed versiyon";
}
//document.getElementsByClassName("")[0].className =
var arkaPlansizPrintedVersiyon = document.getElementsByClassName("arkaPlansizPrintedVersiyon");
for (let i = 0; i < arkaPlansizPrintedVersiyon.length; i++) {
    arkaPlansizPrintedVersiyon[i].className = "badge arkaPlansizPrintedVersiyon bg-gradient small float-end mt-1  me-1 ";
    arkaPlansizPrintedVersiyon[i].innerHTML = "printed versiyon";
}



$(".hamburger-btn").click(function() {
    $(".baslangictaKapali").toggle(1000);
});

$(".tiklandigindaHepsiniKapat").click(function() {
    $("section").hide();
});
$(".byFamily").click(function() {
    $(".byFamilyAcilim").toggle();
});
$(".byStyle").click(function() {
    $(".byStyleAcilim").toggle();
});
$(".langauages").click(function() {
    $(".langauagesAcilim").toggle();
});
$(".typeSpecimens").click(function() {
    $(".typeSpecimensAcilim").toggle();
});
$(".emigreMagazine").click(function() {
    $(".emigreMagazineAcilim").toggle();
});

$(".merchMore").click(function() {
    $(".merchMoreAcilim").toggle();
});
$(".byFamilyLg").html($(".byFamilyAcilim").html());
$(".byStyleLg").html($(".byStyleAcilim").html());
$(".langauagesLg").html($(".langauagesAcilim").html());
$(".typeSpecimensLg").html($(".typeSpecimensAcilim").html());
$(".emigreMagazineLg").html($(".emigreMagazineAcilim").html());
$(".merchMoreLg").html($(".merchMoreAcilim").html());

// footer kısmındaki kısmımlar için
$(".licensing").click(function() {
    $(".licensingAcilim").toggle();
});
$(".typeDesigners").click(function() {
    $(".typeDesignersAcilim").toggle();
});

// $(div[class != "licensing"]).click(function() {
//     $(".licensingAcilim").hide();
// });