class MediaPlayer {
    media: HTMLMediaElement;
    plugins: Array <any>;
    name: string;
    container:HTMLElement;

    constructor({ name, movie, plugins = [] }) {
        this.name = name;
        this.media = movie;
        this.plugins = plugins;

        this.initPlayer();
        this.initPlugins();
    }
    

    initPlayer(){
        this.container = document.createElement('div');
        this.container.classList.add('video-container');
        this.container.style.position = 'relative';

        this.media.parentNode.insertBefore(this.container, this.media)
        this.container.appendChild(this.media)   
    }

    //Función para incializar plugins
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this); //Al inicio vamos a correr cada plugin que tenemos
            console.log(this.plugins);
        });
    }
    //Función para poner play al video
    playVideo() {
        if (this.media.paused) {
            this.media.play();
        }
        else {
            this.media.pause();
        }
    }
    play() {
        if (this.media.paused) {
            this.media.play();
        }
        else {
            this.media.pause();
        }
    }
    pause() {
        if (!this.media.paused) {
            this.media.pause();
        }
    }
    //Funciones para mutear o desmutear el video
    mute() {
        this.media.muted = true;
    }
    unmuted() {
        this.media.muted = false;
    }
    toogleMute() {
        if (this.media.muted == false) {
            this.media.muted = true;
        }
        else {
            this.media.muted = false;
        }
    }
    //Fullscreen function
    toogleFullscreen() {
        if (this.media.requestFullscreen) {
            this.media.requestFullscreen();
        }
    }
}

export default MediaPlayer