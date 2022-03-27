let audio = document.getElementById("audio");
let time = document.querySelector(".time");
let btnPlay = document.querySelector(".play");
let btnPause = document.querySelector(".pause");
let btnPrev = document.querySelector(".prev");
let img = document.querySelector(".imageList");
let btnNext = document.querySelector(".next");

let playlist = [
  "chelik.mp3",
  "monaco.mp3",
  "Ариэль.mp3",
  "Друг.mp3",
  "горит.mp3",
];
let imgList = [
  "https://poster.nicefon.ru/2016_10/01/1080x610/1600977c7c3cfcb83d4f6f.jpg",
  "https://st3.depositphotos.com/4252389/18503/i/600/depositphotos_185036534-stock-photo-chisinau-moldova-october-11-2017.jpg",
  "https://a.d-cd.net/58306cas-960.jpg",
  "https://ic.pics.livejournal.com/vasneverov/17531044/514133/514133_1000.jpg",
  "https://st.depositphotos.com/1705215/2763/i/600/depositphotos_27635167-stock-photo-radiator-engine-cooling-supercar-mercedes.jpg",
];

let treck;

window.onload = function () {
  treck = 0;
};

function switchTreck(numTreck) {
  audio.src = "./audio/" + playlist[numTreck];
  img.src = imgList[numTreck];
  audio.currentTime = 0;
  audio.play();
  Progress();
}
btnPlay.addEventListener("click", function () {
  audio.play();
});
const Progress = () => {
  audioPlay = setInterval(function () {
    let audioTime = Math.round(audio.currentTime);

    let audioLength = Math.round(audio.duration);

    time.style.width = (audioTime * 100) / audioLength + "%";

    if (audioTime == audioLength && treck < 3) {
      treck++;
      switchTreck(treck);
    } else if (audioTime == audioLength && treck >= 3) {
      treck = 0;
      switchTreck(treck);
    }
  }, 10);
};
btnPause.addEventListener("click", function () {
  audio.pause();
  clearInterval(audioPlay);
});
btnPrev.addEventListener("click", function () {
  if (treck > 0) {
    treck--;
    switchTreck(treck);
  } else {
    treck = playlist.length - 1;
    switchTreck(treck);
  }
});

btnNext.addEventListener("click", function () {
  if (treck < playlist.length - 1) {
    treck++;
    switchTreck(treck);
  } else {
    treck = 0;
    switchTreck(treck);
  }
  Progress();
});
