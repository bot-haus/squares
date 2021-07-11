let a = 0;
let b = 0;
let spacing = 20;
let cols = 39;
let rows = 24;
let skeins = 5;
let increment = 0.18;

function setup() {
  createCanvas(480, 780, SVG); //Create SVG canvas
  background(0);
}

function draw() {
  //get the random number
  //let yarn = random(skeins);

  //get a noise value
  noiseSeed(random(10000));
  let xOff = 0;

  for (let x = 0; x < width; x++) {
    let yOff = 0;

    xOff += increment;

    for (let y = 0; y < height; y++) {
      yOff += increment;

      const noisy = noise(xOff, yOff); //  noise
      let yarn = noisy;//*(random(10));
      //let yarn = random(4);
      //select yarn color based on random number
      if (yarn <= 0.25) {
        fill(0, 153, 153); //teal
      } else if (yarn > 0.25 && yarn <= 0.50) {
        fill(208, 173, 60); //golden
      } else if (yarn > 0.50 && yarn <= 0.75) {
        fill(255, 255, 255); //white
      } else if (yarn > 0.75 && yarn <= 1.5) {
        fill(192, 192, 192); //grey
      } else if (yarn > 4 ) {
        fill(0, 0, 0); //black
      }
      stroke(0);
      rect(a, b, spacing, spacing);
      a = a + spacing;
      if (a > height) {
        a = 0;
        b = b + spacing;
      }
    }
  }
  if (keyCode === LEFT_ARROW) {
  save("mySVG.svg");
  print("saved svg");
  noLoop();
}
}
