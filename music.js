console.log("hello world");

let songIndex = 0;
let audioelement = new Audio('songs/1.mp3');
  let masterplay =  document.getElementById('masterplay');
  let myProgressBar = document.getElementById('myProgressBar');
  let gif = document.getElementById('gif');
  let masterSongName = document.getElementById('masterSongName');
  let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
   {songName: "Let Me Love You",filePath: "songs/0.mp3",coverpath:"covers/1.jpg"},
   {songName: "Believer",filePath: "songs/1.mp3",coverpath:"covers/2.jpg"},
   {songName: "BTS - Dynamite",filePath: "songs/2.mp3",coverpath:"covers/3.jpg"},
   {songName: "Natu-Natu",filePath: "songs/3.mp3",coverpath:"covers/4.jpg"},
   {songName: "Pasoori -Shae Gill",filePath: "songs/4.mp3",coverpath:"covers/5.jpg"},
   {songName: "Salaam Rocky Bhai",filePath: "songs/5.mp3",coverpath:"covers/6.jpg"},
   {songName: "Tillu Anna DJ Pedithe",filePath: "songs/6.mp3",coverpath:"covers/7.jpg"},
   {songName: "Waka-Waka",filePath: "songs/7.mp3",coverpath:"covers/8.jpg"},
   {songName: "Selfie Le Le Re",filePath: "songs/8.mp3",coverpath:"covers/9.jpg"},
]
songItems.forEach((element,i)=>{
   console.log(element,i);
   element.getElementsByTagName("img")[0].src = songs[i].coverpath;
   element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
  
})

 masterplay.addEventListener('click',()=>{
    if(audioelement.paused || audioelement.currentTime<=0){
      audioelement.play();
    //audioelement.play    
    masterplay.classList.remove('fa-play-circle');
    masterplay.classList.add('fa-circle-pause');
     gif.style.opacity = 1;
    }
    else{
       audioelement.pause();
    masterplay.classList.remove('fa-circle-pause');
    masterplay.classList.add('fa-play-circle');
 gif.style.opacity = 0;
    }
})

audioelement.addEventListener('timeupdate',()=>{
  console.log('timeupdate');
  progress = parseInt((audioelement.currentTime/audioelement.duration)*100);
  myProgressBar.value = progress;
})
myProgressBar.addEventListener('change',()=>{
   audioelement.currentTime = myProgressBar.value*audioelement.duration/100;
})
const makeAllPlays = ()=>{
  
   Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     
      element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');

   })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
   element.addEventListener('click', (e)=>{
      makeAllPlays();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-circle-pause');
      audioelement.src = `songs/${songIndex}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioelement.currentTime = 0;
      audioelement.play();
      gif.style.opacity = 1;
      masterplay.classList.remove('fa-play-circle');
      masterplay.classList.add('fa-circle-pause');
   })
})
document.getElementById('next').addEventListener('click',()=>{
   if(songIndex >8){
      songIndex = 0
   }else{
      songIndex += 1;
   }
   audioelement.src = `songs/${songIndex}.mp3`;
   masterSongName.innerText = songs[songIndex].songName;
   audioelement.currentTime = 0;
   audioelement.play();
   masterplay.classList.remove('fa-play-circle');
   masterplay.classList.add('fa-circle-pause');

})
document.getElementById('previous').addEventListener('click',()=>{
   if(songIndex <=0){
      songIndex = 0
   }else{
      songIndex -= 1;
   }
   audioelement.src = `songs/${songIndex}.mp3`;
   masterSongName.innerText = songs[songIndex].songName;
   audioelement.currentTime = 0;
   audioelement.play();
   masterplay.classList.remove('fa-play-circle');
   masterplay.classList.add('fa-circle-pause');

})


 