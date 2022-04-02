const $video = document.querySelector('#video')
const $progress = document.querySelector('#progress')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward_10s = document.querySelector("#backward_10s")
const $forward_10s = document.querySelector("#forward_10s")

$play.addEventListener('click', handlePlay)
$pause.addEventListener('click', handlePause)
$backward_10s.addEventListener('click', handleBackward)
$forward_10s.addEventListener('click', handleForward)
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)
$progress.addEventListener('input', handleInput)

function handlePlay() {
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('le diste click al boton de play')
}

function handlePause() {
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
    console.log('le diste click al boton de pausa')
}


function handleBackward(){    
    $video.currentTime = $video.currentTime - 10
    console.log('le diste click al boton de backward', $video.currentTime)    
}


function handleForward(){    
    $video.currentTime = $video.currentTime + 10
    console.log('le diste click al boton de backward', $video.currentTime)    
}


function handleLoaded(){
    $progress.max = $video.duration 
    console.log('Ha cargado mi video', $video.duration)
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime
    console.log('tiempo actual', $video.currentTime)
}

function handleInput(){
    $video.currentTime = $progress.value
    console.log('este es el progress value', $progress.value)
}



