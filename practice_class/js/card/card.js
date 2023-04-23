window.onload = function() {
// 코드를 작성
// 1. card를 저장할 배열을 만든다.
img = document.querySelectorAll("img");
board = document.getElementById("board");
initGame();
startGame();
let showBtn= document.getElementById("showBtn");
let shuffleBtn= document.getElementById("shuffleBtn");
showBtn.onclick = show;
shuffleBtn.onclick = shuffle;
// shuffleBtn.addEventListener('click', shuffle);

}

function initGame(){
    // 1. card를 담을 배열을 만든다.
    cardArr = [];
    // img = document.querySelectorAll("img");

    // 2. 배열을 초기화 하고  0~51의 숫자 
    for(let i=0; i<=51; i++) {
        cardArr[i] = img[i];
    }
    // 3. 배열을 섞는다.
    // cardArr.sort(function(a,b){return Math.random()-0.5}); 

    // 4. 카드를 div#board에 보여준다.
    // innerHTML = `<<img src="${img[i].src}">`
    // let board = document.getElementById("board");
    // let showBtn= document.getElementById("showBtn");
    // showBtn.onclick = show;
    // shuffleBtn.onclick = shuffle;

    // 5. 각 카드에 click이벤트를 등록한다.
    let imgArr = document.getElementsByTagName("img");

    for(let i=0;i<imgArr.length;i++) {
        imgArr[i].onclick = cardClick;
    }
}

function show(){
    // console.log(img);
    // console.log(board);
    // cardArr.sort(function(a,b){return Math.random()-0.5}); 
    console.log(cardArr);
    board.innerHTML = "";
    for(let j=0; j<=51; j++){
        board.innerHTML += `<img src="${cardArr[j].src}">`;
    }
}

function shuffle(){
    console.log(cardArr);
    cardArr.sort(function(a,b){return Math.random()-0.5}); 
    board.innerHTML = "";
    for(let j=0; j<=51; j++){
        board.innerHTML += `<img src="${cardArr[j].src}">`;
    }
}

// card가 앞면이면 true 아니면 flase를 반환
function isFront(card){
    return false;
}

// card를 뒤집는다.
function flip(card){

}

function cardClick() {
    // 1. 카드가 앞면인지 확인한다.
    let card = this;
    if(isFront(card)){
        return;
    } else {
        flip(card);
    }
    // 1-1. 앞면이면 return
    // 1-2. 뒷면이면 뒤집는다.
}
function startGame(){

}