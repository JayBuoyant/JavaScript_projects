function upload() {
  var filename = document.getElementById("finput").value;
  alert ("You chose " +  filename);
}
function drawTheImage() {
  var imgcanvas = document.getElementById("can1");
  var fileinput = document.getElementById("finput");
  var image = new SimpleImage(fileinput);
  image.drawTo(imgcanvas); 
}