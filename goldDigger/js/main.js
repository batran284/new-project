// document.querySelector(".span").addEventListener("click", displayDate);

// function displayDate() {
//     document.getElementById("text").innerHTML = "this's gold";
//     document.getElementById("text").style.display = "block";
// }



// đếm xem có bn class thì thay đổi giá trị số phần tử dó
// function myFunction() {
//     var x, i;
//     x = document.querySelectorAll(".text");
//     for (i = 0; i < x.length; i++) {
//         x[i].style.backgroundColor = "red";
//     }
// }
// function myFunction() {
//     document.getElementById("text").innerHTML = "this's gold";
// }

document.getElementById('tick').addEventListener('change', () => {
    document.body.classList.toggle('on');
});
document.getElementById('tickk').addEventListener('change', () => {
    document.body.classList.toggle('onn');
});
document.getElementById('tickkk').addEventListener('change', () => {
    document.body.classList.toggle('onnn');
});
document.getElementById('boom').addEventListener('change', () => {
    document.body.classList.toggle('off');
});

function a() {
    var timeleft = 30;
    var downloadTimer = setInterval(function() {
        if (timeleft <= 0) {
            clearInterval(downloadTimer);
            document.getElementById("times").innerHTML = "Finished";
        } else {
            document.getElementById("times").innerHTML = timeleft + " seconds remaining";
        }
        timeleft -= 1;
    }, 500);
}