import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector('.video');
const buttonVideo = document.querySelector('.playPause-btn')
const buttonAudio = document.querySelector('.mute')

const player = new MediaPlayer({
    movie: video, 
    name: "Video fav", 
    plugins:[
        new AutoPlay(),
        new AutoPause(),
    ]
})

buttonVideo.onclick = () => player.playVideo();
buttonAudio.onclick = () => player.toogleMute()