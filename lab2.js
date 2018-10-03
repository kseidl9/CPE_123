var darkBlue, medBlue, ltBlue;
var manScale;

function setup() {
    createCanvas(540, 720);
	darkBlue = color(73,81,156);
	medBlue = color(73,143,212);
	ltBlue = color(93,159,218);
	noLoop();
}


function draw() {
	background(medBlue);
	manScale=1;
	setGradient(0,0,550,200,darkBlue,medBlue);
	setGradient(0,200,550,450,medBlue,ltBlue);
	cementThing();
	mountains();
	starsAndMoon();
	man(258,563);
}
function setGradient(x,y,w,h,c1,c2){
	for (var i = y; i <= y+h; i++) {
		var inter = map(i,y,y+h,0,1);
		var c = lerpColor(c1,c2,inter);
		stroke(c);
		line(x,i,x+w,i);
	}
}
function fillAndStroke(x,y,z){
        fill(x,y,z);
        stroke(x,y,z);
}
function grass(x,y,h,dir){
	fillAndStroke(0,125,77);	
	if ( dir > 0){
		beginShape();
			curveVertex(x-1,y);
			curveVertex(x-1,y);
			curveVertex(x,y-h+h/3);
			curveVertex(x+7,y-h);
			curveVertex(x+1,y-h+h/3);
			curveVertex(x,y);
			curveVertex(x,y);
		endShape(CLOSE);
	}else if ( dir < 0){
		beginShape();
			curveVertex(x+1,y);
			curveVertex(x+1,y);
			curveVertex(x,y-h+h/3);
			curveVertex(x-7,y-h);
			curveVertex(x-1,y-h+h/3);
			curveVertex(x,y);
			curveVertex(x,y);
		endShape(CLOSE);
	}
}
function cloud(x,y,w,h){
	fill(72,121,182,220);
	noStroke();
	arc(x,y,w/2,h,PI,0);	
	arc(x-w/3,y,w/3,h/3,PI,0);
	arc(x+w/4,y,w/3.5,h/2,PI,0);
	triangle(x+w/3,y,x+w*2/3,y,x+w/5,y-h*1/5);
}
function star(x,y,r1,r2,points){
	// code learned from p5 website //
	fillAndStroke(255,255,255);
	var angle = TWO_PI / points;
	var halfAngle = angle/2.0;
	beginShape();
	for (var i = 0; i < TWO_PI; i += angle) {
		var sx = x + cos(i) * r2;
		var sy = y + sin(i) * r2;
		vertex(sx,sy);
		sx = x + cos(i+halfAngle) * r1;
		sy = y + sin(i+halfAngle) * r1;
		vertex(sx,sy);
	}
	endShape(CLOSE);
}
function cementThing(){
	push();
		translate(10,22);
		fillAndStroke(128,176,187); // s h a d o w //
		quad(446,578,445,598,461,610,462,578);
		fillAndStroke(172,198,225); // h i g h l i g h t//
		quad(463,578,461,605,496,628,492,578);
		strokeWeight(3);
		fillAndStroke(135,112,58); // b r o w n //
		line(452,577,451,529);
		line(487,575,485,526);
		line(453,554,468,528);
		line(454,556,484,554);
		line(455,570,463,557);
		line(485,569,475,556);		
	pop();
}
function starsAndMoon(){
	// C L O U D //
	noStroke();
	fill(95,179,216,50);
	beginShape();
		curveVertex(2,57);
		curveVertex(2,57);
		curveVertex(28,65);
		curveVertex(41,103);
		curveVertex(60,107);
		curveVertex(67,116);
		curveVertex(87,113);
		curveVertex(99,122);
		curveVertex(112,120);
		curveVertex(133,128);
		curveVertex(140,146);
		curveVertex(138,167);
		curveVertex(151,192);
		curveVertex(101,171);
		curveVertex(46,146);
		curveVertex(3,115);
		curveVertex(3,115);
	endShape(CLOSE);
	fill(32,110,174,70);
	beginShape();
		curveVertex(4,117);
		curveVertex(4,117);
		curveVertex(20,124);
		curveVertex(26,133);
		curveVertex(55,126);
		curveVertex(86,131);
		curveVertex(120,149);
		curveVertex(146,185);
		curveVertex(159,198);
		curveVertex(172,221);
		curveVertex(206,227);
		curveVertex(226,241);
		curveVertex(248,247);
		curveVertex(254,272);
		curveVertex(281,282);
		curveVertex(292,302);
		curveVertex(278,314);
		curveVertex(265,320);
		curveVertex(203,302);
		curveVertex(167,277);
		curveVertex(139,260);
		curveVertex(105,256);
		curveVertex(70,233);
		curveVertex(55,191);
		curveVertex(73,184);
		curveVertex(57,157);
		curveVertex(35,154);
		curveVertex(3,133);
		curveVertex(3,133);
	endShape(CLOSE);
	fill(255,255,255);
    // M O O N //		
	beginShape();
		curveVertex(253,51);
		curveVertex(253,51);
		curveVertex(274,65);
		curveVertex(287,84);
		curveVertex(293,107);
		curveVertex(290,131);
		curveVertex(279,150);
		curveVertex(268,160);
		curveVertex(253,165);
		curveVertex(275,170);
		curveVertex(299,159);
		curveVertex(316,138);
		curveVertex(322,115);
		curveVertex(319,91);
		curveVertex(306,70);
		curveVertex(289,56);
		curveVertex(273,51);
		curveVertex(273,51);
	endShape();
    // S T A R S //
	star(220,25,8,15,15);
	star(367,522,6,9,10)
	star(470,10,3,4.5,7);
	star(443,135,1,8,8);
	star(398,210,6,9.5,10);
	ellipse(454,199,1.8);
	ellipse(471,211,1.4);
	ellipse(168,24,3.5);
	ellipse(125,17,2);
	ellipse(158,79,1.8);
	ellipse(86,42,3.5);
	ellipse(21,39,3);
	star(30,269,2,10,8);
	ellipse(101,222,4);
	ellipse(148,273,3.5);
	ellipse(196,301,2.5);
	ellipse(68,290,1);
	star(478,426,4,6,12);
	triangle(473,428,448,409,476,423);
	ellipse(483,140,8);
	ellipse(436,122,3.5);
	ellipse(306,30,5);
	ellipse(320,14,2.5);
	ellipse(340,65,5.1);
	ellipse(62,435,2);
	ellipse(77,443,.5);
	ellipse(133,452,2);
	ellipse(118,482,3.5);
	ellipse(183,466,3);
	ellipse(300,458,1);
	ellipse(324,514,.7);
	ellipse(401,436,2);
	ellipse(349,409,.5);
	ellipse(331,377,2);
	ellipse(530,373,2);
	ellipse(538,563,2);
	ellipse(533,585,1);
    // U F O //
	ellipse(59,54,13,15);;
	beginShape();
		curveVertex(42,63);
		curveVertex(42,63);
		curveVertex(54,68);
		curveVertex(67,67);
		curveVertex(78,59);
		curveVertex(60,54);
		curveVertex(60,54);
	endShape(CLOSE);
	cloud(140,423,225,133);	
	cloud(0,538,225,190);
}
function mountains(){
	noStroke();
	fill(145,157,82);
	beginShape();
		vertex(0,630);
		vertex(100,600);
		vertex(155,590);
		vertex(230,565);
		vertex(288,565);
		vertex(485,630);
		vertex(550,680);
		vertex(550,750);
		vertex(0,750);
		vertex(0,550);
	endShape();	
	fill(81,68,22,70);
	triangle(0,629,100,599,0,646);
    // M O U N T A I N //	
	beginShape();
		vertex(13,365);
		vertex(108,363);
		vertex(427,356);
		vertex(466,361);
		vertex(499,358);
		vertex(528,366);
		vertex(538,363);
		vertex(540,251);
		vertex(517,260);
		vertex(503,276);
		vertex(483,292);
		vertex(455,288);
		vertex(438,284);
		vertex(413,290);
		vertex(379,300);
		vertex(352,302);
		vertex(336,305);
		vertex(324,314);
		vertex(290,315);
		vertex(264,325);
		vertex(248,336);
		vertex(233,322);
		vertex(221,320);
		vertex(215,298);
		vertex(203,311);
		vertex(182,314);
		vertex(162,316);
		vertex(144,317);
		vertex(132,312);
		vertex(123,318);
		vertex(109,321);
		vertex(89,324);
		vertex(85,336);
		vertex(68,345);
		vertex(50,352);
		vertex(13,365);
	endShape(CLOSE);
    // R O C K S //
    fill(112,84,60,125);
	beginShape();
		vertex(150,576);
		vertex(151,573);
		vertex(185,558);
		vertex(188,560);
		vertex(212,590);
		vertex(208,622);
		vertex(153,619);
		vertex(150,52,72);
	endShape();
       
	ellipse(291,570,15,11);
	ellipse(239,599,10,18);
	ellipse(417,630,45);

	quad(94,674,86,688,114,690,108,673);
	quad(162,620,158,633,172,638,173,623);	
	beginShape();
		vertex(246,653);
		vertex(257,640);
		vertex(310,619);
		vertex(329,620);
		vertex(352,638);
		vertex(363,688);
		vertex(313,718);
		vertex(264,719);
		vertex(246,653);
	endShape(CLOSE);

	fill(119,88,50,195);
	beginShape();
		vertex(3,680);
		vertex(19,674);
		vertex(43,673);
		vertex(60,661);
		vertex(63,636);
		vertex(49,612);
		vertex(38,609);
		vertex(22,601);
		vertex(12,590);
		vertex(1,595);
		vertex(0,680);
	endShape(CLOSE);

    // G R A S S //
	grass(71,720,48,1)
	grass(373,720,27,1);
	grass(519,697,39,1);
	grass(222,720,38,-1);
	grass(229,709,32,-1);
	grass(70,720,41,-1);
	grass(20,718,17,-1);
	grass(135,718,17,-1);
	grass(160,718,25,-1);
	grass(433,704,32,-1);
	grass(502,693,34,-1);
}

function man(x,y){
    translate(x,y)
    scale(manScale);
    // P A N T S //
	fillAndStroke(255,143,69); // o r a n g e //	
	beginShape();
		vertex(-2,0);
		vertex(5,0);
		vertex(9,-14);
		vertex(14,0);
		vertex(23,0);
		vertex(19,-22);
		vertex(-1,-23);
		vertex(-2,0);
	endShape(CLOSE);
    // H E A D //
	push();
		fillAndStroke(255,231,215); // s k i n //
		translate(12,-72);
		ellipse(-2.7,2,5,6);
		rotate(radians(25));
		ellipse(0,0,8.5,3.5);
	pop();
	push();
		fillAndStroke(135,112,58);// b r o w n //
		translate(9,-70);
		line(-5,.5,1,.5);
		line(2,-1.5,6,6);
	pop();
        fillAndStroke(224,212,65); // y e l l o w //
	push();
		translate(9,-75);
		rotate(radians(150));
		ellipse(0,0,14,9);
	pop();
    // C O A T //
	beginShape();
		vertex(4,-68);
		vertex(-6,-54);
		vertex(-8,-37);
		vertex(-5,-33);
		vertex(-6,-9);
		vertex(5,-8);
		vertex(7,-18);
		vertex(11,-9);
		vertex(24,-9);
		vertex(23,-27);
		vertex(30,-26);
		vertex(24,-56);
		vertex(14,-67);
		vertex(6,-68);
	endShape(CLOSE);	
    // R O P E //
	fillAndStroke(135,112,58);
	beginShape();
		curveVertex(22,-60);
		curveVertex(22,-60);
		curveVertex(15,-46);
		curveVertex(22,-31);
		curveVertex(20,-50);
		curveVertex(21.5,-58);
	endShape();			
}
