const video = document.querySelector('.video');
const buttonVideo = document.querySelector('.playPause-btn')


//FORMA 1
/* function MediaPlayer(obj){
    this.name = obj.name;
    this.media = obj.movie
} */

//FORMA 2
function MediaPlayer({name, movie}){
    this.name = name;
    this.media = movie;
}
MediaPlayer.prototype.playVideo = function(){
    if(this.media.paused){
        this.media.play();    
    }
    else {
        this.media.pause();
    }
}

const player = new MediaPlayer({movie: video, name: "Video fav"})

buttonVideo.onclick = () => player.playVideo();

