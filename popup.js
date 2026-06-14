// 새로고침 버튼
document.getElementById('reloadBtn').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.reload(tabs[0].id);
    window.close();
  });
});

// 정보 버튼
document.getElementById('infoBtn').addEventListener('click', () => {
  alert('Grade 4 Perfect AdBlocker v1.0.1\n\n완벽한 광고 차단 엔진!\n\n10개의 광고 필터로 모든 광고를 차단합니다.');
});

console.log('Popup script loaded successfully');
