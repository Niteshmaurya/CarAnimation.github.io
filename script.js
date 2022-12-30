let audio = document.createElement('audio');
audio.setAttribute('src','sound.mp3');
audio.loop=true;
audio.play();

let play = document.getElementById('play');
let pause = document.getElementById('pause');
// let audio = new Audio('sound.mp3');

play.addEventListener('click',()=>{
    audio.play();
})
play.addEventListener('click',()=>{
    audio.pause();
})