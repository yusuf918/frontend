function header6() {
    const header6Button = [
        ["GET STARTED", " bg-warning"],
        ["MORE INFO", " bg-white"],
        ["CONTACT US", " bg-purple"]
    ];
    const colTemplate = document.getElementById("header6Col")
    var content;
    for (let i = 0; i < header6Button.length; i++) {

        let col = document.importNode(colTemplate.content, true);

        //   yazı ve class ayarlama
        col.querySelector("button").textContent = header6Button[i][0]
        col.querySelector("button").className += header6Button[i][1]
            //   bitti

        $(".header6").append(col)

    }
    let Class = "row justify-content-center";
    let div = $("<div>").addClass(Class);

    $(".header6 .col-12").wrapAll(div)



}
header6();