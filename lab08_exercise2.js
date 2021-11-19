var imageFiles = ["slideshow1.jpeg", "slideshow2.jpeg", "slideshow3.jpeg", "slideshow4.jpeg", "slideshow5.jpeg"];
var currentImageCount = 0;

function previous(){
  if(currentImageCount == 0){
    currentImageCount = 4;
  }
  else{
    currentImageCount--;
  }
  document.getElementById("slideshowImage").innerHTML = '<img src="' + imageFiles[currentImageCount] + '" height="500" width="500">';
}

function next(){
  if(currentImageCount == 4){
    currentImageCount = 0;
  }
  else{
    currentImageCount++;
  }
  document.getElementById("slideshowImage").innerHTML = '<img src="' + imageFiles[currentImageCount] + '" height="500" width="500">';
}
