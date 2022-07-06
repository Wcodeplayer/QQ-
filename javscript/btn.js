function play_btn(){
    var item=document.getElementById("change1");
    if(item.className=='play_btn fas fa-play'){
        item.className=("play_btn fas fa-stop");
    }
    else{
        item.className=('play_btn fas fa-play');
    }
}