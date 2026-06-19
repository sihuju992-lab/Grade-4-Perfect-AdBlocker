setInterval(() => {
  const video = document.querySelector('video');
  
  if (video) {
    const isAd = document.querySelector('.ad-showing') || document.querySelector('.ad-mode');
    
    if (isAd) {
      video.playbackRate = 3.0;
    } else if (video.playbackRate === 3.0) {
      video.playbackRate = 1.0;
    }
  }
}, 500);

