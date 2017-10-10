var total = 0;
var countupfunction = setInterval(function() {

    var bottlesPerSecond = (6341 *2);
    total = total + bottlesPerSecond;
    document.getElementById("totalBottles").innerHTML = total.toLocaleString('en');
}, 2000);
