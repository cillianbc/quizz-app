$(document).ready(function() {
  questions =[
  {
    question:"Question #1: A regulation volleyball game is played to ____ points, but you must win by 2 points.",
    choices : [23,21,19,25],
    fact:"<h3>Did you Know</h3>In US College volleyball the game is played to 30 points",
    correct:3
  },
  {
    question:"Question #2: What is it called when you step on or over the line while serving?",
    choices:["Side out","Foot fault","Let","Net violation",],
    fact:"<h3>Did you Know</h3>Volleyball is one of the most popular sports in the world",
    correct:1
  },
  {
    question:"Question #3: What is a type of pass where the hands are clenched together and contact is made between the wrists and elbows?",
    choices:["Set","Serve","Forearm Pass","Overhead Pass"],
    fact:"<h3>Did you Know</h3>The setter is the most specialised position on the court",
    correct:2
  },
  {
    question:"Question #4 : If a player hits the ball twice consecutively, it is called what?",
    choices:["Double Hit","Attack","Fault","New Violation"],
    fact:"<h3>Did you Know</h3>The indoor court is 9m x 9m, outdoor beach courts are 8m x 8m",
    correct:0
  }
]

  var numberCorrect = 0;
  var currentQuestion = 0;


  var newQuestion = function(){
    return '<span class="question">'+questions[currentQuestion].question+'</span><br><div id="answer_holder"><ul class="answers"><li><input type="radio" name="option" class="option" value="0"><span class="answer">'+" "+questions[currentQuestion].choices[0]+'</span><br></li><li><input type="radio" name="option" class="option" value="1"><span class="answer">'+" "+questions[currentQuestion].choices[1]+'</span><br></li><li><input type="radio" name="option" class="option" value="2"><span class="answer">'+" "+questions[currentQuestion].choices[2]+'</span><br></li><li><input type="radio" name="option" class="option" value="3"><span class="answer">'+" "+questions[currentQuestion].choices[3]+'</span><br></div><div id="button_holder"><input type="button" id="submit" value="Submit Answer"><span id="hint"></span><input type="button" id="retry_button" value="Try Again!"></div>';
};


  $("#question_wrapper").on("click", "#submit", function () {
    progress();
    currentQuestion++;
    nextQuestion();
  });

  $("#question_wrapper").on("click", "#retry_button", function () {
    numberCorrect = 0;
    currentQuestion = 0;
    $("#progress").text("0% complete");
    $("#question_wrapper").html(newQuestion(currentQuestion));
    $('#fact_holder').hide();
    });



  var progress = function(){
    var answer = $("input[type='radio']:checked").val();
    if (answer == questions[currentQuestion].correct){
      numberCorrect ++;
  }
    if (numberCorrect == 1) {
      $("#progress").html("<span class='progress'>25%</span>");
  }
    else if (numberCorrect == 2) {
      $("#progress").html("<span class='progress'>50%</span>");
  }
    else if (numberCorrect == 3) {
      $("#progress").html("<span class='progress'>75%</span>");
  }
    else if (numberCorrect == 4) {
      $("#progress").html("<span class='progress'>100%</span>");
  }
};

  function nextQuestion(){
    if (currentQuestion < 4){
      $(".question").remove();
      $("#answer_holder input").remove();
      $("#answer_holder span").remove();
      $("#fact").hide();
      $("#question_wrapper").html(newQuestion(currentQuestion));
      $("#fact_holder").addClass("fact").html(questions[currentQuestion-1].fact);
      }
    else {
      $(".question").remove();
      $("#answer_holder input").remove();
      $("#answer_holder span").remove();
      $("#submit").css("display", "none");
      $("#retry_button").css("display", "inline");
      $("#fact_holder").addClass("fact").html(questions[currentQuestion-1].fact);
    if (numberCorrect == 1) {
      var finalScore = '<span id="final">Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+' question.'
      $("#answer_holder").html(finalScore);
      }
    else {
      var finalScore = '<span>Congratulations on finishing the quiz!  You correctly answered '+numberCorrect+'questions. Enjoy this video <iframe width="560" height="315" src="https://www.youtube.com/embed/BV2We41j1nU" frameborder="0" allowfullscreen></iframe></span>'
      $("#answer_holder").addClass("final").html(finalScore);
          }
      };
  };
});
