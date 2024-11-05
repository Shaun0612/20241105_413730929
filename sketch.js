

let font;  //載入字型文字
let points = [];  //轉成點狀文字
let angle = 0
let r = 10
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
  //為載入在fonts資料夾內的NotoSansTC-Medium.ttf字型
  font = loadFont("fonts/NotoSansTC-Medium.ttf") 
}
//===================================================
function setup() {
  createCanvas(windowWidth, windowHeight);//創建一個視窗大小的畫布
angleMode(DEGREES)//設定三角函數的角度用0~360
points = font.textToPoints("Arknights", -500,0, 200, {
  sampleFactor:0.1
}); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小
}

function draw() {
  background(25,25,112);//背景
  noFill()//不填充顔色
  
  strokeWeight(2)//設定線條粗細
  rectMode(CENTER);//把方形中心設爲坐標點
  translate(0,0)
  for(let y = 0 ; y < height ; y += 100 ){
    for(let x = 0 ;x < width ; x += 100 ){
      stroke(mouseX,255,0)//設定線條顔色
      circle(x+50,y+50,100+mouseX/20)//設定小圓形大小以及位置
      stroke(mouseY,10,160)//設定線條顔色
      rect(x+50,y+50,100+mouseX/2)//設定方形大小以及位置
      stroke(255, mouseX%256,50)//設定線條顔色
      circle(x+100,y+100,50+mouseX/10)//設定大圓大小以及位置
    }
  }
  translate(width/2,height/2)//把原點設定在屏幕中心
  for (let i=0; i<points.length-1; i++) { 
    
    stroke(255,0,0)
    strokeWeight(10)
    line(points[i].x+r*sin(angle+i*10),
         points[i].y+r*sin(angle+i*10),
         points[i+1].x+r*sin(angle+i*10),
    points[i].y+r*sin(angle+i*10))
    //================================================
 } 
 angle =angle+10
}
