

//this function will hide the button used to start the first video, and then reveal the first video
window.onload = function(){
    presentFirstVideo();
}
function presentFirstVideo() {
    document.getElementById("intialPage").setAttribute("hidden", "hidden");
    document.getElementById("videoSection").removeAttribute("hidden");
    document.getElementById("trainingSection").removeAttribute("hidden");
    document.getElementById("firstItem").classList.add("bold");
    //.innerHTML="<b> Video 1 - XXX </b>";
}

function presentFirstReading() {
    document.getElementById("video1").pause();
    document.getElementById("videoSection").setAttribute("hidden", "hidden");
    document.getElementById("firstReading").removeAttribute("hidden");
    document.getElementById("firstItem").classList.remove("bold");
    //innerHTML="Video 1 - XXX";
    document.getElementById("secondItem").classList.add("bold");
    //innerHTML="<b>Reading 1 - XXX </b>";
    document.getElementById("buttonVideo1").setAttribute("hidden", "hidden");
}

function presentSecondVideo() {
    document.getElementById("video1").setAttribute("hidden", "hidden");
    document.getElementById("video2").removeAttribute("hidden");
    document.getElementById("firstReading").setAttribute("hidden", "hidden");
    document.getElementById("videoSection").removeAttribute("hidden");
    document.getElementById("thirdItem").classList.add("bold");
    //innerHTML="<b>Video 2 - XXX </b>";
    document.getElementById("secondItem").classList.remove("bold");
    //innerHTML="Reading 1 - XXX";
    document.getElementById("buttonVideo2").removeAttribute("hidden");

}

function presentSecondReading(){
    document.getElementById("video2").pause();
    document.getElementById("videoSection").setAttribute("hidden", "hidden");
    document.getElementById("secondReading").removeAttribute("hidden");
    document.getElementById("thirdItem").classList.remove("bold");
    //innerHTML="Video 1 - XXX";
    document.getElementById("fourthItem").classList.add("bold");
    //innerHTML="<b>Reading 1 - XXX </b>";
    document.getElementById("buttonVideo2").setAttribute("hidden", "hidden");
}

function presentQuiz() {
    document.getElementById("secondReading").setAttribute("hidden", "hidden");
    document.getElementById("discussionArea").removeAttribute("hidden");
    document.getElementById("quiz").classList.add("bold");
    //innerHTML="<b>Video 2 - XXX </b>";
    document.getElementById("fourthItem").classList.remove("bold");
}

function submitQuiz(){
    document.getElementById("quizSection").setAttribute("hidden","hidden");
    document.getElementById("resultsSection").removeAttribute("hidden");
    document.getElementById("userAnswerResult").innerHTML = document.getElementById("userAnswer").value;
}

function displayAnswer1() {
    if (document.getElementById('option-11').checked) {
      document.getElementById('block-11').style.border = '3px solid limegreen'
      document.getElementById('result-11').style.color = 'limegreen'
      document.getElementById('result-11').innerHTML = 'Correct!'
    }
    if (document.getElementById('option-12').checked) {
      document.getElementById('block-12').style.border = '3px solid red'
      document.getElementById('result-12').style.color = 'red'
      document.getElementById('result-12').innerHTML = 'Incorrect!'
      
    }
    if (document.getElementById('option-13').checked) {
      document.getElementById('block-13').style.border = '3px solid red'
      document.getElementById('result-13').style.color = 'red'
      document.getElementById('result-13').innerHTML = 'Incorrect!'
      
    }
    if (document.getElementById('option-14').checked) {
      document.getElementById('block-14').style.border = '3px solid red'
      document.getElementById('result-14').style.color = 'red'
      document.getElementById('result-14').innerHTML = 'Incorrect!'
      
    }
  }
  // the functon displays the link to the correct answer

  function showCorrectAnswer2() {
    document.getElementById('block-11').style.border = '3px solid limegreen'
    document.getElementById('result-11').style.color = 'limegreen'
    document.getElementById('result-11').innerHTML = 'Correct!'
    }