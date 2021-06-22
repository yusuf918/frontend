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

function footer() {
    function col12() {
        function aboutEmigre() {
            let aboutEmigre = '<div class="header"><div class="fw-bold pb-0 pt-2 mb-0">About Emigre</div></div>';
            return aboutEmigre;
        }

        function content() {
            let yazi = "Emigre, Inc. is a digital type foundry based in Berkeley, California. Founded in 1984, coinciding with the birth of the Macintosh computer, the Emigre team, consisting of Rudy VanderLans and Zuzana Licko, with the addition of Tim Starback in 1993, were among the early adaptors to the new technology. ";
            let aboutHtmlLinki = '<span> <a href="About.html" class="text-decoration-none text-white">(...more)</a></span>';

            let content = '<div class="content small">' + yazi + aboutHtmlLinki + '</div>';

            return content;

        }

        function footer() {
            return '<div class="footer pt-4"><img src="./assets/png/EmigreFontsLogo.png" width="100" alt=""></div>';
        }

        var asd = aboutEmigre() + content() + footer();
        return '<div class="col-12 col-md-6  px-0  ">' + asd + '</div>';
    }

    function col6() {
        function generalInfo() {
            let h6 = '  <h6 class="fw-bold">General Info</h6>';
            return h6;
        }

        function div() {
            function licensing() {
                let div = '<div class="licensing" style="height: 20px;">';

                function licensingAcilim() {


                    function overwiew() {
                        let overwiew = '<div class="border-bottom border-secondary ps-4 text-dark">overwiew</div>';
                        let link = '<a href="./license/license.html" class="text-decoration-none">';
                        return link + overwiew + '</a>';
                    }

                    function desktop() {
                        let desktop = '<div class="border-bottom border-secondary ps-4 text-dark">desktop</div>';
                        let link = '<a href="./license/desktop.html" class="text-decoration-none">';
                        return link + desktop + '</a>';

                    }

                    function web() {
                        let web = '<div class="border-bottom border-secondary ps-4 text-dark">web</div>';
                        let link = '<a href="./license/web.html" class="text-decoration-none">';
                        return link + web + '</a>';
                    }

                    function app() {
                        let app = '<div class="border-bottom border-secondary ps-4 text-dark">app</div>';
                        let link = '<a href="./license/app.html" class="text-decoration-none">';
                        return link + app + '</a>';
                    }

                    function ebook() {
                        let ebook = '<div class="border-bottom border-secondary ps-4 text-dark">ebook</div>';
                        let link = '<a href="./license/ebook.html" class="text-decoration-none">';
                        return link + ebook + '</a>';
                    }

                    function server() {
                        let server = '<div class="border-bottom border-secondary ps-4 text-dark">server</div>';
                        let link = '<a href="./license/server.html" class="text-decoration-none">';
                        return link + server + '</a>';
                    }

                    function game() {
                        let game = '<div class="border-bottom border-secondary ps-4 text-dark">game</div>';
                        let link = '<a href="./license/game.html" class="text-decoration-none">';
                        return link + game + '</a>';
                    }

                    function worldWide() {
                        let worldWide = ' <div class="border-bottom border-secondary ps-4 text-dark">World-Wide</div>';
                        let link = '<a href="./license/world-wide.html" class="text-decoration-none">';
                        return link + worldWide + '</a>';

                    }

                    function custom() {
                        let custom = '<div class="border-bottom border-secondary ps-4 text-dark">custom</div>';
                        let link = '<a href="./license/custom.html" class="text-decoration-none">';
                        return link + custom + '</a>';
                    }
                    let div = '<div class="licensingAcilim position-relative bg-white text-dark ">';
                    return div + generalInfo() + overwiew() + desktop() + web() + app() + ebook() + server() + game() + worldWide() + custom() + '</div>';



                }
                return div + licensingAcilim() + '</div>'

            }
            return '</div>' + licensing() + '</Div>';
        }
        return div();

        function typeDesigners() {







        }


    }
    document.getElementById("footer").innerHTML = col6();

}



footer();