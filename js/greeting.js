const reset = document.querySelector("#reset");

const onclickhandler = (event) => {
  event.preventDefault;
  localStorage.clear();
  window.location.href = "login.html";
};

reset.addEventListener("click", onclickhandler);
const greeting = document.querySelector("#greeting");

const USERNAME_KEY = "username";
const SavedUsername = localStorage.getItem(USERNAME_KEY);
if (SavedUsername === null) {
  window.location.href = "login.html";
} else {
  greeting.innerText = `${SavedUsername}님 환영합니다.`;
}
const outer = document.querySelector(".outer");
const innerList = document.querySelector(".inner-list");
const inners = document.querySelectorAll(".inner");
let currentIndex = 0; // 현재 슬라이드 화면 인덱스

inners.forEach((inner) => {
  inner.style.width = `${outer.clientWidth}px`; // inner의 width를 모두 outer의 width로 만들기
});

innerList.style.width = `${outer.clientWidth * inners.length}px`; // innerList의 width를 inner의 width * inner의 개수로 만들기

/*
  버튼에 이벤트 등록하기
*/
const buttonLeft = document.querySelector(".button-left");
const buttonRight = document.querySelector(".button-right");

buttonLeft.addEventListener("click", () => {
  currentIndex--;
  currentIndex = currentIndex < 0 ? 0 : currentIndex; // index값이 0보다 작아질 경우 0으로 변경
  innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
  clearInterval(interval); // 기존 동작되던 interval 제거
  interval = getInterval(); // 새로운 interval 등록
});

buttonRight.addEventListener("click", () => {
  currentIndex++;
  currentIndex =
    currentIndex >= inners.length ? inners.length - 1 : currentIndex; // index값이 inner의 총 개수보다 많아질 경우 마지막 인덱스값으로 변경
  innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`; // index만큼 margin을 주어 옆으로 밀기
  clearInterval(interval); // 기존 동작되던 interval 제거
  interval = getInterval(); // 새로운 interval 등록
});

/*
  주기적으로 화면 넘기기
*/
const getInterval = () => {
  return setInterval(() => {
    currentIndex++;
    currentIndex = currentIndex >= inners.length ? 0 : currentIndex;
    innerList.style.marginLeft = `-${outer.clientWidth * currentIndex}px`;
  }, 5000);
};

let interval = getInterval();

document.body.classList.add("stop-scroll");

const KEY = "d18bfc52627fefdb3fbe3c963a5a0a5d";
const urlTrack = `https://ws.audioscrobbler.com/2.0/?method=chart.getTopTracks&api_key=${KEY}&format=json`;
fetch(urlTrack)
  .then((response) => response.json())
  .then((data) => {
    const track = document.getElementById("track");
    for (step = 0; step < 15; step++) {
      const tr2 = document.createElement("tr");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      const a = document.createElement("a");
      td1.innerText = `${step + 1}`;
      a.innerText = `${data.tracks.track[step].name}`;
      a.href = `${data.tracks.track[step].url}`;
      td2.appendChild(a);
      td3.innerText = `${data.tracks.track[step].playcount}회`;
      tr2.appendChild(td1);
      tr2.appendChild(td2);
      tr2.appendChild(td3);
      track.appendChild(tr2);
    }
  });
