localStorage.setItem("redTeamScore", '0');
localStorage.setItem("blueTeamScore", '0');

setInterval(function() {
  box1 = document.getElementById("box1").checked;
  box2 = document.getElementById("box2").checked;
  box3 = document.getElementById("box3").checked;
  box4 = document.getElementById("box4").checked;
  box5 = document.getElementById("box5").checked;
  box6 = document.getElementById("box6").checked;
  box7 = document.getElementById("box7").checked;
  box8 = document.getElementById("box8").checked;
  box9 = document.getElementById("box9").checked;
  box10 = document.getElementById("box10").checked;

  if(box1 == true && box2 == true && box3 == true && box4 == true && box5 == true && box6 == true && box7 == true && box8 == true && box9 == true && box10 == true){
    localStorage.setItem("commenceCountDown", true);
    if (localStorage.getItem("countDownDate") == ''){
      localStorage.setItem("countDownDate", new Date(new Date().getTime()+(10*60*1000)));
    }
  }
  else{
    localStorage.setItem("commenceCountDown", false);
    localStorage.setItem("countDownDate", '');
  }

}, 1);

setInterval(function() {
  box1 = document.getElementById("box1").checked;
  box2 = document.getElementById("box2").checked;
  box3 = document.getElementById("box3").checked;
  box4 = document.getElementById("box4").checked;
  box5 = document.getElementById("box5").checked;
  box6 = document.getElementById("box6").checked;
  box7 = document.getElementById("box7").checked;
  box8 = document.getElementById("box8").checked;
  box9 = document.getElementById("box9").checked;
  box10 = document.getElementById("box10").checked;

  if(box1 == true){
    redTeamScore = parseInt(localStorage.getItem("redTeamScore"));
    redTeamScore += 5;
    localStorage.setItem("redTeamScore", redTeamScore);
  }
  else if(box1 == false){
    blueTeamScore = parseInt(localStorage.getItem("blueTeamScore"));
    blueTeamScore += 5;
    localStorage.setItem("blueTeamScore", blueTeamScore);
  }

  if(box2 == true){
    redTeamScore = parseInt(localStorage.getItem("redTeamScore"));
    redTeamScore += 5;
    localStorage.setItem("redTeamScore", redTeamScore);
  }
  else if(box2 == false){
    blueTeamScore = parseInt(localStorage.getItem("blueTeamScore"));
    blueTeamScore += 5;
    localStorage.setItem("blueTeamScore", blueTeamScore);
  }

  if(box3 == true){
    redTeamScore = parseInt(localStorage.getItem("redTeamScore"));
    redTeamScore += 5;
    localStorage.setItem("redTeamScore", redTeamScore);
  }
  else if(box3 == false){
    blueTeamScore = parseInt(localStorage.getItem("blueTeamScore"));
    blueTeamScore += 5;
    localStorage.setItem("blueTeamScore", blueTeamScore);
  }

  if(box4 == true){
    redTeamScore = parseInt(localStorage.getItem("redTeamScore"));
    redTeamScore += 5;
    localStorage.setItem("redTeamScore", redTeamScore);
  }
  else if(box4 == false){
    blueTeamScore = parseInt(localStorage.getItem("blueTeamScore"));
    blueTeamScore += 5;
    localStorage.setItem("blueTeamScore", blueTeamScore);
  }

  if(box5 == true){
    redTeamScore = parseInt(localStorage.getItem("redTeamScore"));
    redTeamScore += 5;
    localStorage.setItem("redTeamScore", redTeamScore);
  }
  else if(box5 == false){
    blueTeamScore = parseInt(localStorage.getItem("blueTeamScore"));
    blueTeamScore += 5;
    localStorage.setItem("blueTeamScore", blueTeamScore);
  }

  if(box6 == true){
    redTeamScore = parseInt(localStorage.getItem("redTeamScore"));
    redTeamScore += 5;
    localStorage.setItem("redTeamScore", redTeamScore);
  }
  else if(box6 == false){
    blueTeamScore = parseInt(localStorage.getItem("blueTeamScore"));
    blueTeamScore += 5;
    localStorage.setItem("blueTeamScore", blueTeamScore);
  }

  if(box7 == true){
    redTeamScore = parseInt(localStorage.getItem("redTeamScore"));
    redTeamScore += 5;
    localStorage.setItem("redTeamScore", redTeamScore);
  }
  else if(box7 == false){
    blueTeamScore = parseInt(localStorage.getItem("blueTeamScore"));
    blueTeamScore += 5;
    localStorage.setItem("blueTeamScore", blueTeamScore);
  }

  if(box8 == true){
    redTeamScore = parseInt(localStorage.getItem("redTeamScore"));
    redTeamScore += 5;
    localStorage.setItem("redTeamScore", redTeamScore);
  }
  else if(box8 == false){
    blueTeamScore = parseInt(localStorage.getItem("blueTeamScore"));
    blueTeamScore += 5;
    localStorage.setItem("blueTeamScore", blueTeamScore);
  }

  if(box9 == true){
    redTeamScore = parseInt(localStorage.getItem("redTeamScore"));
    redTeamScore += 5;
    localStorage.setItem("redTeamScore", redTeamScore);
  }
  else if(box9 == false){
    blueTeamScore = parseInt(localStorage.getItem("blueTeamScore"));
    blueTeamScore += 5;
    localStorage.setItem("blueTeamScore", blueTeamScore);
  }

  if(box10 == true){
    redTeamScore = parseInt(localStorage.getItem("redTeamScore"));
    redTeamScore += 10;
    localStorage.setItem("redTeamScore", redTeamScore);
  }
  else if(box10 == false){
    blueTeamScore = parseInt(localStorage.getItem("blueTeamScore"));
    blueTeamScore += 10;
    localStorage.setItem("blueTeamScore", blueTeamScore);
  }
}, 1000);