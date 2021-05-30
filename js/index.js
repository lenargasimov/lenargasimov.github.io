//Spotify
const parseResponse = (res) => {
const track = res.recenttracks.track[0];
const artist = track.artist["#text"];
const image = track.image[3]["#text"];
const name = track.name;

const np = track["@attr"] ? track["@attr"]["nowplaying"] === "true" : false;

return {
    artist,
    name,
    image,
    np,
};
};

const setResponse = (res) => {
if (res.np === true) {
    console.log(`[last.fm] Received song data: ${res.name} - ${res.artist}`);
    document.querySelector(
    "#spotify"
    ).innerHTML = `<div class="green">
            <div class="spotify-description">
            Currently listening to <b>${res.name}</b> by <b>${res.artist}</b> on <b>Spotify</b>
            </div>
    </div>`;
} else {
    console.log(`[last.fm] No song data received, waiting...`);
    document.querySelector("#spotify").innerHTML = ``;
}
};

const getSong = () => {
fetch(
    "https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=lenargasimov&api_key=cee848cbe531c9f7c10c607de2d0c1f8&format=json&limit=1"
)
    .then((res) => res.json())
    .then(parseResponse)
    .then(setResponse);
};

setInterval(getSong, 15 * 1000);
getSong();

//Clock
function showTime(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";

    if(h == 0){
        h = 12;
    }

    if(h > 12){
        h = h - 12;
        session = "PM";
    }

    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;

    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;

    setTimeout(showTime, 1000);

}

showTime();

//Burger menu
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}