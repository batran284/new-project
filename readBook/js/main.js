$(function() {
    $(".font-button").bind("click", function() {
        var size = parseInt($('#content').css("font-size"));
        if ($(this).hasClass("plus")) {
            size = size + 2;
            if (size >= 30) {
                size = 30;
            }
        } else if ($(this).hasClass("minus")) {
            size = size - 2;
            if (size <= 8) {
                size = 8;
            }
        } else {
            size = 16;
        }
        $('#content').css("font-size", size);
    });
});

function display() {
    var x = document.getElementById('align').value;
    var center = document.getElementById('content').style;
    if (x == "center") {
        center.textAlign = "center";
    } else if (x == 'left') {
        center.textAlign = "left";
    } else if (x == 'right') {
        center.textAlign = "right";
    } else if (x == 'justify') {
        center.textAlign = "justify";
    }
}

function lineSpacing() {
    var x = document.getElementById('space').value;
    var center = document.getElementById('content').style;
    if (x == "Big") {
        center.lineHeight = "25px";
    } else if (x == 'Small') {
        center.lineHeight = "13px";
    } else if (x == 'Normal') {
        center.lineHeight = "18px";
    }
}