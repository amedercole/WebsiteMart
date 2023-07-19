/* 
this is the section for the carousel 
it rotates every 5 seconds
*/
$(document).ready(function () {
    $('#myCarousel').carousel({
        interval: 5000 // 5 seconds
    })
});


function expandLectureSelection(){
    document.getElementById("expandLectureButton").setAttribute("hidden","hidden");
    document.getElementById("closeLectureExpansion").removeAttribute("hidden");
}

function closeLectureExpansion(){
    document.getElementById("expandLectureButton").removeAttribute("hidden");
    document.getElementById("closeLectureExpansion").setAttribute("hidden","hidden");
}