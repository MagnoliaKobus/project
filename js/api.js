const url = `http://musicbrainz.org/ws/2/artist/?query=name:changmo&fmt=json`;
// fetch(url).then((data) => {
//   console.log(data);
// });
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(`${data.count}개의 검색 결과가 있습니다.`);
    console.log(`아티스트의 이름: ${data.artists[0].name}`);
  });
