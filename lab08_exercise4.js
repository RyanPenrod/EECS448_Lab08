function updateStyle() {
  console.log("I at least ran the function.")
  var dummyText = document.getElementById("dummyText");
  var borderRed = document.getElementById("borderRed").value;
  var borderGreen = document.getElementById("borderGreen").value;
  var borderBlue = document.getElementById("borderBlue").value;
  var borderWidth = document.getElementById("borderWidth").value;
  var backgroundRed = document.getElementById("backgroundRed").value;
  var backgroundGreen = document.getElementById("backgroundGreen").value;
  var backgroundBlue = document.getElementById("backgroundBlue").value;
  var width = borderWidth + "px";
  console.log(width);
  console.log(borderRed);
  console.log(borderGreen);
  console.log(borderBlue);

  dummyText.style.borderStyle = "solid";
  dummyText.style.borderColor = "rgb(" + borderRed + "," + borderGreen + "," + borderBlue + ")";
  dummyText.style.borderWidth = width;
  dummyText.style.backgroundColor = "rgb(" + backgroundRed + "," + backgroundGreen + "," + backgroundBlue + ")";
}
