let current = [0,0]
let next = [0,10]
let angle = 0 //The angle of the next line respect the previous
let n = 100000 //Amount of numbers you want draw
let d = 2 //Size of the segments
let h = 1920 //Canvas Heigth
let w = 1200 //Canvas Width

let bounds = [0,0,0,0] // west,north,east,south
function setup() {
  createCanvas(w, h);
  colorMode(HSB, 360, 255, 255);
  noLoop();
}

function draw() {
  background(32); //Background Grey
  translate(1070,170) //Translate the starting point to fit the canvas
  for(let i = 0; i < n; i++){ //Loop that travels the numbers from 0 to n 
    if(math.isPrime(i)){ //Checking if a number is Prime
      angle = (angle + HALF_PI) % TWO_PI //If its prime then rotate the angle 90 degrees = PI/2 Radians
    }
    next[0] = current[0] + (d * math.cos(angle)) //If the angle is 360 or 180 then the line goes horizontal. cos(360) = 1;cos(180) = -1; cos(90)= cos(270) = 0
    next[1] = current[1] + (d * math.sin(angle)) //If the angle is 90 or 270 then the line goes horizontal. sin(90) = 1;sin(270) = -1; sin(180)= sin(360) = 0
    let h = map(i, 0, n, 0, 54); //This is used to generate the gradient. Checkout how works map functions here: 
    stroke(h, 255, 255); //Applying the current color
    line(current[0],current[1],next[0], next[1]) //Painting the current segment
    current[0] = next[0] //Updating the current  values with the new one.
    current[1] = next[1] ////Updating the current values with the new one.
  }
  }