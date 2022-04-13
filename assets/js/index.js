//Yandex Music
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
        "#yandex-music"
        ).innerHTML = `<div class="yandex-music-alert">
                <div class="yandex-music-description">
                Currently listening to <b>${res.name}</b> by <b>${res.artist}</b> on <b>Yandex Music</b>
                <img class="yandex-music-logo" src="images/yandex_music_logo.png" alt="">
                </div>
        </div>`;
    } else {
        console.log(`[last.fm] No song data received, waiting...`);
        document.querySelector("#yandex-music").innerHTML = ``;
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