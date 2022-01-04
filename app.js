import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.js";

const video = document.querySelector('.video');
const buttonVideo = document.querySelector('.playPause-btn')
const buttonAudio = document.querySelector('.mute')
const buttonScreen = document.querySelector('.screen')

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
buttonScreen.onclick = () => player.toogleFullscreen()

document.addEventListener('keydown', function(e){
    console.log(e)
    if(e.code == 'KeyF'){
        player.toogleFullscreen()
    }
    else {
        console.log('nel')
    }
})