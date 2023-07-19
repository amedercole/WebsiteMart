document.addEventListener("DOMContentLoaded", function() {
    // On button click, populate video src attribute with video path
    document.querySelectorAll('.video-btn').forEach(function(videoBtn) {
      videoBtn.addEventListener('click', function() {
        var video = this.getAttribute('data-video');
        var videoTag = document.getElementById('video');
        videoTag.src = video;
        //console.log(video);
        //console.log(videoTag.src);
      });
    });
  
    // When modal is hidden, remove video src attribute to stop video
    var videoModal = document.getElementById('historyVideo');
    videoModal.addEventListener('hidden.bs.modal', function() {
      var videoTag = document.getElementById('video');
      videoTag.pause();
      videoTag.src = '';
    });
  });