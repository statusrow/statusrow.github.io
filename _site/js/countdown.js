document.addEventListener('DOMContentLoaded', function(){
  function setBackgroundImage() {
    var images = [
      "linear-gradient(to right top, rgba(0, 51, 119, 0.8), rgba(100, 235, 255, 0.36)), url(/assets/images/TWAC_2018_Status_Row_1.jpg)",
      "linear-gradient(to right top, rgba(0, 51, 119, 0.8), rgba(100, 235, 255, 0.36)), url(/assets/images/TWAC_2018_Status_Row_2.jpg)",
      "linear-gradient(to right top, rgba(0, 51, 119, 0.8), rgba(100, 235, 255, 0.36)), url(/assets/images/TWAC_2018_Status_Row_3.jpg)",
      "linear-gradient(to right top, rgba(0, 51, 119, 0.8), rgba(100, 235, 255, 0.36)), url(/assets/images/TWAC_2018_Status_Row_4.jpg)"
    ];

    var x = document.getElementsByClassName("Hero__Global");
    var i;
    for (i = 0; i < x.length; i++) {
        x[i].style.backgroundImage = images[Math.floor(Math.random() * images.length)];
    }

  }

  setBackgroundImage();

});
