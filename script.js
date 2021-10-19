function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#334142");
  colorMode(HSB);
  stroke("white");
  strokeWeight(5);
  let btnExport = document.getElementById("save");
  btnExport.addEventListener("click", exportPressed, false);

  function exportPressed(evt) {
    save("wallpaper.png")
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mouseDragged() {
  let lineDraw = line(mouseX, mouseY, pmouseX, pmouseY);
  document.getElementById("drawMessage").classList.add("hide")
  document.getElementById("head").classList.remove("hide")
}

document.getElementById("clear").addEventListener("click", function () {
  background("#334142");
  document.getElementById("drawMessage").classList.remove("hide")
  document.getElementById("head").classList.add("hide")
});

if(('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
    document.getElementById("drawMessage").innerHTML = "draw with your finger"
}else {
    document.getElementById("drawMessage").innerHTML = "click and drag to draw"
}