let logo;
function preload() {
  logo = loadImage('https://i.imgur.com/5RvHUL6.png');
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#334142");
  colorMode(HSB);
  stroke("white");
  strokeWeight(5);
  logo.resize(75, 0);
  image(logo, 15, 45);
  
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
  //Line from prev pt to current pt of mouse position
  let lineDraw = line(mouseX, mouseY, pmouseX, pmouseY);
  document.getElementById("drawMessage").classList.add("hide")
  document.getElementById("btns").classList.remove("hide")
}

document.getElementById("clear").addEventListener("click", function () {
  setup()
  document.getElementById("drawMessage").classList.remove("hide")
  document.getElementById("btns").classList.add("hide")
});

if(('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0)) {
    document.getElementById("drawMessage").innerHTML = "draw with your finger"
}else {
    document.getElementById("drawMessage").innerHTML = "click and drag to draw"
}