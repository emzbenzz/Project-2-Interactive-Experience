let page = 1; // current page
let mainButton;
let song;
let img, img2, img3, img4, img5;
let img6; 
let img7;
let imgW = 300;
let imgH = 300;
let video;
let video2;
let x = 100;
let y = 100;
let xSpeed = 3;
let ySpeed = 2;



// bread animation variables
let breadx = 100;
let bready = 100;
let breadxSpeed = 3;
let breadySpeed = 2;
let  bagx  = 200;
let  bagy = 200;
let  bagxSpeed  = 1;
let  bagySpeed = 3;
let bunchx = 150;
let bunchy = 150;
let bunchxSpeed = 2;
let bunchySpeed = 3;



// Pane positions and sizes
let panes = [
  { x: 200, y: 200, w: 100, h: 100, label: "Pane 1", action: () => page = 3 },
  { x: 200, y: 300, w: 100, h: 100, label: "Pane 2", action: () => page = 4 },
  { x: 300, y: 200, w: 100, h: 100, label: "Pane 3", action: () => page = 5 },
  { x: 300, y: 300, w: 100, h: 100, label: "Pane 4", action: () => page = 6 },
];

function preload() {
  img = loadImage("images/ohwow.jpg");
  img2 = loadImage("images/whale.jpg");
  img3 = loadImage("images/bag.png");
  img4 = loadImage("images/bread.png");
  img5 = loadImage("images/bunch.png");
  img6 = loadImage("images/cat.jpg");
  img7 = loadImage("images/toto.jpg");
  song = loadSound("music/cat.mp3");

}

function setup() {
  createCanvas(600, 500);
  mainButton = createButton("Alright, cool");
  mainButton.position(470, 470);
  mainButton.mousePressed(changePage);
  
 
  video = createVideo("video/egg.mp4");
  video.size(160, 120);
  video.hide();       // hide HTML element so we can draw with image()
  video.loop();       // THIS makes it loop forever
  
  
  video2 = createVideo("video2/chef.mp4");
  video2.size(160, 120);
  video2.hide();       // hide HTML element so we can draw with image()
  video2.loop();       // THIS makes it loop forever
  
   
}

function draw() {
  background('#40f2ed');
  
  
  if (page === 1) page1();
  else if (page === 2) page2();
  else if (page === 3) page3();
  else if (page === 4) page4();
  else if (page === 5) page5();
  else if (page === 6) page6();
  

}

// PAGE 1
function page1() {
  textSize(24);
  textAlign(CENTER);
  fill(0);
  text("Ponder with me.", width / 2, 400);
}

// PAGE 2
function page2() {
  textSize(30);
  textAlign(CENTER);
  fill(0);
  text("Pick a pane!", width / 2, 50);

  // Draw panes
  for (let pane of panes) {
    fill('#b1e4f4');
    stroke(0);
    rect(pane.x, pane.y, pane.w, pane.h);
    fill(0);
    textSize(16);
    textAlign(CENTER, CENTER);
    text(pane.label, pane.x + pane.w / 2, pane.y + pane.h / 2);
  }
}

// PAGE 3 whale car wash and bread
function page3() {
 
  textSize(24);
  textAlign(CENTER);
  fill(0);
  image(img2, 0, 0, width, height);

  // Update bread position
  breadx += breadxSpeed;
  bready += breadySpeed;

  if (breadx < 0 || breadx > width - 100) breadxSpeed *= -1;
  if (bready < 0 || bready > height - 100) breadySpeed *= -1;

  image(img4, breadx, bready, 300, 300);


  // --- bag movement ---
  bagx += bagxSpeed;
  bagy += bagySpeed;

  if (bagx < 0 || bagx > width - 100) bagxSpeed *= -1;
  if (bagy < 0 || bagy > height - 100) bagySpeed *= -1;

  image(img3, bagx, bagy, 200, 200);


  // --- bunch movement ---
  bunchx += bunchxSpeed;
  bunchy += bunchySpeed;

  if (bunchx < 0 || bunchx > width - 200) bunchxSpeed *= -1;
  if (bunchy < 0 || bunchy > height - 200) bunchySpeed *= -1;

  image(img5, bunchx, bunchy, 270, 270);

}

// PAGE 4 STRONG MAN
function page4() {
  image(img, 0, 0, width, height);
  fill(0);
  textAlign(CENTER);
  textSize(24);
  text("IS HE COOL? Y OR N", width / 2, height - 30);

  if (song && !song.isPlaying()) {
    song.play();
  }
}

// PAGE 5 VIDEO FUNNNNNN
function page5() {
 background(220, 55,100,50);
  image(img6, 0, 0, width, height);
  image(video, 10, 10);
  image(video2, 430, 330);
}

// PAGE 6 OZ COR

function page6() {


 background(0);
  image(img7, 0, 0, width, height);
  textSize(200);
  text("🌽", x, y);
 
  x += xSpeed;
  y += ySpeed;
  
  if (x < 0 || x > width) xSpeed *= -2;
  if (y < 0 || y > height) ySpeed *= -2;

}

// --- Handle clicks on panes (Page 2) ---
function mousePressed() {
  if (page === 2) {
    for (let pane of panes) {
      if (
        mouseX > pane.x &&
        mouseX < pane.x + pane.w &&
        mouseY > pane.y &&
        mouseY < pane.y + pane.h
      ) {
        console.log("Clicked:", pane.label);
        pane.action();
      }
    }
  }
}

function keyPressed() {
  // Play music only once (don't pause or restart it)
  if (key === 'Y'|| key === "y" || key === "N" ||key === "n" ) {
    if (!song.isPlaying()) {
      song.play();
    }
  }
}
// --- Main button handler ---
function changePage() {
  page++;
  if (page > 6) page = 1;

  if (page === 1) mainButton.html("Alright, cool");
  else if (page === 2) mainButton.html("Next");
  else if (page === 6) mainButton.html("Back to Start");
}
