





// Update the count down every 1 second
var x = setInterval(function() {


  if (localStorage.getItem("commenceCountDown") == 'true'){

    countDownDate = Date.parse(localStorage.getItem("countDownDate"));

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var milliseconds = Math.floor((distance % 1000))

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s " + milliseconds + "ms ";

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "You've Been Nuked!!!!";
    }
  }

  else{
    document.getElementById("demo").innerHTML = ""
  }

  redTeamScore = localStorage.getItem("redTeamScore");
  blueTeamScore = localStorage.getItem("blueTeamScore");

  document.getElementById("bscore").innerHTML = blueTeamScore;
  document.getElementById("rscore").innerHTML = redTeamScore;

  
}, 1);

