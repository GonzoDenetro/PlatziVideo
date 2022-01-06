import MediaPlayer from "./MediaPlayer.js";
import AutoPlay from "./plugins/AutoPlay.js";
import AutoPause from "./plugins/AutoPause.ts";
import Comment from "./plugins/Comment.js";

const video = document.querySelector('.video');
const buttonVideo = document.querySelector('.playPause-btn')
const buttonAudio = document.querySelector('.mute')
const buttonScreen = document.querySelector('.screen')
const addCommentbtn = document.querySelector('.comment-btn')
const authorComment = document.querySelector('#author');
const comment = document.querySelector('#comment');
const commentsContainer = document.querySelector('.comentarios')

const player = new MediaPlayer({
    movie: video, 
    name: "Video fav", 
    plugins:[
        new AutoPlay(),
        new AutoPause(),
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
