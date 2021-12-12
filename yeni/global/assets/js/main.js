"use strict";
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




// chart js
let days = [];
for (var i = 1; i < 14; i++) {
    if (i % 2) days.push(`Mar ${i}`);
    else { days.push("") }
}

let nums = [10000, 30162, 26263, 18394, 18287, 28682, 31274, 33259, 25849, 24159, 32651, 31984, 38451];
const ctx = document.getElementById('myChart');
let grafik = new Chart(ctx, {
    type: 'line',
    data: {
        labels: days,
        datasets: [{
            fill: 'origin',
            label: "none",
            data: nums,
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