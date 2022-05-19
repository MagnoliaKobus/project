const KEY = "d18bfc52627fefdb3fbe3c963a5a0a5d";

const urlArtist = `https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=${KEY}&format=json`;
const urlTrack = `https://ws.audioscrobbler.com/2.0/?method=chart.getTopTracks&api_key=${KEY}&format=json`;

fetch(urlArtist)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    const artist = document.getElementById("artist");
    for (step = 0; step < data.artists.artist.length; step++) {
      const tr1 = document.createElement("tr");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      const a = document.createElement("a");
      td1.innerText = `${step + 1}`;
      a.innerText = `${data.artists.artist[step].name}`;
      a.href = `${data.artists.artist[step].url}`;
      td2.appendChild(a);
      td3.innerText = `${data.artists.artist[step].playcount}회`;
      tr1.appendChild(td1);
      tr1.appendChild(td2);
      tr1.appendChild(td3);
      artist.appendChild(tr1);
    }
  });
fetch(urlTrack)
  .then((response) => response.json())
  .then((data) => {
    const track = document.getElementById("track");
    for (step = 0; step < data.tracks.track.length; step++) {
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
