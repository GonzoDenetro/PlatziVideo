import MediaPlayer from "../MediaPlayer";

class AutoPause {
    private umbral: number;
    private visibleState: boolean;
    player: MediaPlayer;

    constructor(){
        this.umbral = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this)
        this.visibilityChange = this.visibilityChange.bind(this)
        this.visibleState = true;
    }
    
    run(player){
        this.player = player
        let observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.umbral,
        })

        observer.observe(player.media)
        document.addEventListener('visibilitychange', this.visibilityChange)
    }

    handlerIntersection(entries: IntersectionObserverEntry[]){
        const entry = entries[0]
        console.log(entry)
        //const isVisible = entry.intersectionRatio <= this.umbral
        
        if(entry.isIntersecting){
            this.player.play()
            this.visibleState = true
        }
        else{ 
            this.player.pause()
            this.visibleState = false
        }
    }

    visibilityChange(){
        if(document.visibilityState == 'visible' && this.visibleState == true){
            this.player.play()
        }
        else {
            this.player.pause()
        }
    }
}

export default AutoPause