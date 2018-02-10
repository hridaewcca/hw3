for (var i = 20; i <= 480; i = i + 50) {
  var startX = i;
  var startY = 175
  var endX = i;
  var endY = 340;
  strokeWeight(30);
  line(startX, startY, endX, endY);
}
for (var i = 0; i <= 170; i = i + 50) {
  var startX = 0;
  var startY = i+5
  var endX = 340;
  var endY = i+5;
  strokeWeight (30)
  line(startX, startY, endX, endY);
}
