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




function issuesYazdir(x) {
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
            a += '<a href=\"' + x + '/issues/' + i.toString() + '.html\" class=\"text-decoration-none\"><div class="linkliSolukYazi">' + 'issue' + " " + (i) + '<span class="pdf"></span>' + '</div>' + '</a>';
        } else if (sonunaUcretEklenecekler.includes(i)) {
            a += '<a href=\"' + x + '/issues/' + i.toString() + '.html\" class=\"text-decoration-none\"><div class="linkliSolukYazi">' + 'issue' + " " + (i) + '<span class="float-end">' + "$" + ucret(i) + '.00' + '</span>' + '</div>' + '</a>';

        } else
            a += '<a href=\"' + x + '/issues/' + i.toString() + '.html\" class=\"text-decoration-none\"> <div class="linkliSolukYazi">' + 'issue' + " " + (i) + '</div>' + '</a>';

    }
    issues.innerHTML = a;
}

issuesYazdir(dosya);

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


//sm navbar burada basliyor
$('html').click(function() {
    $(".byFamilyAcilim").hide();
});
$(".byFamily").click(function(e) {
    e.stopPropagation();
    $(".byFamilyAcilim").toggle();

});


$('html').click(function() {
    $(".byStyleAcilim").hide();
});
$(".byStyle").click(function(e) {
    e.stopPropagation();
    $(".byStyleAcilim").toggle();

});

$('html').click(function() {
    $(".langauagesAcilim").hide();
});
$(".langauages").click(function(e) {
    e.stopPropagation();
    $(".langauagesAcilim").toggle();

});


$('html').click(function() {
    $(".typeSpecimensAcilim").hide();
});
$(".typeSpecimens").click(function(e) {
    e.stopPropagation();
    $(".typeSpecimensAcilim").toggle();

});


$('html').click(function() {
    $(".emigreMagazineAcilim").hide();
});
$(".emigreMagazine").click(function(e) {
    e.stopPropagation();
    $(".emigreMagazineAcilim").toggle();

});

$('html').click(function() {
    $(".merchMoreAcilim").hide();
});
$(".merchMore").click(function(e) {
    e.stopPropagation();
    $(".merchMoreAcilim").toggle();

});
//sm navbar  burda bitiyor
// footer kısmındaki kısmımlar için





$('html').click(function() {
    $(".typeDesignersAcilim").hide();
});
$(".typeDesigners").click(function(e) {
    e.stopPropagation();
    $(".typeDesignersAcilim").toggle();

});



$('html').click(function() {
    $(".licensingAcilim").hide();
});
$(".licensing").click(function(e) {
    e.stopPropagation();
    $(".licensingAcilim").toggle();

});

// lg navbar için gerekli kodlar
// by family
$('.byFamilyNavLg').html($('.byFamilyAcilim').html());
$('html').click(function() {
    $(".byFamilyNavLg").hide();
});
$(".byFamilyNavItem").click(function(e) {
    e.stopPropagation();
    $(".byFamilyNavLg").toggle();

});

// by style
$('.byStyleLg').html($('.byStyleAcilim').html());
$('html').click(function() {
    $(".byStyleLg").hide();
});
$(".byStyleNavItem").click(function(e) {
    e.stopPropagation();
    $(".byStyleLg").toggle();

});

//langauages 
$('.langauagesLg').html($('.langauagesAcilim').html());
$('html').click(function() {
    $(".langauagesLg").hide();
});
$(".langauagesNavItem").click(function(e) {
    e.stopPropagation();
    $(".langauagesLg").toggle();

});
// type specimens
$('.typeSpecimensLg').html($('.typeSpecimensAcilim').html());
$('html').click(function() {
    $(".typeSpecimensLg").hide();
});
$(".typeSpecimensNavItem").click(function(e) {
    e.stopPropagation();
    $(".typeSpecimensLg").toggle();

});
//emigre magazine
$('.emigreMagazineLg').html($('.emigreMagazineAcilim').html());
$('html').click(function() {
    $(".emigreMagazineLg").hide();
});
$(".emigreMagazineNavItem").click(function(e) {
    e.stopPropagation();
    $(".emigreMagazineLg").toggle();

});


// merch more merchMoreNavItem
$('.merchMoreLg').html($('.merchMoreAcilim').html());
$('html').click(function() {
    $(".merchMoreLg").hide();
});
$(".merchMoreNavItem").click(function(e) {
    e.stopPropagation();
    $(".merchMoreLg").toggle();

});