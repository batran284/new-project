$(function() {
    $(".font-button").bind("click", function() {
        var size = parseInt($('#content').css("font-size"));
        if ($(this).hasClass("plus")) {
            size = size + 2;
        } else if ($(this).hasClass("minus")) {
            size = size - 2;
            if (size <= 10) {
                size = 10;
            }
        } else {
            size = 16;
        }
        $('#content').css("font-size", size);
    });
});

document.addEventListener("click", function() {
    document.getElementById("content").style = "font-size:32px", "line-height: 30px", "letter-spacing: 0.3px;";
});