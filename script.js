// initialise the variables
let songIndex =  0;
let play = Array.from(document.getElementsByClassName('play'));
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let gif = document.getElementById('gif');
let curName = document.getElementById('masterSongName');
let audioElement = new Audio("songs/Abhi_kuch_dino_se.mp3");
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

songItems.forEach((ele,i)=>{
    ele.getElementsByTagName("img")[0].src = songs[i].coverPath;
    ele.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        curName.innerText = songs[songIndex].songName;
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
const makeAllPlay = () =>{
    Array.from(document.getElementsByClassName("play")).forEach((ele)=>{
        ele.classList.remove("fa-pause-circle");
        ele.classList.add("fa-play-circle");
    })
}
Array.from(document.getElementsByClassName("play")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.currentTime = 0;
        audioElement.src = songs[songIndex].filePath;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        curName.innerText = songs[songIndex].songName;
    })
})

document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0;
    }
    else{
        songIndex+=1;
    }
    audioElement.currentTime = 0;
    audioElement.src = songs[songIndex].filePath;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    curName.innerText = songs[songIndex].songName;
})
document.getElementById("previous").addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 9;
    }
    else{
        songIndex-=1;
    }
    audioElement.currentTime = 0;
    audioElement.src = songs[songIndex].filePath;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    curName.innerText = songs[songIndex].songName;
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
