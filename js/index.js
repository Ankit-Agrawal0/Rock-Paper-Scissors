var computer;
var user;
var userScore = 0;
var computerScore = 0;

$(document).on('click', '#rock', function() {
  user = "Rock";
  console.log("Rock");
  var random = Math.random();
  if (random < 0.3333) {
    computer = "Rock";
  } else if (random < 0.6666) {
    computer = "Paper";
  } else {
    computer = "Scissors";
  }
  console.log("You: "+ user, "Computer: " +computer);
  
  calculate();
  $("#you").html(userScore);
  $("#computer").html(computerScore);
  $("#u").attr("src", "Images/rocks.png");
  comp();
});

$(document).on('click', '#paper', function() {
  user = "Paper";
  console.log("Paper");
  var random = Math.random();
  if (random < 0.3333) {
    computer = "Rock";
  } else if (random < 0.6666) {
    computer = "Paper";
  } else {
    computer = "Scissors";
  }
  console.log("You: "+ user, "Computer: " +computer);
  calculate();
  $("#you").html(userScore);
  $("#computer").html(computerScore);
  $("#u").attr("src", "Images/paper.jpg");
  comp();
});

$(document).on('click', '#scissors', function() {
  user = "Scissors";
  console.log("Scissors");

  var random = Math.random();
  if (random < 0.3333) {
    computer = "Rock";
  } else if (random < 0.6666) {
    computer = "Paper";
  } else {
    computer = "Scissors";
  }
  console.log("You: "+ user, "Computer: " +computer);
  calculate();
  $("#you").html(userScore);
  $("#computer").html(computerScore);
  console.log(userScore);
  $("#u").attr("src", "Images/scissor.jpg");
  comp();
});

function calculate() {
  var result = $("#result");
  if (computer === user) {
    console.log("Tie");
    result.html("Tie!");
  } else if (user === "Rock") {
    if (computer === "Paper") {
      result.html("You Lost \n"+ computer+ " Covers "+ user);
      computerScore = computerScore+1;
      console.log("You Lost "+computer+ " Covers "+ user);
    } else {
      result.html("You Won! " + user+ " Smashes "+ computer);
      userScore = userScore+1;
      console.log("You Won! "+ user+ " Smashes "+ computer);
    }
  } else if (user === "Paper") {
    if (computer === "Scissors") {
      result.html("You Lost. "+ computer+ " Cut "+ user);
      computerScore = computerScore+1;
      console.log("You Lost. "+ computer+ " Cut "+ user);
    } else {
      result.html("You Won! "+ user+ " Covers "+ computer);
      userScore = userScore+1;
      console.log("You Won! "+ user+ " Covers "+ computer);
    }
  } else if (user === "Scissors") {
    if (computer === "Rock") {
      result.html("You Lost. "+ computer+ " Smashes "+ user);
      computerScore = computerScore+1;
      console.log("You Lost. "+ computer  + " Smashes "+ user);
    } else {
      result.html("You Won! "+ user+ " Cut "+ computer);
      userScore = userScore+1;
      console.log("You Won! " + user+ " Cut "+ computer);
    }
  }
}
function comp(){
  if (computer==="Rock") {
    $("#c").attr("src", "Images/rocks.png");
  }else if (computer==="Paper") {
    $("#c").attr("src", "Images/paper.jpg");
  }else{
    $("#c").attr("src", "Images/scissor.jpg");
  }
}
