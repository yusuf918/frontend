"use strict";
$(".footer").height($(".footer").outerHeight())
$(".layout").click(function() {
    $(this).find("span").toggleClass("active")
    $(this).find("ul").toggleClass("active")
})
$(".sidebar ul").addClass("list-unstyled ")
$(".sidebar li").addClass("ps-4 ")

$(".float-end").click(function() {
    $(this).toggleClass("active")
    $(this).next().toggleClass("active")
    $(this).parent().siblings().find("ul").removeClass("active")
    $(this).parent().siblings().find("span").removeClass("active")

})

$(document).on("click", ".nav-link", function() {
    if (!$(".sidebar").hasClass("active")) {
        $(".sidebar > ul").animate({ "width": "15rem" }, 150)
    } else {
        $(".sidebar > ul").css("width", 0)
    }
    $(".sidebar").toggleClass("active")
});


// sidebar parent için olay onleme
$(".linkGroup li").click(function(event) {
        event.stopPropagation()
    })
    // tum sayfalar icin head çagırma
$.get("../components/head.html", function(data, status) {
    $("head").html(data)
});
//  footer çagırma

$.get("../components/footer.html", function(data, status) {
    $(".footer").html(data)
});
//  header çagırma

$.get("../components/header.html", function(data, status) {
    $("header").html(data)
});

$(document).ready(function() {
    var length = $("#myTable").length
    if (length)
        $('#myTable').DataTable();
});




// area chart js
let areaDays = [];
for (var i = 1; i < 14; i++) {
    if (i % 2) areaDays.push(`Mar ${i}`);
    else { areaDays.push("") }
}

let areaNums = [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451];
const chart = document.getElementById('areaChart');
let grafik = new Chart(chart, {
    type: 'line',
    data: {
        labels: areaDays,
        datasets: [{
            fill: 'origin',
            label: "none",
            data: areaNums,
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            // borderColor: "rgba(54, 162, 235, 1)",
            borderColor: "#0d6efd",
            borderWidth: 3

        }],



    },
    options: {
        elements: {
            line: {
                tension: 0.3
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                max: 40000,
                min: 0,
                ticks: {
                    stepSize: 10000
                },

            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

// bar chart
let barMonths = ["january", "february", "march", "april", "may", "june"]
let barNums = [4215, 5312, 6251, 7841, 9821, 14984]
const barChart = document.getElementById("barChart")
let bar = new Chart(barChart, {
    type: 'bar',
    data: {
        labels: barMonths,
        datasets: [{
            // fill: 'origin',
            label: "none",
            data: barNums,
            backgroundColor: "#0d6efd",
            // borderColor: "rgba(54, 162, 235, 1)",
            borderColor: "#0d6efd",
            // borderWidth: 3

        }],



    },
    options: {

        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                max: 15000,
                min: 0,
                ticks: {
                    stepSize: 5000
                },

            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});

const pieChart = document.getElementById("pieChart")
let pie = new Chart(pieChart, {
        type: 'pie',
        data: {
            labels: [
                'Blue',
                'Red',
                'Yellow',
                "Green"
            ],
            datasets: [{
                // label: 'My First Dataset',
                data: [12, 15, 11, 8],
                backgroundColor: [
                        '#0d6efd',
                        '#dc3545',
                        '#ffc107',
                        '#198754'
                    ]
                    // hoverOffset: 0
            }],


        },
        chart: {
            margin: [0, 0, 0, 0],
            spacingTop: 0,
            spacingBottom: 0,
            spacingLeft: 0,
            spacingRight: 0
        },
        plotOptions: {
            pie: {
                height: "100%",
                dataLabels: {
                    enabled: false
                }
            }
        }
    })
    // $("#pieChart").css("max-height", $("#barChart").height() + "px")