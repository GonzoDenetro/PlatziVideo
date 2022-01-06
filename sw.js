//Cargar recursos a cache
self.addEventListener('install', function(event){
    event.waitUntil(precache())
})

//Respuestas con cache
self.addEventListener('fetch', function(event){
    const request = event.request;

    if(request.method == 'GET'){
        //Buscamos en cache
        event.respondWith(cacheResponse(request))
    }

    //Actualizar cache
    event.waitUntil(updateCache(request))
})

async function updateCache(request){
    const cache = await caches.open('V1')
    const response = await fetch(request)
    return cache.put(request, response)
}

async function cacheResponse(request){
    const cache = await caches.open('V1')
    const response = await cache.match(request)
    return response || fetch(request)
}

async function precache(){
    const cache = await caches.open('V1');
    return cache.addAll([
        /* '/',
        '/index.html',
        '/CSS/style.css',
        '/app.js',
        '/MediaPlayer.js',
        '/plugins/AutoPlay.js',
        '/plugins/AutoPause.js',
        '/plugins/Comment.js',
        '/Assets/counter.mp4' */
    ])
}