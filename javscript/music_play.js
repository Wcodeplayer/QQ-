var play_btn = document.getElementsByClassName("play_btn");


var song = "./lib/source/music/哪里都是你.mp3";
var song1 = "./lib/source/music/踏雪.mp3";
var song2 = "./lib/source/music/记念.mp3";
var song_list = [song,song1,song2]
var index = 0;

function music_play(){
    var mymusic = document.getElementById("music_audio")
    
    var item=document.getElementById("change1");
    if(item.className=='play_btn fas fa-play'){
        item.className=("play_btn fas fa-stop");
        mymusic.play();
    }
    else{
        item.className=('play_btn fas fa-play');
        mymusic.pause();
    }
}
function music_next(){
    var item=document.getElementById("change1");
    index = (index + 1)
    if(index>=3){
        index = 0;
    }
    var mymusic = document.getElementById("music_audio")
    mymusic.src = song_list[index];
    item.className=("play_btn fas fa-stop");
    mymusic.play();
}
function music_pre(){
    var item=document.getElementById("change1");
    index = (index - 1)
    if(index<0){
        index = 2;
    }
    var mymusic = document.getElementById("music_audio")
    mymusic.src = song_list[index];
    item.className=("play_btn fas fa-stop");
    mymusic.play();
}
