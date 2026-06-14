# 🚫 Grade 4 Perfect AdBlocker

Chrome 확장프로그램 기반의 강력한 광고 차단 도구입니다.

## ✨ 주요 기능

- ✅ **Google 광고 차단** - Google Ads, AdSense 완벽 차단
- ✅ **Facebook 광고 차단** - 페이스북의 모든 광고 차단
- ✅ **배너 광고 차단** - 모든 배너 형태의 광고 제거
- ✅ **팝업 광고 차단** - 팝업 및 모달 광고 자동 닫기
- ✅ **추적 스크립트 차단** - 광고 추적 및 분석 스크립트 차단
- ✅ **Manifest V3** - 최신 Chrome 확장프로그램 표준

## 🚀 설치 방법

1. 이 저장소를 클론하거나 다운로드합니다
```bash
git clone https://github.com/sihuju992-lab/Grade-4-Perfect-AdBlocker.git
```

2. Chrome 브라우저를 열고 `chrome://extensions/`로 이동합니다

3. 우측 상단의 **개발자 모드** 토글을 ON합니다

4. **압축해제된 확장프로그램 로드** 버튼을 클릭합니다

5. 이 프로젝트 폴더를 선택합니다

## 📋 파일 구조

```
Grade-4-Perfect-AdBlocker/
├── manifest.json        # 확장프로그램 설정 파일
├── background.js        # 백그라운드 서비스 워커
├── content.js          # 페이지 광고 제거 스크립트
├── popup.html          # 팝업 UI
├── popup.js            # 팝업 기능
├── popup.css           # 팝업 스타일
├── images/             # 아이콘 이미지
└── README.md           # 이 파일
```

## 🎯 작동 원리

### 1. Manifest V3 (최신 표준)
- 최신 Chrome 확장프로그램 API 사용
- 안전하고 높은 성능

### 2. Content Script
- 웹페이지의 DOM을 실시간 모니터링
- 광고 요소를 감지하고 제거
- 새로 추가되는 광고도 자동 차단

### 3. Background Service Worker
- 차단된 광고 통계 관리
- 설정 저장 및 관리

### 4. Popup Dashboard
- 차단된 광고 수 표시
- 빠른 설정 접근
- 사용자 친화적 인터페이스

## 🔧 광고 필터 규칙

다음 광고 네트워크를 지원합니다:

- Google Ads / AdSense / Doubleclick
- Facebook Ads
- 일반 배너 광고
- 팝업 및 모달 광고
- 광고 추적 스크립트

## 📊 통계

확장프로그램이 실시간으로 차단된 광고 개수를 집계합니다:
- 팝업을 열면 언제든지 확인 가능
- 카운트 초기화 버튼으로 리셋 가능

## ⚙️ 커스터마이징

### 광고 필터 추가하기

`content.js` 파일의 `AD_SELECTORS` 배열에 추가합니다:

```javascript
const AD_SELECTORS = [
  // 기존 필터들...
  '.my-custom-ad-class',  // 새로운 필터 추가
];
```

### 호스트 권한 조정

`manifest.json`의 `host_permissions`를 수정합니다:

```json
"host_permissions": [
  "https://example.com/*"  // 특정 사이트만 적용
]
```

## 🐛 문제 해결

### 광고가 여전히 보입니다
1. 페이지 새로고침 (Ctrl+Shift+R 또는 Cmd+Shift+R)
2. 확장프로그램 비활성화 후 다시 활성화
3. 콘솔에서 에러 확인 (F12 → Console)

### 웹사이트가 제대로 작동하지 않습니다
- `content.js`의 필터 규칙이 너무 공격적일 수 있습니다
- `AD_SELECTORS`에서 필터를 제거해 봅니다

## 📝 라이선스

이 프로젝트는 자유롭게 사용, 수정, 배포할 수 있습니다.

## 🤝 기여

개선 사항이나 버그 리포트는 이슈(Issues)를 통해 제출해주세요!

---

**최종 수정:** 2026년 6월 14일  
**버전:** 1.0.0  
**상태:** 제작 중 ✨
