

//this function will hide the button used to start the first video, and then reveal the first video
window.onload = function () {
    presentFirstVideo();
}
function presentFirstVideo() {
    document.getElementById("intialPage").setAttribute("hidden", "hidden");
    document.getElementById("videoSection").removeAttribute("hidden");
    document.getElementById("trainingSection").removeAttribute("hidden");
    document.getElementById("firstItem").classList.add("bold");
    //.innerHTML="<b> Video 1 - XXX </b>";
}

function presentKeyQuestions() {
    //hides video sextion
    document.getElementById("video1").pause();
    document.getElementById("videoSection").setAttribute("hidden", "hidden");
    document.getElementById("firstItem").classList.remove("bold");

    //reveal key questions
    document.getElementById("keyQuestionsItem").classList.add("bold");
    document.getElementById("keyQuestions").removeAttribute("hidden");
}

function presentFirstReading() {
    //hide key questions area
    document.getElementById("keyQuestionsItem").classList.remove("bold");
    document.getElementById("keyQuestions").setAttribute("hidden", "hidden");

    //this is for the first reading
    document.getElementById("firstReading").removeAttribute("hidden");
    document.getElementById("secondItem").classList.add("bold");

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

function presentThirdVideo(){

    document.getElementById("video2").setAttribute("hidden", "hidden");
    document.getElementById("video3").removeAttribute("hidden");
    document.getElementById("secondReading").setAttribute("hidden", "hidden");
    document.getElementById("videoSection").removeAttribute("hidden");
    document.getElementById("fifthItem").classList.add("bold");
    //innerHTML="<b>Video 2 - XXX </b>";
    document.getElementById("fourthItem").classList.remove("bold");
    //innerHTML="Reading 1 - XXX";
    document.getElementById("buttonVideo3").removeAttribute("hidden");
}

function presentSecondReading() {
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
    document.getElementById("video3").pause();
    //document.getElementById("secondReading").setAttribute("hidden", "hidden");
    document.getElementById("videoSection").setAttribute("hidden","hidden");
    document.getElementById("discussionArea").removeAttribute("hidden");
    document.getElementById("quiz").classList.add("bold");
    //innerHTML="<b>Video 2 - XXX </b>";
    document.getElementById("fifthItem").classList.remove("bold");
}

function submitQuiz() {
    document.getElementById("quizSection").setAttribute("hidden", "hidden");
    document.getElementById("resultsSection").removeAttribute("hidden");
    document.getElementById("userAnswerResult").innerHTML = document.getElementById("userAnswer").value;
}