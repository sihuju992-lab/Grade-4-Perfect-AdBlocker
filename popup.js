if (document.querySelector('.ad-showing') || document.querySelector('.ad-mode')) {
  video.playbackRate = 3.0;
  video.currentTime = video.duration;
  chrome.storage.local.get(['blockedCount'], (result) => {
    let currentCount = result.blockedCount || 0;
    chrome.storage.local.set({ blockedCount: currentCount + 1 });
  });
}
