var counter = 0;
var counter2 = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	
	rSlider = createSlider(0, 255, 100);
  rSlider.position(20, 20);
  rSlider.size(100,10);
  
  gSlider = createSlider(0, 255, 100);
  gSlider.position(20, 50);
  gSlider.size(100,10);
  
  bSlider = createSlider(0, 255, 100);
  bSlider.position(20, 80);
  bSlider.size(100,10);
	
	cSlider = createSlider(0, 255, 100);
  cSlider.position(20, 110);
  cSlider.size(100,10);
	
	wSlider = createSlider(0, 255, 100);
  wSlider.position(20, 140);
  wSlider.size(100,10);
	
	hSlider = createSlider(0, 255, 100);
  hSlider.position(20, 170);
  hSlider.size(100,10);
	
	aSlider = createSlider(0, 255, 100);
  aSlider.position(20, 200);
  aSlider.size(100,10);
	
	bSlider = createSlider(0, 255, 100);
  bSlider.position(20, 230);
  bSlider.size(100,10);
	
	zSlider = createSlider(0, 255, 100);
  zSlider.position(20, 260);
  zSlider.size(100,10);
} 

function draw() {
	counter = (counter + 10)%360;
	counter2 = (counter2 +11)%360;
	angleMode(DEGREES);
	var CentX = 650;
	var CentY = 300;
	var Diameter = 100;
	fill(255)

	var rNumber = rSlider.value();
	var gNumber = gSlider.value();
	var bNumber = bSlider.value();
	var cNumber = cSlider.value();
	var wNumber = wSlider.value();
	var hNumber = hSlider.value();
	var aNumber = aSlider.value();
	var bNumber = bSlider.value();
	var zNumber = zSlider.value();
	
	background(cNumber,wNumber,hNumber)
	
	noStroke();
	for (var W = 0; W < windowWidth; W = W + 30) {
		for (var H = 0; H <windowHeight; H = H + 30){
			fill(rNumber,gNumber*(H/windowHeight),bNumber)
			ellipse(W, H, 30, 30);

			fill(255);
			var radius = 50; 
			
	for (var Dscale = 1; Dscale < 10; Dscale = Dscale +0.5) {
		for (var Theta = 4; Theta <360; Theta = Theta +30){
			var Xp = CentX+Dscale*Diameter*cos(Theta+(counter)%360);
			var Yp = CentY+Dscale*Diameter*sin(Theta+(counter2)%360);
			fill(aNumber,bNumber*(Theta/windowHeight),zNumber)
			rect(Xp,Yp , 20, 20);
		}
		}
	}
		}
	}
