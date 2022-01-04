class AutoPause {
    constructor(){
        this.umbral = 0.25;
        this.handlerIntersection = this.handlerIntersection.bind(this)
    }
    
    run(player){
        this.player = player
        let observer = new IntersectionObserver(this.handlerIntersection, {
            threshold: this.umbral,
        })

        observer.observe(player.media)
    }

    handlerIntersection(entries){
        const entry = entries[0]
        console.log(entry)
        //const isVisible = entry.intersectionRatio <= this.umbral
        
        if(entry.isIntersecting){
            this.player.play()
        }
        else{ 
            this.player.pause()
        }
    }
}

export default AutoPause