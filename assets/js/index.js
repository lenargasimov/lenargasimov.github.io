//Yandex Music
const parseResponse = (res) => {
    const track = res.recenttracks.track[0];
    const artist = track.artist["#text"];
    const image = track.image[1]["#text"];
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
        "#yandex"
        ).innerHTML = `<div class="yandex-alert">
                <div class="yandex-description">
                <img class="yandex-artwork" src="${res.image}" alt="" />
                Currently listening to <b style="color: #000000 ; font-weight: bold">${res.name}</b> by <b style="color: #000000; font-weight: bold">${res.artist}</b> on <b style="color: #000000; font-weight: bold">Yandex Music</b>
                </div>
        </div>`;
    } else {
        console.log(`[last.fm] No song data received, waiting...`);
        document.querySelector("#yandex").innerHTML = ``;
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