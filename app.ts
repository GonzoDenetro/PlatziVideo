import MediaPlayer from "./MediaPlayer";
import AutoPlay from "./plugins/AutoPlay";
import AutoPause from "./plugins/AutoPause";
import Comment from "./plugins/Comment";
import AdsPlugin from "./Ads/AdsPlugin";

const video:HTMLElement = document.querySelector('.video');
const buttonVideo:HTMLElement = document.querySelector('.playPause-btn')
const buttonAudio:HTMLElement = document.querySelector('.mute')
const buttonScreen:HTMLElement = document.querySelector('.screen')
const addCommentbtn:HTMLElement = document.querySelector('.comment-btn')
const authorComment:HTMLInputElement = document.querySelector('#author');
const comment:HTMLInputElement = document.querySelector('#comment');
const commentsContainer:HTMLElement = document.querySelector('.comentarios')

const player = new MediaPlayer({
    movie: video, 
    name: "Video fav", 
    plugins:[
        new AutoPlay(),
        new AutoPause(),
        new AdsPlugin(),
    ]
})

buttonVideo.onclick = () => player.playVideo();
buttonAudio.onclick = () => player.toogleMute()
buttonScreen.onclick = () => player.toogleFullscreen()
player.media.onclick = () => player.playVideo()

document.addEventListener('keydown', function(e){
    console.log(e)
    if(e.code == 'KeyF'){
        player.toogleFullscreen()
    }
    else {
        console.log('nel')
    }
})

addCommentbtn.onclick = () => {
    let autor = authorComment.value;
    let comentario = comment.value;
    const nuevoComentario = new Comment({author: autor, comment: comentario})
    nuevoComentario.addComment(commentsContainer)
}


if('serviceWorker' in navigator){
    navigator.serviceWorker.register(
        new URL( '/sw.js', import.meta.url),
        {type: 'module',}
    )
    .then(()=> console.log('ServiceWorker registration successful'))
    .catch(error => console.error(error.message))
}

//document.addEventListener('visibilitychange', () => console.log(`Visibility: ${document.visibilityState}`))
