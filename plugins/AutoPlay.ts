import MediaPlayer from "../MediaPlayer";

class AutoPlay{
    constructor(){

    }
    run(player: MediaPlayer){
        //Lo que recibimos como paráemtro es el objeto que creamos y corre el método play que le pasamos
        if(!player.media.muted){
            player.media.muted = true; //Usamos getters y setters para mute
        }
        //player.mute()
        player.media.play()
        //window.onload = player.play()
    }
}


export default AutoPlay;