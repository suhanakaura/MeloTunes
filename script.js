// initialise the variables
let songIndex =  0;
let play = Array.from(document.getElementsByClassName('play'));
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let gif = document.getElementById('gif');
let songs = [
    {songName:"Abhi kuch dino se" , singerName:"Mohit Chauhan" , filePath:"songs/Abhi_kuch_dino_se.mp3", coverPath:"bgimg.jpg"},
    {songName:"Alisha" , singerName:"Salim-Sulaiman" , filePath:"songs/Alisha.mp3", coverPath:"bgimg.jpg"},
    {songName:"Happier" , singerName:"Marshmello & Bastille" , filePath:"songs/happier.mp3", coverPath:"bgimg.jpg"},
    {songName:"Ishq Hai" , singerName:"Anurag Saikia" , filePath:"songs/Ishq_hai.mp3", coverPath:"bgimg.jpg"},
    {songName:"Kya" , singerName:"Pritam" , filePath:"songs/Kya.mp3", coverPath:"bgimg.jpg"},
    {songName:"Mere Dholna" , singerName:"Pritam" , filePath:"songs/Mere_dholna.mp3", coverPath:"bgimg.jpg"},
    {songName:"Rangrez" , singerName:"Lakhwinder Wadali" , filePath:"songs/Rangrez.mp3", coverPath:"bgimg.jpg"},
    {songName:"Sajdaa" , singerName:"Shankar-Ehsaan-Loy" , filePath:"songs/Sajdaa.mp3", coverPath:"bgimg.jpg"},
    {songName:"Small Town Girl" , singerName:"Vishal Shekhar" , filePath:"songs/Small_town_girl.mp3", coverPath:"bgimg.jpg"},
    {songName:"Teri Ore" , singerName:"Shreya Ghoshal" , filePath:"songs/Teri_ore.mp3", coverPath:"bgimg.jpg"},
]
let audioElement = new Audio(songs[9].filePath);
songItems.forEach((ele,i)=>{
    console.log(ele);
    ele.getElementsByTagName("img")[0].src = songs[i].coverPath;
    ele.getElementsByClassName("songName")[0].innerText = songs[i].songName;
    audioElement = new Audio(songs[i].filePath);
});

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

// audioElement.play();
// handle play/pause click

// listen for events
audioElement.addEventListener('timeupdate',()=>{
    // update seekbar
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100); //percent change
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration)/100
});
