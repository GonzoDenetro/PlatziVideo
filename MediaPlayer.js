function MediaPlayer({name, movie, plugins = []}){
    this.name = name;
    this.media = movie;
    this.plugins = plugins;

    this._initPlugins();
}

//Función para incializar plugins
MediaPlayer.prototype._initPlugins = function(){
    const player = {
        play: () => this.playVideo(), //La función play es igual a la función plyaVideo que creamos
        pause: ()=> this.pause(),
        media: this.media,

        get muted(){
            return this.media.muted
        },
        set muted(value){
            this.media.muted = value
        }
    }
    this.plugins.forEach(plugin => {
        plugin.run(player) //Al inicio vamos a correr cada plugin que tenemos
        console.log(this.plugins)
    })
}

//Función para poner play al video
MediaPlayer.prototype.playVideo = function(){
    if(this.media.paused){
        this.media.play();    
    }
    else {
        this.media.pause();
    }
}

MediaPlayer.prototype.pause = function(){
    if( !this.media.paused){
        this.media.pause()
    }
}

//Funciones para mutear o desmutear el video
MediaPlayer.prototype.mute = function(){
    this.media.muted = true;
}
MediaPlayer.prototype.unmuted = function(){
    this.media.muted = false;
}
MediaPlayer.prototype.toogleMute = function(){
    if(this.media.muted == false){
        this.media.muted = true;
    }
    else {
        this.media.muted = false;
    }
}

//Fullscreen function
MediaPlayer.prototype.toogleFullscreen = function (){
    if(this.media.requestFullscreen){
        this.media.requestFullscreen()
    }
}

export default MediaPlayer