# 🐶 FITPET

<img width="1552" alt="스크린샷 2021-08-29 오후 4 24 05" src="https://user-images.githubusercontent.com/69631850/131650902-dafdb762-0baf-466f-9ebd-45f343a1c852.png">
<div align='center'>
  
  ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
  ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
  ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
  ![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

</div>

<h4><a href="https://www.notion.so/FITPET-d85e24eb8e954970a2a70af180d75310" target="_blank"> Notion</a><h4>

개발기간  2021.07 ~ 진행 중
<br/>
<br/>
### 👨‍👩‍👧‍👧 팀 구성

[팀 소개 페이지로 이동하기](https://www.notion.so/8654f82b457e4781bb826e4f34f52df8) <br/>
Front-end(React) : 3인 <br/>
Back-end : 2인 ([Github Repo](https://github.com/re-nolja/FITPET_BACKEND)) <br/>
Designer : 2인  <br/>


### ☀️ 목차
[1. 프로젝트 설명 ](#프로젝트-설명)<br/>
[2. 사용기술 ](#-tools)<br/>
[3. 기능정보 ](#-기능정보)<br/>
[4. 진행과정 ](#진행과정)<br/>


## 프로젝트 설명 



## 🛠 Tools
```
- View (React with JavaScript, React-Router, react-icon, Styled-components)
- State Management (Redux, Redux-Thunk, Redux-saga)
- Build Tool (Create React App)
- Other Tools (Git, Github, notion, Discord, Zeplin, Google Docs)
```

<br/>

## 🕹 기능정보

### 디렉토리 아키텍쳐

- src > common 폴더에 자주 사용되는 폰트, 버튼 UI 컴포넌트 등을 따로 분리하여 재사용에 용이하도록 구성.
- src > components 폴더에는 presentational components 들을 분류하여 view 영역을 따로 관리.
- src > pages 폴더에는 라우팅처리와 관련하여 해당 페이지를 관리하는 부분.
- src > hooks 커스텀 훅을 저장하여 재사용성을 높임.
- src > containers 주로 비동기 통신과 관련된 로직을 이곳에서 처리하며 useCallback을 이용하여 함수 렌더링 최적화, 뷰와 함수 생성, 비동기 로직을 완전분리.
- src > redux 리덕스 스토어를 생성, ducks 패턴을 이용하여 관심사대로 모듈들을 분리하였습니다. (Redux Saga 주로 사용)
- src > services 에는 API를 호출하는 반복되는 로직들을 정리하였습니다. ES6의 클래스를 사용하여 필요한 관심사대로 분리하였습니다.

### 헤더

- 메인로고가 이미지이기 때문에 웹 접근성을 고려하여 대체텍스트 처리.
- React에서 제공하는 Portal을 사용하여 회원가입, 로그인 모달창 구현.
- 카카오 로그인 API 연동하여 로그인 기능 구현.
- UX를 고려하여 로그인, 회원가입시 로딩 스피너 사용.
- 전체 모달창을 하나의 리덕스 module에서 관리.
- 스크롤시 네비게이션 생기도록 구현(커스텀훅 사용).
- 로그인시 토큰 localStorage에 저장.
  
  



---

## 진행과정
### 협업환경 구축
- notion을 이용하여 진행현황과 요청사항을 공유할 수 있도록 했습니다.
- 매주 일요일 5시에 Discord를 이용하여 전체 회의를 진행했습니다.
  

