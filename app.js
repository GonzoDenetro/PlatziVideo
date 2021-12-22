import MediaPlayer from "./MediaPlayer.js";

const video = document.querySelector('.video');
const buttonVideo = document.querySelector('.playPause-btn')

const player = new MediaPlayer({movie: video, name: "Video fav"})

buttonVideo.onclick = () => player.playVideo();

