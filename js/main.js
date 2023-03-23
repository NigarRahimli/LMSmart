var box = document.querySelector(".background");
var container = document.querySelector("body");

container.addEventListener("mousemove", function(event) {
  var x = event.clientX;
  var y = event.clientY;

  var boxX = box.getBoundingClientRect().left;
  var boxY = box.getBoundingClientRect().top;

  var distance = Math.sqrt(Math.pow((x - boxX), 2) + Math.pow((y - boxY), 2));

  if (distance < 600) {
    var offsetX = (x - boxX) / 35;
    var offsetY = (y - boxY) /35;

    box.style.transition = "transform 0.2s";
    box.style.transform = "translate(" + (-offsetX) + "px, " + (-offsetY) + "px)";
  } else {
    box.style.transition = "transform 0.5s";
    box.style.transform = "translate(0, 0)";
  }
});


//
var point = document.querySelector("#person .points");


container.addEventListener("mousemove", function(event) {
  var x = event.clientX;
  var y = event.clientY;

  var pointX = point.getBoundingClientRect().left;
  var pointY = point.getBoundingClientRect().top;

  var distance = Math.sqrt(Math.pow((x - pointX), 2) + Math.pow((y - pointY), 2));

  if (distance < 600) {
    var offsetX = (x - pointX) / 35;
    var offsetY = (y - pointY) /35;

    point.style.transition = "transform 0.2s";
    point.style.transform = "translate(" + (-offsetX) + "px, " + (-offsetY) + "px)";
  } else {
    point.style.transition = "transform 0.5s";
    point.style.transform = "translate(0, 0)";
  }
});


/////slick slider

$(document).ready(function(){
  $('.story-wrapper').slick({
    infinite: false,
    slidesToShow: 3,
  slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
      {
        breakpoint: 1028,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 766,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });


 

});

	 $('.collab-slider').slick({
    slidesToShow: 5,
    infinite:true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1028,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
  });















