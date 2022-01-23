import MediaPlayer from "../MediaPlayer";
import Ads from "./Ads"; //Class Ads
import { Ad } from "./Ads"; //Interace Ad

class AdsPlugin{
    private ads: Ads;
    private player: MediaPlayer;
    private media: HTMLMediaElement;
    private currentAd: Ad;
    private adContainer: HTMLElement;
    private closeIcon:HTMLElement;

    constructor(){
        this.adContainer = document.createElement('div')
        this.adContainer.classList.add('ads-container')
        this.ads = Ads.getInstance() //Instanciamos con Singleton
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this)
    }

    closeBtn(){
        this.closeIcon = document.createElement('span');
        this.closeIcon.innerHTML = 'X';
        this.closeIcon.classList.add('close-btn')
    }

    run(player: MediaPlayer){
        this.player = player;
        this.media = this.player.media;

        this.player.container.appendChild(this.adContainer)

        this.media.addEventListener('timeupdate', this.handleTimeUpdate);

        this.closeBtn()
    }

    private handleTimeUpdate(){
        const currentTime = Math.floor(this.media.currentTime);

        if(currentTime % 30 === 0){
            this.renderAd()
        }
    }

    private renderAd(){
        if(this.currentAd){
            return
        }

        const ad = this.ads.getAd()
        this.currentAd = ad;
        //console.log(this.currentAd)
        this.adContainer.innerHTML = `<div class="ads">
        <a href="${ad.url}">
            <img src="${ad.image}" class="ads_img" />
            <div class="ads_info">
                <h3 class="ads_info--title">${ad.title}</h3>
                <p class="ads_info--body">${ad.body}</p>
            </div>
        </a>
        </div>`

        this.adContainer.appendChild(this.closeIcon)

        this.closeIcon.addEventListener('click', ()=>{
            this.adContainer.innerHTML = '';
            this.currentAd = null;
        })

        setTimeout(()=>{
            this.currentAd = null;
            this.adContainer.innerHTML = '';
        }, 50000)

    }    
}

export default AdsPlugin




