// varsayılan main kısmı
$(document).ready(function() {
    $("li").mouseover(function() {
        $("#varsayilan").css("display", "none");
    });
    $("li").mouseout(function() {
        $("#varsayilan").css("display", "block");
    });
});

// elektronik kısmı
$(document).ready(function() {
    $("#liElektronik").mouseover(function() {
        $("#elektronik").css("display", "block");
    });
    $("#liElektronik").mouseout(function() {
        $("#elektronik").css("display", "none");
    });
});

// evbahce kısmı
$(document).ready(function() {

    $("#liEvBahce").mouseover(function() {
        $("#evBahce").css("display", "block");
    });
    $("#liEvBahce").mouseout(function() {
        $("#evBahce").css("display", "none");


    });
});

// moda kısmı
$(document).ready(function() {

    $("#liModa").mouseover(function() {
        $("#moda").css("display", "block");
    });
    $("#liModa").mouseout(function() {
        $("#moda").css("display", "none");
    });
});

//kozmetik kısmı
$(document).ready(function() {
    $("#liKozmetik").mouseover(function() {
        $("#kozmetik").css("display", "block");
    });
    $("#liKozmetik").mouseout(function() {
        $("#kozmetik").css("display", "none");
    });
});

//anne bebek
$(document).ready(function() {
    $("#liAnneBebek").mouseover(function() {
        $("#anneBebek").css("display", "block");
    });
    $("#liAnneBebek").mouseout(function() {
        $("#anneBebek").css("display", "none");
    });
});

//supermarket
$(document).ready(function() {
    $("#liSuperMarket").mouseover(function() {
        $("#superMarket").css("display", "block");
    });
    $("#liSuperMarket").mouseout(function() {
        $("#superMarket").css("display", "none");
    });
});

// kitap muzik
$(document).ready(function() {
    $("#liKitapMuzik").mouseover(function() {
        $("#kitapMuzik").css("display", "block");
    });
    $("#liKitapMuzik").mouseout(function() {
        $("#kitapMuzik").css("display", "none");
    });
});

// otomobil bisiklet
$(document).ready(function() {
    $("#liOtomobilBisiklet").mouseover(function() {
        $("#otomobilBisiklet").css("display", "block");
    });
    $("#liOtomobilBisiklet").mouseout(function() {
        $("#otomobilBisiklet").css("display", "none");
    });

});

// spor outdoor
$(document).ready(function() {
    $("#liSporOutdoor").mouseover(function() {
        $("#sporOutdoor").css("display", "block");
    });
    $("#liSporOutdoor").mouseout(function() {
        $("#sporOutdoor").css("display", "none");
    });
});