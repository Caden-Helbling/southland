let nextimage = 0;
let images = new Array('img/bg1.jpg','img/bg2.jpg','img/bg3.jpg', 'img/bg4.jpg');


function doSlideshow(value){
  if (value == 1) {
    ++nextimage;
  }
  else if (value == 2) {
    --nextimage;
  }
  if (nextimage >= images.length) {
    nextimage = 0;
  }
  if (nextimage < 0) {
    nextimage = images.length - 1;
  }
  $('.title')
  .css('background-image','url("'+images[nextimage]+'")');
}

$(function() {
  // doSlideshow(1);
});
