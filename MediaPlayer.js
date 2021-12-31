function MediaPlayer({name, movie, plugins = []}){
    this.name = name;
    this.media = movie;
    this.plugins = plugins;

    this._initPlugins();
}

//Función para incializar plugins
MediaPlayer.prototype._initPlugins = function(){
    this.plugins.forEach(plugin => {
        plugin.run(this) //Al inicio vamos a correr cada plugin que tenemos
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

export default MediaPlayer