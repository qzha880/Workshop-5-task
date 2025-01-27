let table;
let study;
let sleep;
let social;
let music;
let other;

function preload(){
  table = loadTable('timeUse.csv', 'csv', 'header');
  study = loadImage('images/Study.jpg');
  sleep = loadImage('images/Sleep.jpg');
  social = loadImage('images/Social.jpg');
  music = loadImage('images/Music.jpg');
  other = loadImage('images/Other.jpg');
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  frameRate(1);
}

function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}

function dayLables(){
  for(x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let days = row.get("Days");
    fill(0);
    text(days, 30 + x * 120, 350);
  }
}

function daysStudyTime(){
  for(x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let studyTime = row.get("Study");
    for (y = 0; y < studyTime; y++){
      image(study, 30 + x * 120, 300 - y * 25, 20, 20);
    }
  }
}

function daysStudyTime1(){
  for(x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let studyTime = row.get("Study");
    for (y = 0; y < studyTime; y++){
      rect(50, 500, 50, 50)
      fill(studyTime * 25);
    }
  }
}

function daysSleepTime(){
  for(x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let sleepTime = row.get("Sleep");
    for (y = 0; y < sleepTime; y++){
      image(sleep, 50 + x * 120, 300 - y * 25, 20, 20);
    }
  }
}

function daysSleepTime1(){
  for(x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let sleepTime = row.get("Sleep");
    for (y = 0; y < sleepTime; y++){
      rect(100, 500, 50, 50)
      fill(sleepTime * 25);
    }
  }
}

function daysSocialTime(){
  for(x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let socialTime = row.get("Social media");
    for (y = 0; y < socialTime; y++){
      image(social, 70 + x * 120, 300 - y * 25, 20, 20);
    }
  }
}

function daysSocialTime1(){
  for(x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let socialTime = row.get("Social media");
    for (y = 0; y < socialTime; y++){
      rect(150, 500, 50, 50)
      fill(socialTime * 25);
    }
  }
}

function daysMusicTime(){
  for(x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let musicTime = row.get("Music");
    for (y = 0; y < musicTime; y++){
      image(music, 90 + x * 120, 300 - y * 25, 20, 20);
    }
  }
}

function daysMusicTime1(){
  for(x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let musicTime = row.get("Music");
    for (y = 0; y < musicTime; y++){
      rect(200, 500, 50, 50)
      fill(musicTime * 25);
    }
  }
}

function daysOtherTime(){
  for(x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let otherTime = row.get("Other");
    for (y = 0; y < otherTime; y++){
      image(other, 110 + x * 120, 300 - y * 25, 20, 20);
    }
  }
}

function daysOtherTime1(){
  for(x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let otherTime = row.get("Other");
    for (y = 0; y < otherTime; y++){
      rect(250, 500, 50, 50)
      fill(otherTime * 25);
    }
  }
}

function draw() {
  background(220);
  dayLables();
  daysStudyTime();
  daysStudyTime1();
  daysSleepTime();
  daysSleepTime1();
  daysSocialTime();
  daysSocialTime1();
  daysMusicTime();
  daysMusicTime1();
  daysOtherTime();
  daysOtherTime1();

  fill(0);
  text('Days', 400, 380);
  text('Study', 50, 480);
  text('Sleep', 100, 480);
  text('Social', 150, 480);
  text('Music', 200, 480);
  text('Other', 250, 480);
  text('(light - long time, dark - short time)', 80, 580);

  image(other, windowWidth-100, windowHeight-50, 50, 50);
  text('Other time', windowWidth-200, windowHeight-50);
  image(music, windowWidth-100, windowHeight-100, 50, 50);
  text('Music time', windowWidth-200, windowHeight-100);
  image(social, windowWidth-100, windowHeight-150, 50, 50);
  text('Social time', windowWidth-200, windowHeight-150);
  image(sleep, windowWidth-100, windowHeight-200, 50, 50);
  text('Sleep time', windowWidth-200, windowHeight-200);
  image(study, windowWidth-100, windowHeight-250, 50, 50);
  text('Study time', windowWidth-200, windowHeight-250);

  noFill();
  square(350, 420, 300);
  studySquares();
  sleepSquares();
  socialSquares();
  musicSquares();
  otherSquares();  

  fill(0, 0, 255);
  rect(windowWidth-70, windowHeight-75, 50, 50);
  fill(255, 0, 0);
  rect(windowWidth-70, windowHeight-125, 50, 50);
  fill(0, 255, 0);
  rect(windowWidth-70, windowHeight-175, 50, 50);
  fill(0);
  rect(windowWidth-70, windowHeight-225, 50, 50);
  fill(255, 255, 0);
  rect(windowWidth-70, windowHeight-275, 50, 50);
  fill(0);
  text('(number of the squares is the number of how many hours spend)', 350, 740);
  text('(also the sizes of the squres represent the amount of hours spend)', 350, 760);
}

function studySquares(){
  for(x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let studyTime = row.get("Study");
    for (y = 0; y < studyTime; y++){
      fill(255, 255, 0);
      square(random(360, 640), random(430, 710), studyTime);
    }
  }
}

function sleepSquares(){
  for(x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let sleepTime = row.get("Sleep");
    for (y = 0; y < sleepTime; y++){
      fill(0);
      square(random(360, 640), random(430, 710), sleepTime);
    }
  }
}

function socialSquares(){
  for(x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let socialTime = row.get("Social media");
    for (y = 0; y < socialTime; y++){
      fill(0, 255, 0);
      square(random(360, 640), random(430, 710), socialTime);
    }
  }
}

function musicSquares(){
  for(x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let musicTime = row.get("Music");
    for (y = 0; y < musicTime; y++){
      fill(255, 0, 0);
      square(random(360, 640), random(430, 710), musicTime);
    }
  }
}

function otherSquares(){
  for(x = 0; x < table.getRowCount(); x++){
    let row = table.getRow(x);
    let otherTime = row.get("Other");
    for (y = 0; y < otherTime; y++){
      fill(0, 0, 255);
      square(random(360, 640), random(430, 710), otherTime);
    }
  }
}
