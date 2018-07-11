document.addEventListener('DOMContentLoaded', function(){
  var total = 0;
  var countupfunction = setInterval(function() {

      var bottlesPerSecond = (6341 *2);
      total = total + bottlesPerSecond;
      var bottlesElem = document.getElementById("totalBottles");

      if (bottlesElem) {
        bottlesElem.innerHTML = total.toLocaleString('en');
      }
      
  }, 2000);

}, false);
