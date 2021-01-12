/* Script taken from W3 Schools and modified */

var countDownDate = new Date("Dec 31, 2018 00:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("output").innerHTML = "<span class='days'>" + days + " days </span>" + "<span class='hours'>" + hours + " hours </span>" + "<span class='minutes'>" + minutes + " minutes </span>" + "<span class='seconds'>" + seconds + " seconds </span>";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("output").innerHTML = "OFFER EXPIRED";
    }
}, 1000);