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

export default MediaPlayer