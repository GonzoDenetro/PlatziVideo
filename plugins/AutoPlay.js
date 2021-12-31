class AutoPlay{
    constructor(){

    }
    run(player){
        //Lo que recibimos como paráemtro es el objeto que creamos y corre el método play que le pasamos
        if(!player.muted){
            player.muted = true; //Usamos getters y setters para mute
        }
        //player.mute()
        player.play()
    }
}


export default AutoPlay;