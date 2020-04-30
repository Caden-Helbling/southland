let nextImage = 0;
let images = new Array('img/bg1.jpg','img/bg2.jpg','img/bg3.jpg', 'img/bg4.jpg');
let timeOut;

function doSlideshow(value){
  clearTimeout(timeOut);
  if (value == 1) {
    ++nextImage;
  }
  else if (value == 2) {
    --nextImage;
  }
  if (nextImage >= images.length) {
    nextImage = 0;
  }
  if (nextImage < 0) {
    nextImage = images.length - 1;
  }
  console.log(nextImage);

  $('.title')
  .css('background-image','url("'+images[nextImage]+'")');

  timeOut = setTimeout(function (){
    doSlideshow(1);
  }, 3000);
}

doSlideshow(1);
